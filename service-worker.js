"use strict";var precacheConfig=[["/index.html","b7d5a346ccd1196be60344ab798508ba"],["/static/css/main.e65b070e.css","c0d8a53ccf144c93b7cd775a65f2c39f"],["/static/js/main.ef9538b4.js","2cc1c09e4b52d77afe69d80a5231bdbc"],["/static/media/7up.a716d713.png","a716d713cb243b6855ddb1da2496a6d5"],["/static/media/background.3e4913be.jpg","3e4913be3a71e563edfe48f0d65d70ec"],["/static/media/champagne.97a1c7b5.png","97a1c7b5abd2f4b30bf5de2c3d72bc45"],["/static/media/coca-cola.5bdfcf84.png","5bdfcf840fa5f9e93326811674877513"],["/static/media/evian.a8b12333.png","a8b12333fc1ec8d9c8644a45f2b678f6"],["/static/media/fanta-shokata.feb3d89d.png","feb3d89da44d12051c3365d21af7500b"],["/static/media/fanta.d0f32cb9.png","d0f32cb916c5042cc06fd10cdd8c8573"],["/static/media/heineken.5ffe9701.png","5ffe9701ae08c05a14b5be50a13aeb71"],["/static/media/pepsi.ad105bda.png","ad105bdadda9767ce5b8eda375cd53d9"],["/static/media/product-background.89c3bedd.jpg","89c3beddf3c836e9b04430020d9cf32b"],["/static/media/rose-wine.5ad16101.png","5ad1610148cc9707822a7571b21269f3"],["/static/media/sprite.a58bf9c6.png","a58bf9c65c0bb49bf984e7497484f722"],["/static/media/store-logo.d47f3222.png","d47f3222e2ecee76cd9d6e825853e2f2"],["/static/media/white-wine.088a5fa9.png","088a5fa90515b37af2cdec424796b992"],["/static/media/wine.f48822c8.png","f48822c8240b9d07c2c4f2368d2fd881"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});