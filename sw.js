const cacheName = 'math-v1';
const cacheAssets = [
  '/math/',
  '/math/index.html',
  '/math/icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});