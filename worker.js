export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let path = url.pathname;
    
    // SPA fallback
    if (path === "/" || !path.includes(".")) {
      path = "/index.html";
    }
    
    return env.ASSETS.fetch(new URL(path, url.origin));
  },
};