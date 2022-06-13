'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/NOTICES": "6085c5a3591ddbd8aa23752dbb2bc6b8",
"assets/assets/amarilloreverse.png": "f6caaffddc4eb0c4df33c3a75e245106",
"assets/assets/rojoreverse.png": "f6f52627b4166f825264ba6b1d97d6a4",
"assets/assets/verdesaltar.png": "5142f6f1a4f6cfaba93633fe786f8b92",
"assets/assets/azul4.png": "71f67d1d81b4a72102a10d2709d1125b",
"assets/assets/amarillomas2.png": "3974337c291db094bdc25b250d9c6663",
"assets/assets/azulreverse.png": "26b52b610040111765b0680e9cf3d6e6",
"assets/assets/verde8.png": "5a5563f32ec20183bedaeb802b755c7f",
"assets/assets/menu.png": "789d1170aecb42481a25583f52d229cc",
"assets/assets/azul8.png": "8242726cc8fe2a02601be2727f58644c",
"assets/assets/rojo4.png": "b02fac3d4e7d3c3c0b00ff9269db80e0",
"assets/assets/azul5.png": "670c2177f166890ac057acb973890acb",
"assets/assets/mas4.png": "712fb0fb8e8f3fbcbb1eda1b7b78262a",
"assets/assets/amarillo3.png": "c21eba021e9d5f3550580e8f3401432c",
"assets/assets/amarillo4.png": "c57fded3c05a28a574ca38097eccffa6",
"assets/assets/azul0.png": "5d13b0fee9222a51e95a0770708d0df0",
"assets/assets/rojo9.png": "3509f6be81df93d686fc92125b3cbcdc",
"assets/assets/rojomas2.png": "a826fb7a4dbc17b059104be7b438a508",
"assets/assets/verde4.png": "d3d65aa2b47cf192401f813843765d84",
"assets/assets/verde7.png": "eaa55f26e550bb0f9816ebe7b67ebf55",
"assets/assets/rojo1.png": "7fa5fdf81a42d15096b3fc0575af9818",
"assets/assets/verde9.png": "ed416657d112090000c8b04237161d3c",
"assets/assets/rojosaltar.png": "e90162cddeaa1fc150535045dcd7802d",
"assets/assets/juego.png": "54ac1833c9cec15bd7ea4f438a0a90d5",
"assets/assets/azul9.png": "92ef2ccaf2e89853448b7dca693c8dd9",
"assets/assets/amarillo2.png": "c6690c9fbdda9c8a6fff77785ec98a59",
"assets/assets/reverso.png": "e0706bb2c930ee16cedf4d9269b6a884",
"assets/assets/amarillo1.png": "37ae14f56e3e53a578919d61a728bbd8",
"assets/assets/azul7.png": "7aae3a716464f7cad8a216f3b552c32c",
"assets/assets/amarillo7.png": "c13bf2e4b6d999af4f318591aad123c0",
"assets/assets/amarillo6.png": "f135ee582e0b828de44b6cca6688f106",
"assets/assets/rojo6.png": "c4025a39547ad58a02183b963bb454cf",
"assets/assets/amarillo8.png": "2e01e081448574d931de1d62f78b11e1",
"assets/assets/rojo3.png": "3b76ff77acd3c6554b691272190fcb47",
"assets/assets/amarillo9.png": "e888878255205e928ae04ef48b540c68",
"assets/assets/verde2.png": "41ef7392a08a872e82f323b439e3039f",
"assets/assets/verde6.png": "ac41ff4129d672a87dcf49f1abfa9b2d",
"assets/assets/azul6.png": "033bc58db17263f67e152ab1c2d3399c",
"assets/assets/amarillo0.png": "f98ebd50a8dc2343e4770117cdbb3c23",
"assets/assets/rojo0.png": "c2ab4d7683a6ceb2be8d00bf47186774",
"assets/assets/rojo7.png": "371cc77c0dc86b1f7187502cbae14c8a",
"assets/assets/azul2.png": "f9d288d2d1daf26d77a032b53dd3479f",
"assets/assets/verde5.png": "5748c1fff2d3d0bee4e8e39cc2b7c3b1",
"assets/assets/verde0.png": "a95ae7282bf47a712a5a7ad951ba3ace",
"assets/assets/azulsaltar.png": "289947f041a102e30ec5d84b6a9f1580",
"assets/assets/azul1.png": "b510419cfde1d471382d20a685847406",
"assets/assets/azulmas2.png": "28cbe782846083f13d2965695dfd4448",
"assets/assets/rojo5.png": "d84ee85cf748357fd8f8f0f2005cad98",
"assets/assets/verde3.png": "a515177e5117fa536d07d9dd3ca924e6",
"assets/assets/amarillosaltar.png": "2ca0689034f66b9efb24dc56acb8ed3d",
"assets/assets/rojo8.png": "2b45a3470c69001c972db56f150f1071",
"assets/assets/verdemas2.png": "cca31c8a5004f9677a3c3046acec537d",
"assets/assets/elegircolor.png": "498d252ac382b6c3a4409d234773ce77",
"assets/assets/rojo2.png": "3454d13e6a57afe2ac81d1707cb93798",
"assets/assets/amarillo5.png": "491009fc4da2d66fd9a15249c6276bc0",
"assets/assets/azul3.png": "65eb6c936c35058b96320463b4c17702",
"assets/assets/verde1.png": "aa6e15d858c75cfe021ae5f27632aae9",
"assets/assets/verdereverse.png": "5ebcd36db6b68b4bc1aff87ed7cf4465",
"assets/AssetManifest.json": "74a486b6ead70217f07325aa2523c829",
"assets/FontManifest.json": "387a88f0ddc4cdc7de00b8c49190d82b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/NewSuperMarioFontU.ttf": "b99859c16e467f2ab0a89c9ee063ebed",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"main.dart.js": "3760b468cbf8aafab8a72a1a5a947f28",
"index.html": "2a8ff787a5f38806cca7664cbf7a3eb6",
"/": "2a8ff787a5f38806cca7664cbf7a3eb6",
"version.json": "a3322b2f035e5345663b567001345585",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "3688efe0a39e59781b4f95efbd6b5b62",
"manifest.json": "79028a0c1e51a967bd716005f99c64a9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
