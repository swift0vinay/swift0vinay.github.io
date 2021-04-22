'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8a37db17497a52fc6d2c61927362e64c",
".git/config": "48a679214668eb3224cc55c75cb1d6cf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "d1c923da7953c58eff06a66f319f85e1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "71f8de972dd4610d8c1665200a82768f",
".git/logs/refs/heads/master": "71f8de972dd4610d8c1665200a82768f",
".git/logs/refs/remotes/origin/master": "8015e31cd8b95c8a783e7e194fba2ea9",
".git/objects/04/983beb2636c7ea5cae8ffb6eb93ac19d0cc1cc": "c872c6edeec1c57c5c6b11ffbe556bcf",
".git/objects/15/0fbefe9bc565c0a381ec3f02450a2fb22a2626": "4ea5601d55003a2628ac94017dc074a0",
".git/objects/1a/094e8b9bba2f91af78d7d938c47244cc2ceb9a": "1d1c67fa0feafc593cd90111a839358c",
".git/objects/20/33935f1f716482b29087d5f66f5988133279dc": "864d0615dceb55fa7ec02a86cc4e0611",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/objects/24/dd66e8a93105a12a5f1eed0be53f17a9cc1e09": "3193214affe81d08dc1dcf97f6008ada",
".git/objects/2d/01378cc48f9133ca7159f7caea279d07ba26ba": "2af9c03c43c698d034e20be49b04f2ee",
".git/objects/3d/6861b42396c609e26f38f129383c558e332281": "5094a76191110339c6815fd8ca04f5b7",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/45/44be56f3d9352af74ed6b60dcbe0c77753b6ea": "ee5d59843d84f5dbb9b934d5b87b9ec9",
".git/objects/45/7b41efd9250c65976e047d7548b1d64eced39e": "ca2f3ac1b0f0654dbb9e4145dea2e394",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/48/64d315be9747a873f4c780f25cd6e4a3ff17b8": "35ab9a03d2be29ae78509af31b9d4a5f",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/49/6871f4776bf3bf45288942f5094e8d583bd55e": "4b18fd1e638db069054698091a47e5b4",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4d/344e7e637cf5bd1ac16cdcc928159c68088178": "97e2c57e2fe48a9960a5144e8e7e2a90",
".git/objects/50/9161583540f9099e67e432e6a0635927d8a17e": "f7fb6dc79012450c65692e417b4f77be",
".git/objects/51/d14240ef35ae969832e6904040f7b5148ee4ee": "6cc8ddc945fadc19804cb542108e1cf9",
".git/objects/57/f5dc2a94a963a6459272a3438be049cf24dfff": "7758d98d1e9a3d0d8beb0c1a4bdb92c7",
".git/objects/60/dd4477ab392c8318622123974fc82d8d19d1ac": "5c0fb4dbe8c82695c7ce317a460ceaf5",
".git/objects/62/91473a3dd610289ed3a1c1b0b8626baeadbb64": "4c90e682a997ad90cac11a1fa350d19a",
".git/objects/66/0532b39364b536259f0077dd65133acd8e6289": "5dcbb020f9d104b376405840b72e7063",
".git/objects/6e/1629b66fa74e965e49e47412c8b0170ebde441": "60a84678d99a84240ec4940c1941f87b",
".git/objects/72/7be2f8957ace43efc24b2d815524e06f931f1d": "e1f3cb35cb43dd0831e18c8d09355483",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/87/6053870753f83f1343f735bc64684d4bfbd9d0": "3344cf6c33fb2b4dbc1a800c99965a53",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/aa59a16f5121bb26a71f0865c1e49e9fd92fde": "3f9f6d1867fbdd6304b7b772ae2bd59d",
".git/objects/91/7f1e6311e522ae08c0fa7ee63a82e9715aa0d9": "740d4e8234d773bc30f712743532dbf8",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/96/b4fee70546668b8836dd9205babbded8b01a42": "d0385acced5b68e6f5ed1e5242dff752",
".git/objects/9d/91ac9cf619bcabde463a959ad898f8c7e039be": "6f9baf4fd2e49db9977c7e199ca5968b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/aa01c69e2a19f4484f3dc457bfe63480f44789": "f4bb711bf7c036c5d7f0e1bf93cc5ea4",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/4983aac43cec3676c03298621dde6a53a49896": "2245b2ff5530e42d2b45d280d8c46b5f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c5/9b9c4cd5eeae5294b2215540c40407fc8f9db3": "266fcbea9c185e567a714232acf0af93",
".git/objects/d7/cb6323f813c910b3467497a71213833d32c68e": "a96b4c35473098bdf965dc64c5670339",
".git/objects/dc/efa346761f2776c16d63431d7294ec8074f11f": "838eb17ae4ba336100a6fdcd9febbc94",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/7b7d7235a1a8d7f21d950b9a14c9aaa01c9574": "06d71393d13241655bdd23e9a81549c7",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/55e44258736b81a2e86ef801f1c13e406d1ee5": "3757dd27e31f33335e46e4bb98a9a141",
".git/objects/f6/3d4587dc27e46a8ccccbabb4dc7b60c07ba160": "77fc7350fd18dc7c60bef03a9b836839",
".git/refs/heads/master": "f5e238d8acaec6b38ef85a4a838b0bb7",
".git/refs/remotes/origin/master": "f5e238d8acaec6b38ef85a4a838b0bb7",
"assets/AssetManifest.json": "e0ae6508b707b2278f54919273297647",
"assets/assets/android.png": "ad1c21d4900a78f6a5b06286f2e02092",
"assets/assets/at.png": "d59951e91e749f6c360bea1ced42b8a8",
"assets/assets/bmc.png": "a9c475504e927e4de70a0a76d128c0bf",
"assets/assets/cc.png": "3d7197573c1bd37ed6a9b5c8973d32ac",
"assets/assets/cf.png": "a5f0d3f459cc1abd974aa4c4fc9f29ca",
"assets/assets/chazam.png": "3785e640a0d550bd020845b70e762816",
"assets/assets/contact_vector.png": "834f352093112777751bcca8a9b4b995",
"assets/assets/dart.png": "07310863c16d124ec79f2243f2c22ea2",
"assets/assets/dev.png": "b8e1a843a0a2b8c0b55ddf5a896e7edc",
"assets/assets/flutter.png": "e038d7f55d1c679d7b74a87b6787b6ea",
"assets/assets/git.png": "c8a83d0788097e656bc0129ba6021912",
"assets/assets/java.png": "2234554b918fb10a045a83a96f7d042a",
"assets/assets/lc.png": "ca674b5186b28e2b0edae538ee5388d0",
"assets/assets/lets_chat.png": "bca0305b2dcc8ef08ea464eef30fd453",
"assets/assets/linkedin.png": "68dc789ee7214e18a8d637016bfe6079",
"assets/assets/music_player.png": "092be511d7b897d97507c8338d655232",
"assets/assets/myself.png": "bdaaa46171cebcb1193b8896ce5248a2",
"assets/assets/node.png": "060e87be704fb2f92b06015cc75dabfd",
"assets/assets/scan_io.png": "cdcc50508fb5c6aa1e245be72505284f",
"assets/FontManifest.json": "f5e6d79584499b4cf12420af1fdd0a73",
"assets/fonts/m-bold.ttf": "ade91f473255991f410f61857696434b",
"assets/fonts/m-reg.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/roboto.ttf": "f36638c2135b71e5a623dca52b611173",
"assets/fonts/segoe.ttf": "5040e8da248eedac256a765b697e6735",
"assets/NOTICES": "5c7467eb8fbb69e54bdcb70d39c664b3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "baeca185d91ecc9f272048062f7a9a29",
"/": "baeca185d91ecc9f272048062f7a9a29",
"main.dart.js": "8de503af234401567a8c4fab0f834ab8",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
