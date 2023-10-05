---
title: Configuring Dynamic
---
## Configuration 

Dyanmic can be configured by modifying the dynamic.config.js file. 

We provide you with the optimal default settings for the best ballence between the fastest and stealthiest browsing

```js

self.__dynamic$config = {
  prefix: '/service/',
  encoding: 'xor',
  mode: 'production', 
  logLevel: 0, 
  bare: {
    version: 2, 
    path: '/bare/',
  },
  tab: {
    title: 'Service',
    icon: null,
    ua: null,
  },
  assets: {
    prefix: '/dynamic/',
    files: {
      handler: 'dynamic.handler.js',
      client: 'dynamic.client.js',
      worker: 'dynamic.worker.js',
      config: 'dynamic.config.js',
      inject: null,
    }
  },
  block: [
  
  ]
};


```

### Config explanation

** This is a very brief explanation. Look into Configuration for more indepth explanations. **

```js
 prefix: '/service/', // This needs to match the prefix for the service worker
  encoding: 'xor', // This is the encoding that Dynamic will use to encode URLs it rewrites. plain, base64, XOR, or none.
  mode: 'production', // The mode that dynamic operates in. - production, development. 
  logLevel: 0, 

```

```js
  bare: {
    version: 2, // If you used Ultraviolet before Dynamic, these settings will be familiar to you. You should leave them default.
    path: '/bare/',
  },
```

```js
  tab: {
    title: 'Service',
    icon: null, // set null for no changes to be made
    ua: null, // set null for no changes to be made ^
  },
```

```js
    assets: {       // Unless you are seperating Dynamics assets into different directories, leave this stuff default.
    prefix: '/dynamic/',
    files: {
      handler: 'dynamic.handler.js',
      client: 'dynamic.client.js',
      worker: 'dynamic.worker.js',
      config: 'dynamic.config.js',
      inject: null,
    }
  },
```
