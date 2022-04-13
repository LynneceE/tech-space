const APP_PREFIX = 'TechSpace-';     
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION
const FILES_TO_CACHE = [
  "./public/index.html",
  "./src/App.css",
  "./src/App.js",
  "./src/index.js",
  "./src/index.css",
  "./src/components/Categories.js",
  "./src/components/CategoriesItem.js",
  "./src/components/Navbar.js",
  "./src/pages/Homepage.js",
];

const isLocalhost = Boolean(
        window.location.hostname === 'localhost' ||
        // [::1] is the IPv6 localhost address.
        window.location.hostname === '[::1]' ||
        // 127.0.0.0/8 are considered localhost for IPv4.
        window.location.hostname.match(
          /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
        )
      );

      export function register(config) {
        if (
          process.env.NODE_ENV === 'production' &&
          'serviceWorker' in navigator) {
          // The URL constructor is available in all browsers that support SW.
      
          const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
          if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebook/create-react-app/issues/2374
            return;
          }
      
          window.addEventListener('fetch', function (e) { // Respond with cached resource
                console.log('fetch request : ' + e.request.url)
                e.respondWith(
                  caches.match(e.request).then(function (request) {
                    if (request) { // if cache is available, respond with cache
                      console.log('responding with cache : ' + e.request.url)
                      return request
                    } else {       // if there are no cache, try fetching request
                      console.log('file is not cached, fetching : ' + e.request.url)
                      return fetch(e.request)
                    }
              
                    // You can omit if/else for console.log & put one line below like this too.
                    // return request || fetch(e.request)
                  })
                )
            });
              
            
            window.addEventListener('install', function (e) { // Cache resources
                e.waitUntil(
                  caches.open(CACHE_NAME).then(function (cache) {
                    console.log('installing cache : ' + CACHE_NAME)
                    return cache.addAll(FILES_TO_CACHE)
                  })
                )
            });
              
            
            window.addEventListener('activate', function (e) { // Delete outdated caches
                e.waitUntil(
                  caches.keys().then(function (keyList) {
                    // `keyList` contains all cache names under your username.github.io
                    // filter out ones that has this app prefix to create keeplist
                    let cacheKeeplist = keyList.filter(function (key) {
                      return key.indexOf(APP_PREFIX);
                    })
                    // add current cache name to keeplist
                    cacheKeeplist.push(CACHE_NAME);
              
                    return Promise.all(keyList.map(function(key, i) {
                      if (cacheKeeplist.indexOf(key) === -1) {
                        console.log('deleting cache : ' + keyList[i] );
                        return caches.delete(keyList[i]);
                      }
                    }));
                  })
                );
            });  
      }
      
      function registerValidSW(swUrl, config) {
        navigator.serviceWorker
          .register(swUrl)
          .then(registration => {
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
              if (installingWorker == null) {
                return;
              }
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed') {
                  if (navigator.serviceWorker.controller) {
                    // At this point, the updated precached content has been fetched,
                    // but the previous service worker will still serve the older
                    // content until all client tabs are closed.
                    console.log(
                      'New content is available and will be used when all ' +
                      'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                    );
      
                    // Execute callback
                    if (config && config.onUpdate) {
                      config.onUpdate(registration);
                    }
                  } else {
                    // At this point, everything has been precached.
                    // It's the perfect time to display a
                    // "Content is cached for offline use." message.
                    console.log('Content is cached for offline use.');
      
                    // Execute callback
                    if (config && config.onSuccess) {
                      config.onSuccess(registration);
                    }
                  }
                }
              };
            };
          })
          .catch(error => {
            console.error('Error during service worker registration:', error);
          });
      }
 }
