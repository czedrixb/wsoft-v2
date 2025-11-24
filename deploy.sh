#!/bin/bash
APP_PATH="/opt/bitnami/projects/wsoftlabs-website-v2"

# Load user environment to get Node.js in PATH
if [ -f ~/.bashrc ]; then
    source ~/.bashrc
fi

# Find node executable - try multiple locations
NODE_BIN=""

# Try NVM directory (expand wildcard properly)
if [ -z "$NODE_BIN" ] && [ -d "$HOME/.nvm/versions/node" ]; then
    NVM_NODE=$(find "$HOME/.nvm/versions/node" -name "node" -type f -executable 2>/dev/null | head -n 1)
    if [ -n "$NVM_NODE" ]; then
        NODE_BIN="$NVM_NODE"
    fi
fi

# Try common Bitnami paths
if [ -z "$NODE_BIN" ] && [ -f "/opt/bitnami/node/bin/node" ]; then
    NODE_BIN="/opt/bitnami/node/bin/node"
fi

# Try system paths
if [ -z "$NODE_BIN" ]; then
    NODE_BIN=$(command -v node 2>/dev/null)
fi

# Verify we found node
if [ -z "$NODE_BIN" ]; then
    echo "ERROR: Node.js not found in any location"
    echo "Searched: NVM, /opt/bitnami/node/bin, PATH"
    echo "Current PATH: $PATH"
    exit 1
fi

echo "Using Node.js: $NODE_BIN ($($NODE_BIN -v))"

cd $APP_PATH

# Swap directories
mv output output-old 2>/dev/null || true
mv output-new output

# Restart server
if [ -f nuxt.pid ]; then
    OLD_PID=$(cat nuxt.pid)
    cd output
    PORT=3000 NODE_ENV=production nohup $NODE_BIN --max-old-space-size=380 server/index.mjs > ../nuxt.log 2>&1 &
    echo $! > ../nuxt.pid
    kill $OLD_PID 2>/dev/null || true
else
    cd output
    PORT=3000 NODE_ENV=production nohup $NODE_BIN --max-old-space-size=380 server/index.mjs > ../nuxt.log 2>&1 &
    echo $! > ../nuxt.pid
fi

# Verify deployment
sleep 3
NEW_PID=$(cat ../nuxt.pid 2>/dev/null)

# Check if process is running
if [ -n "$NEW_PID" ] && kill -0 $NEW_PID 2>/dev/null; then
    # Check if server responds
    sleep 2
    if curl -f http://localhost:3000 > /dev/null 2>&1 || kill -0 $NEW_PID 2>/dev/null; then
        echo "Deploy successful!"
        rm -rf ../output-old
        exit 0
    fi
fi

# Deploy failed - rollback
echo "Deploy failed! Rolling back..."
echo "Check logs: tail -100 $APP_PATH/nuxt.log"

# Go back to app directory to perform rollback
cd $APP_PATH

# Clean up any previous failed deployments
rm -rf output-failed
# Move failed deployment for inspection
mv output output-failed 2>/dev/null || true

# Restore old version if it exists
if [ -d output-old ]; then
    mv output-old output
    # Restart old version
    cd output
    PORT=3000 NODE_ENV=production nohup $NODE_BIN --max-old-space-size=380 server/index.mjs > ../nuxt.log 2>&1 &
    echo $! > ../nuxt.pid
    echo "Rolled back to previous version"
else
    echo "No previous version to rollback to!"
fi

exit 1