---
title: Configuring Dynamic
---
## Configuration 

Dyanmic can be configured by modifying the dynamic.config.js file. 

We provide you with the optimal default settings for the best ballence between the fastest and stealthiest browsing

```js
// Default configuration for Dynamic
self.__dynamic$config = {
  prefix: '/service/',
  encoding: 'plain',
  mode: 'production', 
  rewrite: {
    css: 'regex',
    js: 'acorn',
    html: 'htmlparser2',
  },
  bare: {
    version: 2,
    path: '/bare/',
  },
  tab: {
    title: 'procy',
    icon: 'https://www.google.com/favicon.ico',
    ua: 'Mozilla/5.0 (X11; CrOS x86_64 14388.61.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.107 Safari/537.36',
  },
  assets: {
    prefix: '/dynamic/',
    files: {
      handler: 'dynamic.handler.js',
      client: 'dynamic.client.js',
      worker: 'dynamic.worker.js',
      config: 'dynamic.config.js',
    }
  }
};
```

### Config explanation
```js
 prefix: '/service/', // This needs to match the prefix for the service worker
  encoding: 'plain', // This is the encoding that Dynamic will use to encode URLs it rewrites. plain, base64, XOR, or none.
  mode: 'production', // The mode that dynamic operates in. - production, development. 
  rewrite: { // The rewrite settings for Dynamic. THIS SHOULD BE LEFT DEFAULT
    css: 'regex',
    js: 'acorn',
    html: 'htmlparser2',
  },
```
```js
  bare: {
    version: 2, // If you used Ultraviolet before Dynamic, these settings will be familiar to you. You can leave them default.
    path: '/bare/',
  },
```

```js
  tab: { // These settings are for the tab that Dynamic opens. You can leave them default.
    title: 'procy',
    icon: 'https://www.google.com/favicon.ico',
    ua: 'Mozilla/5.0 (X11; CrOS x86_64 14388.61.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.107 Safari/537.36',
  },
```

```js
  assets: { // Unless you are seperating Dynamics assets into different directories, leave this default.
    prefix: '/dynamic/',
    files: {
      handler: 'dynamic.handler.js',
      client: 'dynamic.client.js',
      worker: 'dynamic.worker.js',
      config: 'dynamic.config.js',
    }
  }
```
