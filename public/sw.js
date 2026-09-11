// Minimal service worker for Keys4Travels — caches the app shell so the PWA
// still opens (with a lightweight offline view) without a network connection.
// Bump CACHE_VERSION whenever the shell files below change materially.
const CACHE_VERSION = "k4t-shell-v2";
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

/**
 * React Server Component payloads must NEVER be served from cache. Next.js
 * requests them on every client-side navigation (`?_rsc=<hash>`), and a
 * cached copy is never invalidated by anything — so one cache-first hit
 * pins that route to old content until the user clears site data.
 */
function isServerComponentRequest(request, url) {
  return (
    url.searchParams.has("_rsc") ||
    request.headers.get("RSC") === "1" ||
    (request.headers.get("Accept") || "").includes("text/x-component")
  );
}

/**
 * Only content-addressed or genuinely static files are safe to serve
 * cache-first. Everything else (HTML, route handlers, RSC) goes to the
 * network so published content changes actually reach the user.
 */
function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/_next/image") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/icons/") ||
    /\.(png|jpe?g|webp|avif|svg|ico|woff2?)$/.test(url.pathname)
  );
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Straight to the network, never cached.
  if (isServerComponentRequest(request, url)) return;

  // Network-first for navigations, falling back to the cached shell offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() =>
        caches.match(request).then((res) => res || caches.match("/"))
      )
    );
    return;
  }

  // Anything that isn't a static asset is left to the browser/network.
  if (!isStaticAsset(url)) return;

  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches
              .open(CACHE_VERSION)
              .then((cache) => cache.put(request, copy));
          }
          return response;
        })
    )
  );
});
