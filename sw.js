var CACHE_VERSION = 'v1'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.js',
      ])
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        let responseClone = response.clone()
        caches.open(CACHE_VERSION).then((cache) => {
          cache.put(event.request, responseClone)
        })

        return response
      }).catch(() => {
        return
      })
    })
  )
})
