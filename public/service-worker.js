self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  // Clear all old caches on activation so stale HTML never blocks a refresh
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(names.map(name => caches.delete(name)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;

  // Never cache navigation requests (HTML pages).
  // This is the critical fix: on refresh the browser always fetches
  // fresh index.html from the server so React Router can handle the route.
  if (request.mode === 'navigate') {
    event.respondWith(fetch(request));
    return;
  }

  // For non-navigation requests (JS, CSS, images, fonts, etc.),
  // use a network-first strategy with cache fallback for offline support.
  event.respondWith(
    fetch(request)
      .then(networkResponse => {
        // Only cache successful GET responses
        if (request.method === 'GET' && networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open('elweb-cache-v2').then(cache => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Network failed — fall back to cache
        return caches.match(request);
      })
  );
});
