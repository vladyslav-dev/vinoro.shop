<<<<<<< Updated upstream
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./sw.js",['./workbox-1ffba242'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        request,
        response,
        event,
        state
      }) => {
        if (response && response.type === 'opaqueredirect') {
          return new Response(response.body, {
            status: 200,
            statusText: 'OK',
            headers: response.headers
          });
        }

        return response;
      }
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
=======
if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>a(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-22294e6b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/YIGMaFdyAG6cfKWK5LGX3/_buildManifest.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/YIGMaFdyAG6cfKWK5LGX3/_ssgManifest.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/208.66707b27276a7a5a2aad.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/752-f68d6175324ad7e18ea2.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/928-5ad5bcefc2c8c2b557f4.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/framework-717d42ae9e172961f2a5.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/main-2aef8d86be925d107a9c.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/pages/404-9a4e44b7e1a4fc29bd47.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/pages/_app-a2851f343764c5c19c54.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/pages/category/%5Bid%5D-9ef027be8c696ccbf22c.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/pages/favorite-2b9110109529c69bab2e.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/pages/index-649ffdb211dcf395be17.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/pages/order-3311efd3b7664a6c7d18.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/pages/product/%5Bid%5D-e15bc0aae3241d93a559.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/chunks/webpack-e4f082eaeaa0a9d8b181.js",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/css/219ae28065200f90e1ba.css",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/css/6193217e0b633b223276.css",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/css/772b1d5ede63841caf7b.css",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/css/869409ce99640e76e71d.css",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/css/9dd79f82610060d2ab5e.css",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/css/aa2c666ca88ee8b4270d.css",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/css/bb1c6dc40fcb891e1a12.css",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/media/ajax-loader.fb6f3c230cb846e25247dfaa1da94d8f.gif",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/media/slick.2630a3e3eab21c607e21576571b95b9d.svg",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/media/slick.295183786cd8a138986521d9f388a286.woff",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/media/slick.a4e97f5a2a64f0ab132323fbeb33ae29.eot",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/_next/static/media/slick.c94f7671dcc99dce43e22a89f486f7c2.ttf",revision:"YIGMaFdyAG6cfKWK5LGX3"},{url:"/favicon.ico",revision:"c0b30beaae9d533fd6013c51793fe164"},{url:"/icon-192x192.png",revision:"88fce1f0e035b1e314b3dce27cb9c5ac"},{url:"/icon-256x256.png",revision:"bb4a41fd79cf7280ddc2e2af972bea35"},{url:"/icon-384x384.png",revision:"58f89311448f9c5f631aa0ebed4fe8a7"},{url:"/icon-512x512.png",revision:"353766788fd0fcc5b5d429e89ba5c15f"},{url:"/manifest.json",revision:"e80cf3266cdcae6a37431b2d78067ace"},{url:"/static/images/business-hand-with-mobile-phone.png",revision:"59f8c6c3c2c5ac6c130de40e308c7512"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> Stashed changes
