---
title: Final Touches
---

## What's next? 
It's up to you how you want to use Dynamic in your website, but it's common practice to have a search bar, and set the form action to `/service/https://whatever-was-searched-for.com`.

You can implement something similar to this:

```js
// EXAMPLE CODE
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


function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}
const inpbox = document.getElementById("uform");

inpbox.addEventListener("submit", async (event) => {
  event.preventDefault();

  console.log("Connecting to service -> loading");

  if (typeof navigator.serviceWorker === "undefined")
    alert(
      "An error occured registering your service worker."
    );

  if (!workerLoaded) await worker();
  
  form = document.querySelector("form");
  const formValue = document.querySelector("form input").value;
  if (!isUrl(formValue)) {
    location.href =
      form.action +
      "?url=https://www.google.com/search?q=" +
      encodeURIComponent(formValue);
  } else {
    location.href = form.action + "?url=" + encodeURIComponent(formValue);
  }
});

```

