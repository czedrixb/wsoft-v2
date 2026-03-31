import { defineEventHandler } from 'h3'

let cachedToken = null;
let tokenExpiry = null;

async function getValidToken(config) {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry - 300000) {
    console.log('[API] Using cached token');
    return cachedToken;
  }

  console.log('[API] Getting new auth token for blogs...');
  const loginResponse = await $fetch('https://blog.wsoftdev.space/api/login', {
    method: 'POST',
    body: {
      email: config.blogEmail,
      password: config.blogPassword
    }
  });

  if (!loginResponse?.access_token) {
    throw new Error('Failed to get access token');
  }

  cachedToken = loginResponse.access_token;
  tokenExpiry = Date.now() + 3600000; 

  return cachedToken;
}

export default defineEventHandler(async (event) => {
  if (process.env.prerender || process.env.NITRO_PRESET === 'prerender') {
    console.log('[API] Skipping blog fetch during prerender');
    return [];
  }

  try {
    const config = useRuntimeConfig(event)
    
    console.log('[API] Blog credentials check:', { 
      hasEmail: !!config.blogEmail, 
      hasPassword: !!config.blogPassword,
      env: process.env.NODE_ENV 
    });
    
    const token = await getValidToken(config);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); 
    
    const blogsResponse = await $fetch('https://blog.wsoftdev.space/api/getPosts', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      },
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    console.log('[API] Received blogs response:', Array.isArray(blogsResponse) ? `${blogsResponse.length} blogs` : typeof blogsResponse);
    
    return blogsResponse;
    
  } catch (error) {
    console.error('[API] Error fetching blogs:', error);
    
    if (error.message?.includes('401') || error.message?.includes('unauthorized')) {
      cachedToken = null;
      tokenExpiry = null;
    }
    
    return [];
  }
});