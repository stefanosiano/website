'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"career.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"icons/Icon-512.png": "8989524a997a56650705c689a53f589f",
"icons/Icon-192.png": "c31090fbd1d2f81adf7c89677946f15c",
"manifest.json": "8ac99f5fb50a8b1453d9a072e8dc790f",
"favicon.png": "f2a0af8e9b51777de99b9475bf44674c",
"thoughts.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"flutter_bootstrap.js": "736fb2d541ed4fa6b200a9dc32500aca",
"version.json": "4ad346824de2487b35d15bc00dc273f9",
"index.html": "29a402a33fff601fa7faf8c741b5eaa3",
"/": "29a402a33fff601fa7faf8c741b5eaa3",
"projects.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"main.dart.js": "f62aace284a32f6293960ff7822e5e8a",
"assets/AssetManifest.json": "67a5d4bef5ccd535f6928f2e5518a732",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "ba7c10d89975e0fe7ff42419df7d0835",
"assets/resources/mdx/home/project/powerful_sama.md": "079fda53542a533c5581c9ed033eb11c",
"assets/resources/mdx/home/project/wavy_fish_it.md": "264a34623ae0e2695bd2f05c60c0aa53",
"assets/resources/mdx/home/project/wavy_fish.md": "e1714a3d6bb8b67b2842108e470dc67f",
"assets/resources/mdx/home/project/powerful_image_view_it.md": "e376b9a4c36226510ac7ef3291680559",
"assets/resources/mdx/home/project/powerful_image_view.md": "9da6a9109ec0d7b0b4372502fb3fb50d",
"assets/resources/mdx/home/project/powerful_shared_preferences_it.md": "30a5c139add59c5e7495d59d52d72e1f",
"assets/resources/mdx/home/project/powerful_sama_it.md": "7882e3d8cb52cfff1868cb975b4eb611",
"assets/resources/mdx/home/project/powerful_shared_preferences.md": "cfdb21b511f062adc5321ce4f0188f59",
"assets/resources/mdx/home/project/website.md": "c31c9214df6e20a9132cd8f54a5e25f9",
"assets/resources/mdx/home/project/icydroid_it.md": "2d685f76caf0e5457df858d38ae96eee",
"assets/resources/mdx/home/project/permission_ruler.md": "c12c7fe255b06e476f5f6df1abe88bbc",
"assets/resources/mdx/home/project/website_it.md": "476980657282724f529f7b43854fc997",
"assets/resources/mdx/home/project/permission_ruler_it.md": "8dcb81b12b8565ecc2101b45df1e9a2c",
"assets/resources/mdx/home/project/icydroid.md": "6faa1f8d946f9174a15146b60d03fbf5",
"assets/resources/mdx/home/work/sentry.md": "245c336f4d3d73f62834c5d79c0996c2",
"assets/resources/mdx/home/work/sentry_it.md": "366133f151d1db78e48820461db7deff",
"assets/resources/mdx/home/work/zerodo_it.md": "5dab3dd4889127726670d5ab7ca708ad",
"assets/resources/mdx/home/work/specto.md": "b63c8a5bdff80d3add711318a36b4568",
"assets/resources/mdx/home/work/zerodo.md": "7b0ddecd40e8fb3ae12699aa2ac13efc",
"assets/resources/mdx/home/work/specto_it.md": "41cf15d189d9e9b7bf70f424bdfa7022",
"assets/resources/mdx/home/work/eversnap.md": "cfa7dac47a61cad05a1552af895da480",
"assets/resources/mdx/home/work/eversnap_it.md": "95d363213fdaf4295f6ceb9e69a57baf",
"assets/resources/assets/logo%2520IcyDroid.webp": "96ab967c9334af4eea459ab3ca57563a",
"assets/resources/assets/fotoStefano-512.webp": "692970470ac5a8b260e59b0a20e63c59",
"assets/resources/assets/logo%2520Wavy%2520Fish.webp": "886126cda6e8f78f446021dbb405737b",
"assets/resources/assets/logo-512.webp": "abec0255e3b38796a0258ead0b6842a9",
"assets/resources/assets/logo.webp": "69768e93384fdfef660025ce9e29c58c",
"assets/resources/assets/linkedin%2520logo.webp": "aa4c6940b2d219d1ce4e47fe9377ec03",
"assets/resources/assets/specto-logo.webp": "64dcece24b23c026dffebc3121270854",
"assets/resources/assets/logo%2520PermissionRuler.webp": "581fb0c97dbe58dea883ecc47323fc44",
"assets/resources/assets/wellfound%2520logo.webp": "b8a2abeaecd3054db4ede436b0b19218",
"assets/resources/assets/sentry%2520logo.webp": "4c4ce2ca7201fd37d75e48cc6ae6355e",
"assets/resources/assets/github%2520logo.webp": "9c6356ee9656081d226e9d2386f66c79",
"assets/resources/assets/logo-zerodo.webp": "29dc62a18e0e0b1fdae9900da325e473",
"assets/resources/assets/logo%2520eversnap.webp": "3be0844df4b8ba3e2fbb6fe2b437990d",
"assets/fonts/MaterialIcons-Regular.otf": "22218fb8e3cb571ed7930ed8d0f468c9",
"assets/NOTICES": "80d396f98ab0c157dcc7d1bb9bfac7a1",
"assets/AssetManifest.bin": "9802fd00a49c1353515e7db99726570e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"about.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
