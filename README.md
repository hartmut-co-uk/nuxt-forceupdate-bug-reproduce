# nuxt-forceupdate-bug-reproduce

> **Nuxt page fn $forceUpdate exists when running in dev mode but not in prod (build, start) [nuxt-edge]**
> https://cmty.app/nuxt/nuxt.js/issues/c7337

## Steps to reproduce 

Hi, please follow reproduction link provided.

X.1) git clone https://github.com/hartmut-co-uk/nuxt-forceupdate-bug-reproduce.git   
X.2) `yarn`   
A.1) start the app via `yarn run dev`   
A.2) open start page, use (click) buttons - in particular top button from layout - '[page.$forceUpdate from layout]'   
A.3) check console / store / $store.state.random template rendered output   
A.4) the button from layout '[page.$forceUpdate from layout]' does invoke the $forceUpdate - triggering the page `fetch` method -> store commit -> state change..   

B.1) build and start the app in prod mode via  `yarn run build && yarn start`   
B.2) open start page, use (click) buttons - in particular top button from layout - '[page.$forceUpdate from layout]'   
B.3) check console / store / $store.state.random template rendered output   
B.4) doesn't work...   


## What is expected ?
A.4) & B.4) should result in the same behaviour client side.
running nuxt in built / prod mode should allow to call `this.$refs.page.$forceUpdate()`

## What is actually happening?
it's working in dev mode, not in prod mode

## Additional comments?
This has been setup & tested in nuxt-edge   

Please ask (cmty link) if any questions!   

Usage scenario: from layout page header bar - I have a global 'create' which doesn't do a route change but allows creating (http POST) new elements via API - and after success redirect / reload current page - which is not a route change - but should invoke the page's fetch method to re-fetch data from API (via store..)


## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```
