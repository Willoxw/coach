const C='coach-v1';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(['./','index.html','manifest.webmanifest','icon-180.png','icon-512.png'])).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(fetch(r).then(x=>{if(x.ok&&!u.search){const y=x.clone();caches.open(C).then(c=>c.put(r,y))}return x})
    .catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('./'))))});
