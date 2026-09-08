// Minimal service worker for Keys4Travels — caches the app shell so the PWA
// still opens (with a lightweight offline view) without a network connection.
// Bump CACHE_VERSION whenever the shell files below change materially.
const CACHE_VERSION = "k4t-shell-v1";
const APP_SHELL = [
  "/",
  "/manifest.json",
  "/logo-primary.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => {
        // Ignore individual precache failures (e.g. offline first install).
      })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_VERSION)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

// Network-first for navigations (so content stays fresh), falling back to
// the cached shell when offline; cache-first for same-origin static assets.
self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(
        () => caches.match(request).then((res) => res || caches.match("/"))
      )
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request)
          .then((response) => {
            const copy = response.clone();
            if (response.ok) {
              caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
            }
            return response;
          })
          .catch(() => cached)
    )
  );
});
