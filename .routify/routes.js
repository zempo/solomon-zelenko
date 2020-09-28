
/**
 * @sveltech/routify 1.9.9
 * File generated Mon Sep 28 2020 11:58:53 GMT-0700 (Pacific Daylight Time)
 */

export const __version = "1.9.9"
export const __timestamp = "2020-09-28T18:58:53.066Z"

//buildRoutes
import { buildClientTree } from "@sveltech/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "_layout.svelte",
      "filepath": "/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/_layout.svelte",
      "importPath": "../src/pages/_layout.svelte",
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/",
      "id": "__layout",
      "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {
        "index": 10,
        "title": "home"
      },
      "meta": {
        "index": 10,
        "title": "home",
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "blog",
      "filepath": "/blog",
      "name": "blog",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/blog",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_layout.svelte",
          "filepath": "/blog/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/blog/_layout.svelte",
          "importPath": "../src/pages/blog/_layout.svelte",
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog",
          "id": "_blog__layout",
          "component": () => import('../src/pages/blog/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/blog/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/blog/index.svelte",
          "importPath": "../src/pages/blog/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog/index",
          "id": "_blog_index",
          "component": () => import('../src/pages/blog/index.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "my-first-post.md",
          "filepath": "/blog/my-first-post.md",
          "name": "my-first-post",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/blog/my-first-post.md",
          "importPath": "../src/pages/blog/my-first-post.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "title": "My first Post",
              "published": "2020-06-21T21:36:59.459Z",
              "author": "jakobrosenberg",
              "summary": "Lorem markdownum, laude, superesse vires. Nisi iuveni, celsior.    \nEst ut erat. Cum Iovis ut donavi petitos et, at fugit vincemur ubi: a dixit\ncredit, eras Aesone.\n",
              "layout": "blog"
            },
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog/my-first-post",
          "id": "_blog_myFirstPost",
          "component": () => import('../src/pages/blog/my-first-post.md').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "my-second-post.md",
          "filepath": "/blog/my-second-post.md",
          "name": "my-second-post",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/blog/my-second-post.md",
          "importPath": "../src/pages/blog/my-second-post.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "title": "My second Post",
              "published": "2020-06-21T21:36:59.459Z",
              "author": "jakobrosenberg",
              "summary": "#### Summary of my second post\nRead on\n",
              "layout": "blog"
            },
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog/my-second-post",
          "id": "_blog_mySecondPost",
          "component": () => import('../src/pages/blog/my-second-post.md').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {
        "index": 20
      },
      "meta": {
        "index": 20,
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/blog"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "about",
      "filepath": "/about",
      "name": "about",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/about",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_layout.svelte",
          "filepath": "/about/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/about/_layout.svelte",
          "importPath": "../src/pages/about/_layout.svelte",
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/about",
          "id": "_about__layout",
          "component": () => import('../src/pages/about/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.md",
          "filepath": "/about/index.md",
          "name": "index",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/about/index.md",
          "importPath": "../src/pages/about/index.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/about/index",
          "id": "_about_index",
          "component": () => import('../src/pages/about/index.md').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {
        "index": 30
      },
      "meta": {
        "index": 30,
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/about"
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "preload": false,
    "prerender": true,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

