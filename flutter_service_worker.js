'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "career.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"icons/Icon-512.png": "8989524a997a56650705c689a53f589f",
"icons/Icon-192.png": "c31090fbd1d2f81adf7c89677946f15c",
"manifest.json": "8ac99f5fb50a8b1453d9a072e8dc790f",
"assets/resources/assets/pictures.svg": "6a7ef6bf8e3bdbd73075440c97832b0e",
"assets/resources/assets/volley_.svg": "ac49ec05f72bc4fb56a28c4b486a172f",
"assets/resources/assets/airplane.svg": "75e0405ba5d1c771308a44f84005b82d",
"assets/resources/assets/angellist%2520logo.svg": "b93acdc948167fa3345c9f219c5298e1",
"assets/resources/assets/logo-512.png": "8989524a997a56650705c689a53f589f",
"assets/resources/assets/chess.svg": "caea3b06be9fc08d7606783820239f1a",
"assets/resources/assets/soldato.png": "dd1f39e762a16d7419d6293523d9b011",
"assets/resources/assets/logo.png": "970c860c5292853dc70ee4b0878c0604",
"assets/resources/assets/landing%2520background%2520big.jpg": "d9dc0c3d579dff148c1194a919d3c518",
"assets/resources/assets/boxe.svg": "4489c892698cc6f5f80605275af7685b",
"assets/resources/assets/bottles.svg": "555e4463213b1ccdd1b045a899783e39",
"assets/resources/assets/landing%2520background.jpg": "4bacc209cb810c26bb48dafdf68d4f9d",
"assets/resources/assets/wifi.svg": "97b0d873ebaec2d420c0a366a064eb49",
"assets/resources/assets/cards.svg": "7f5c022b27f4e4de3a3bf937ffc94256",
"assets/resources/assets/videogames.svg": "f5ae42697a9a32afae61d11a40ade188",
"assets/resources/assets/linkedin%2520logo.svg": "ec4f14bc19d13548a969c8d0075f2cb3",
"assets/resources/assets/github%2520logo.svg": "07883e93734b98cae0f7b9c55d287250",
"assets/resources/assets/lock.svg": "b839bbb4e39c7715e0c94ee32304b218",
"assets/resources/assets/guitar.svg": "19bf2bd5f6e2bf8644531c42f8a0a2b5",
"assets/resources/assets/rifles.svg": "9dcef82f0ad751b2b8786777bd12248a",
"assets/resources/assets/volley.svg": "8b105b397473599e87f7a57686679c72",
"assets/AssetManifest.json": "e739736e676661fcf3de42443bae4cbb",
"assets/NOTICES": "158a13cfa06ea4905a234b8dec89429f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"index.html": "26f1607ecf0f6512293d5683aa7ea204",
"/": "26f1607ecf0f6512293d5683aa7ea204",
"version.json": "4ad346824de2487b35d15bc00dc273f9",
"projects.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"thoughts.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"favicon.png": "f2a0af8e9b51777de99b9475bf44674c",
"about.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"main.dart.js": "235cce44c8f4318b675db0c018bd072f",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
