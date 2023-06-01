---
title: Worker Registration
---

Good Job! Now, in the root of your static directory, create a file called `sw.js` and paste the following code into it. 

```js
importScripts('./dynamic/dynamic.worker.js');

const sw = new DynamicSW();

self.addEventListener('fetch', event =>
    event.respondWith(
        sw.fetch(event)
    )
);
```

Great! Now, assuming you have a script linked to your site already, you need to paste this code into your JavaScript file. 
```js
window.addEventListener("load", () => {
  navigator.serviceWorker.register("./sw.js", {
    scope: "/service/"
  });

});
```
This is the code that will register the service worker and scope it to the `/service/` path.

