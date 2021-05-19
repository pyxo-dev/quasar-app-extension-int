# Introduction

Quasar Int is an app extension that makes use of [Qint](https://github.com/pyxo-dev/qint) to facilitate the i18n of
Quasar apps.

# Installation

``` bash
quasar ext add @pyxo/int
```

The extension will add a directory `src/int/` that contains the configuration.
It adds also a boot file `src/boot/int.(ts|js)`.

The extension will also scaffold an example implementation in `src-int/`.

## Prompts

You will be prompted if your app has typescript support, if you answer yes, `*.ts`
files will be added instead of `*.js`.

## Setup

To use the scaffolded example, register the boot file in `quasar.conf.js >
boot` and make the following changes:

`src/router/index.(ts|js)`

``` diff
   const Router = createRouter({
     scrollBehavior: () => ({ left: 0, top: 0 }),
-    routes,
+    routes: [],
     ...
```

Change `vueRouterMode` in `quasar.conf.js > build` to `history` mode.

### Hreflang link tags

To use the hreflang link tags, make the following changes:

`src/App.vue`

``` diff
 <script lang="ts">
+import { useMeta } from 'quasar'
+import { qint } from 'src/boot/int'
 import { defineComponent } from 'vue'

 export default defineComponent({
   name: 'App',

+  setup() {
+    useMeta(() => qint.meta.value)
+  },
 })
 </script>
```

Enable Quasar [meta](https://quasar.dev/quasar-plugins/meta#installation) plugin.

### SSR mode

Uncomment `ssrContext` in `src/boot/int.(ts|js)` as indicated.

# Uninstall

``` bash
quasar ext remove @quasar/int
```

You might also wish to remove the added directories `src/int`, `src-int` and the
boot file `src/boot/int.(ts|js)`.

# Features

-   SSR support.
-   Supports different URL modes: prefix (example.com/en), subdomain
    (en.example.com), host (example.co.uk), search-param (example.com?l=en), none
    (example.com)
-   Supports the use of a language tag cookie.
-   Can make use of the user's client language preferences (e.g. browser
    settings).
-   Support for `hreflang` link tags.
-   Lazy loading of Quasar language packs and `vue-i18n` locale messages.
-   Language tags, Qint uses the term "language tag" to denote a language or a
    locale, and recommends the use of [BCP 47](https://www.w3.org/International/articles/language-tags) language tags.

# Documentation

API docs: [wint](https://wint.pyxo.net/api) \| [vint](https://vint.pyxo.net/api) \| [qint](https://qint.pyxo.net/api)

# Source code

Repository: [github.com/pyxo-dev/quasar-app-extension-int](https://github.com/pyxo-dev/quasar-app-extension-int)
Qint repository: [github.com/pyxo-dev/qint](https://github.com/pyxo-dev/qint)

Contributions are welcome!

# See also

-   [Wint](https://github.com/pyxo-dev/wint) Web apps int.
-   [Vint](https://github.com/pyxo-dev/vint) Vue int.
-   [Qint](https://github.com/pyxo-dev/qint) Quasar int.
