#!/bin/bash
set -e
APP_PATH="/opt/bitnami/projects/wsoftlabs-website-v2"

cd $APP_PATH

# Swap directories
rm -rf output-old
mv output output-old 2>/dev/null || true
mv output-new output

# Restart via systemd
sudo systemctl restart wsoftlabs-website

# Verify
sleep 3
if curl -fsS http://localhost:3000 > /dev/null; then
    echo "Deploy successful!"
    rm -rf output-old
    exit 0
fi

# Rollback
echo "Deploy failed! Rolling back..."
rm -rf output-failed
mv output output-failed
mv output-old output
sudo systemctl restart wsoftlabs-website
echo "Rolled back. Check logs: sudo journalctl -u wsoftlabs-website -n 100"
exit 1