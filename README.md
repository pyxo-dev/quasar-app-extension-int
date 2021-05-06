# Introduction

Quasar Int is an app extension that makes use of
[Qint](https://github.com/pyxo-dev/qint) to facilitate the i18n of
Quasar apps.

# Installation

``` bash
quasar ext add @pyxo/int
```

The extension will add a directory `src/extensions/int/` that contains
the configuration and the boot file.

The extension will also scaffold an example implementation in
`src-int/`.

## Prompts

You will be prompted if your app has typescript support, if you answer
yes, \*.ts files will be added instead of \*.js.

# Uninstall

``` bash
quasar ext remove @quasar/int
```

You might also wish to remove the added directories `src/extensions/int`
and `src-int`.

# Features

-   SSR support.
-   Supports different URL modes: prefix (example.com/en), subdomain
    (en.example.com), host (example.co.uk), search-param
    (example.com?l=en), none (example.com)
-   Supports the use of a language tag cookie.
-   Can make use of the user's client language preferences (e.g. browser
    settings).
-   Support for `hreflang` link tags.
-   Language tags, Qint uses the term "language tag" to denote a
    language or a locale, and recommends the use of [BCP
    47](https://www.w3.org/International/articles/language-tags)
    language tags.

# Documentation

API docs: [qint.pyxo.net/api](https://qint.pyxo.net/api)

# Source code

Repository:
[github.com/pyxo-dev/quasar-app-extension-int](https://github.com/pyxo-dev/quasar-app-extension-int)
Qint repository:
[github.com/pyxo-dev/qint](https://github.com/pyxo-dev/qint)

Contributions are welcome!

# See also

-   [Wint](https://github.com/pyxo-dev/wint) Web apps int.
-   [Vint](https://github.com/pyxo-dev/vint) Vue int.
-   [Qint](https://github.com/pyxo-dev/qint) Quasar int.
