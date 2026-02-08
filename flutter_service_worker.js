'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "8989524a997a56650705c689a53f589f",
"icons/Icon-192.png": "c31090fbd1d2f81adf7c89677946f15c",
"manifest.json": "8ac99f5fb50a8b1453d9a072e8dc790f",
"projects.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"index.html": "276bb003f2ad505283610a7004790be4",
"/": "276bb003f2ad505283610a7004790be4",
"about.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/resources/assets/linkedin%2520logo.webp": "aa4c6940b2d219d1ce4e47fe9377ec03",
"assets/resources/assets/wellfound%2520logo.webp": "b8a2abeaecd3054db4ede436b0b19218",
"assets/resources/assets/logo%2520eversnap.webp": "3be0844df4b8ba3e2fbb6fe2b437990d",
"assets/resources/assets/logo%2520PermissionRuler.webp": "581fb0c97dbe58dea883ecc47323fc44",
"assets/resources/assets/logo.webp": "69768e93384fdfef660025ce9e29c58c",
"assets/resources/assets/github%2520logo.webp": "9c6356ee9656081d226e9d2386f66c79",
"assets/resources/assets/fotoStefano-512.webp": "692970470ac5a8b260e59b0a20e63c59",
"assets/resources/assets/logo%2520IcyDroid.webp": "96ab967c9334af4eea459ab3ca57563a",
"assets/resources/assets/logo-zerodo.webp": "29dc62a18e0e0b1fdae9900da325e473",
"assets/resources/assets/logo%2520Wavy%2520Fish.webp": "886126cda6e8f78f446021dbb405737b",
"assets/resources/assets/specto-logo.webp": "64dcece24b23c026dffebc3121270854",
"assets/resources/assets/logo-512.webp": "abec0255e3b38796a0258ead0b6842a9",
"assets/resources/assets/sentry%2520logo.webp": "4c4ce2ca7201fd37d75e48cc6ae6355e",
"assets/resources/mdx/home/work/sentry_it.md": "e40e8c80a7a61f284775d367da60a0ba",
"assets/resources/mdx/home/work/sentry.md": "9aa944a23eaabbc52282008f8a3f8028",
"assets/resources/mdx/home/work/specto_it.md": "2cce6adeeabc09956981be2e0793cea0",
"assets/resources/mdx/home/work/zerodo_it.md": "ebb343f2fe41b499d0c9915195c4b087",
"assets/resources/mdx/home/work/specto.md": "435b1d9debef0e73b85f78f2135d2366",
"assets/resources/mdx/home/work/zerodo.md": "79cad0e8bae3e56988e48806c64813a6",
"assets/resources/mdx/home/work/eversnap_it.md": "f592dc4add677da3f6a3783e19865d6e",
"assets/resources/mdx/home/work/eversnap.md": "8e4f22a0ad28d48c5051f97a7872d7da",
"assets/resources/mdx/home/project/website.md": "e92c87e80be4f01ddbad9729ed26b406",
"assets/resources/mdx/home/project/flutter_fast.md": "10e7f689a6a8f046fd5abf254c56a53e",
"assets/resources/mdx/home/project/website_it.md": "2bdee0db3cd5f938722f461b3f45945c",
"assets/resources/mdx/home/project/wavy_fish.md": "e1714a3d6bb8b67b2842108e470dc67f",
"assets/resources/mdx/home/project/wavy_fish_it.md": "264a34623ae0e2695bd2f05c60c0aa53",
"assets/resources/mdx/home/project/powerful_shared_preferences.md": "cfdb21b511f062adc5321ce4f0188f59",
"assets/resources/mdx/home/project/powerful_image_view_it.md": "e376b9a4c36226510ac7ef3291680559",
"assets/resources/mdx/home/project/permission_ruler_it.md": "8dcb81b12b8565ecc2101b45df1e9a2c",
"assets/resources/mdx/home/project/powerful_shared_preferences_it.md": "30a5c139add59c5e7495d59d52d72e1f",
"assets/resources/mdx/home/project/powerful_sama.md": "079fda53542a533c5581c9ed033eb11c",
"assets/resources/mdx/home/project/icydroid_it.md": "2d685f76caf0e5457df858d38ae96eee",
"assets/resources/mdx/home/project/permission_ruler.md": "c12c7fe255b06e476f5f6df1abe88bbc",
"assets/resources/mdx/home/project/flutter_fast_it.md": "133ced9ec0cfe74387fdcdd93f0972bc",
"assets/resources/mdx/home/project/powerful_sama_it.md": "7882e3d8cb52cfff1868cb975b4eb611",
"assets/resources/mdx/home/project/powerful_image_view.md": "9da6a9109ec0d7b0b4372502fb3fb50d",
"assets/resources/mdx/home/project/icydroid.md": "6faa1f8d946f9174a15146b60d03fbf5",
"assets/AssetManifest.bin.json": "35e4a970789ccfadd7b3bb4e7eda613c",
"assets/fonts/MaterialIcons-Regular.otf": "16e1511df158aff5fc4d66beb118ec98",
"assets/NOTICES": "71140e95a211318aabf5f3764997d510",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin": "db9a081998760f0388a9fff39ac31f2f",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "f2a0af8e9b51777de99b9475bf44674c",
"career.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"thoughts.html": "46dc73804c947c42b9e6d02dc0d05c7e",
"404.html": "093842b85e2cf00d6d6ab79885f4708a",
"flutter_bootstrap.js": "dad453fac16b17c57f1c956d92e675e8",
"version.json": "4ad346824de2487b35d15bc00dc273f9",
"main.dart.js": "2ae8010f5474f97f49e6b9c983d5d205"};
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
