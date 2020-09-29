
/**
 * @sveltech/routify 1.9.9
 * File generated Tue Sep 29 2020 01:13:51 GMT-0700 (Pacific Daylight Time)
 */

export const __version = "1.9.9"
export const __timestamp = "2020-09-29T08:13:51.539Z"

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
      "isFile": false,
      "isDir": true,
      "file": "contact",
      "filepath": "/contact",
      "name": "contact",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/contact",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/contact/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/contact/index.svelte",
          "importPath": "../src/pages/contact/index.svelte",
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
          "path": "/contact/index",
          "id": "_contact_index",
          "component": () => import('../src/pages/contact/index.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
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
      "path": "/contact"
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
          "file": "post1.md",
          "filepath": "/blog/post1.md",
          "name": "post1",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/blog/post1.md",
          "importPath": "../src/pages/blog/post1.md",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "frontmatter": {
              "title": "Introducing Bytes & Snippets",
              "published": "2020-09-28T21:36:59.459Z",
              "updated": "2020-09-28T21:36:59.459Z",
              "author": "Solomon Zelenko",
              "category": "news",
              "tags": [
                "mental health",
                "tech",
                "lifestyle"
              ],
              "summary": "Welcome to my Tech Blog, \nEnjoy a series of musings, tutorials, and snippets\nMay each click bring you joy - and me, some extra income!\n",
              "layout": "blog"
            },
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/blog/post1",
          "id": "_blog_post1",
          "component": () => import('../src/pages/blog/post1.md').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "post2.md",
          "filepath": "/blog/post2.md",
          "name": "post2",
          "ext": "md",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/blog/post2.md",
          "importPath": "../src/pages/blog/post2.md",
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
          "path": "/blog/post2",
          "id": "_blog_post2",
          "component": () => import('../src/pages/blog/post2.md').then(m => m.default)
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
      "file": "works",
      "filepath": "/works",
      "name": "works",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/works",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_layout.svelte",
          "filepath": "/works/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/works/_layout.svelte",
          "importPath": "../src/pages/works/_layout.svelte",
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
          "path": "/works",
          "id": "_works__layout",
          "component": () => import('../src/pages/works/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/works/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/solomon/Desktop/PROJECTS/fullstack/solomon/client/src/pages/works/index.svelte",
          "importPath": "../src/pages/works/index.svelte",
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
          "path": "/works/index",
          "id": "_works_index",
          "component": () => import('../src/pages/works/index.svelte').then(m => m.default)
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
      "path": "/works"
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

