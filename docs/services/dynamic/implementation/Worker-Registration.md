---
title: Worker Registration
---

Good Job! Now, in the root of your static directory, create a file called `sw.js` and paste the following code into it. 

```js
importScripts('/dynamic/dynamic.config.js');
importScripts('/dynamic/dynamic.worker.js');

const dynamic = new Dynamic();

self.dynamic = dynamic;

self.addEventListener('fetch',
    event => {
        event.respondWith(
            (async function() {
                if (await dynamic.route(event)) {
                    return await dynamic.fetch(event);
                }

                return await fetch(event.request);
            })()
        );
    }
);
```

Great! Now, assuming you have a script linked to your site already, you need to paste this code into your JavaScript file. 
```js
let workerLoaded;

async function worker() {
  return await navigator.serviceWorker.register("/sw.js", {
    scope: "/service",
  });
}

document.addEventListener('DOMContentLoaded', async function(){
  await worker();
  workerLoaded = true;
})


```
This is the code that will register the service worker and scope it to the `/service/` path.

