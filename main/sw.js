self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // 不做任何缓存，直接请求网络
  event.respondWith(fetch(event.request));
});