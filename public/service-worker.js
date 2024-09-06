// Nome della cahe
const cacheName = 'Netflix_cache'

//file che verranno salvati localmente nle local storage
const cacheAssets = [
    '/',
    '/index.html',
    '/src/assets/style/main.scss',
    '/src/main.js',
    '/img/icons/vue.js-logo.png',
];


// esso viene attivato quando il service worker viene istallato
self.addEventListener('install', function(e) {
    console.log('Service Worker: Installed');
    e.waitUntil(
        caches
        //apro un nuovo cache con il nome della const
        .open(cacheName)
        .then(function(cache) {
            //aggiungo gli assets definiti precedentemente
            return cache.addAll(cacheAssets);
        })
    );
    // Forza l'attivazione immediata del service worker
    // self.skipWaiting();
});

//esso viene attivato ogni volta che una risorsa viene richiesta dalla rete
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches
        //controlla se nelle cache e presente quella risorsa e la restituisce
        .match(e.request)
        .then(function(res) {
            //se la risorsa e stata trovata viene utilizzata (res) altrimenti viene richiesta alla rete fetch(e.request)
            return res || fetch(e.request);
        })
    );
});