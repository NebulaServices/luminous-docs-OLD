---
title: Moving Files
---

## Getting started
### Step 1 
We need to locate the directory where you want to have dynamic in. For this example, our workspace directory is "clippy". 

```bash
cd clippy
```

You should now move your bundle files into the directory. 

There should be 5 bundled scripts.

* dynamic.client.js
* dynamic.handler.js
* dynamic.worker.js
* dynamic.config.js
* dynamic.mutation.js

Now, you can drag and drop the files into `public/dynamic/`, or you can use the command line. (If you have a different directory structure, you can change the path to the directory you want to move the files to. Make sure to modify the path in the config as well, if you don't use `/dynamic/`)

```bash
mv dynamic.client.js public/dynamic/ && mv dynamic.handler.js public/dynamic/ && mv dynamic.worker.js public/dynamic/ && mv dynamic.config.js public/dynamic/ && mv dynamic.mutation.js public/dynamic/
```


> ℹ **Note: these files will need to be accessible to the client, so you should put them in a public static directory.**
