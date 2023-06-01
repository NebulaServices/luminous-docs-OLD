# Osana Configuration


## Configuration Breakdown
### `src/config.ts`

```ts

self.__osana$config = {
  bare: `${location.origin}/bare/`, // The location of the Bare server
  prefix: "/~osana/", // Proxy url prefix
  codec: self.__osana$bundle.codecs.xor, // Encoding method 
  files: {
    config: "/osana.config.js",
    client: "/osana.client.js",
    bundle: "/osana.bundle.js", // Osana bundle 
    worker: "/osana.worker.js"
  },
  blacklist: [
    /^(www\.)?netflix\.com/,
    /^accounts\.google\.com/,
  ]
}

```


| Configuration |  Explanation | Options
| --- | ----------- | ----------- |
| bare | The location (directory) the bare server exists in |  --
| prefix | The prefix that the proxy will show webpages on. For example: `https://osanaweb.us/~osana/https://google.com` | the default is `~osana`
| codec | The encoding of the URL that will be shown to visitors.  | `none`, `planetext`, `base64`, `xor`
| blacklist | the blacklist disallows any requests from the URLs listed under the blacklist. This is helpful for removing a site from accesibility due to legalities. Typically we don't recommend this.  | regex of any web address or URL 

