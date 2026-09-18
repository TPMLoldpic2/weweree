// Samsung Internet PWA recognition service worker.
// IMPORTANT: This service worker intentionally stores NOTHING.
// It does not use Cache Storage and does not pre-download MP3 files.

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  // Network pass-through only. No caches.open(), no cache.put().
  event.respondWith(fetch(event.request));
});
