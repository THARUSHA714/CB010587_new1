const statCache='statv4';
const dynaCache='dynav1';

const assets=['./','elephant.jpg','logo2.png','maintop.png', 'clay.jpg' , 'donate-act.jpg' , 'donate-sea.jpg' , 'mask.jpg' , 'spoons.jpg' , 'wewal.jpg' , 'DONATE.html' , 'DONATE.css' , 'TICKET.html' , 'TICKET.css' , 'background.jpg'];

//Adding the event
self.addEventListener('install',(evt)=>{
    evt.waitUntil(
        caches.open(statCache)
    .then((cache)=>{
        console.log("Caching assets...");
        cache.addAll(assets);
    })
    );
   
});

//Activating the event
self.addEventListener('activate',(evt)=>{
    evt.waitUntil(
        caches.keys()
        .then((keys)=>{
            return Promise.all(
                keys.filter(key=>key!==statCache && key!==dynaCache)
                .map(key=>caches.delete(key))
            );
        })
    );
});

//Adding the fetching event
self.addEventListener('fetch',(evt)=>{
    evt.respondWith(
        caches.match(evt.request)
        .then((cacheRes)=>{
            return cacheRes || fetch(evt.request)
            .then(fetchRes=>{
                return caches.open(dynaCache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
        }).catch(()=>{
            if(evt.request.url.indexOf('.html')>-1){
                return caches.match('/fallback.html')
            }
            })
    );
})