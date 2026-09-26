const CACHE = "potencia-gas-v1";
const ARCHIVOS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./municipios.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ARCHIVOS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((claves) =>
      Promise.all(claves.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// App shell y municipios.json: cache-first con actualización en segundo plano.
// Todo lo demás (fuentes de Google, el proxy de Enagás): red directa, sin interceptar.
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cacheada) => {
      const enRed = fetch(event.request)
        .then((resp) => {
          if (resp.ok) {
            const copia = resp.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copia));
          }
          return resp;
        })
        .catch(() => cacheada);
      return cacheada || enRed;
    })
  );
});
