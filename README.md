# GoBetween

[![Travis Build Status](https://travis-ci.org/okfn/gobetween.svg?branch=master)](https://travis-ci.org/okfn/gobetween)
[![Coveralls](http://img.shields.io/coveralls/okfn/gobetween.svg?branch=master)](https://coveralls.io/r/okfn/gobetween?branch=master)

A simple app for proxying requests with CORS support. Map any domain to any URI as a base path, or, use a dedicated endpoint for proxying any URI.

# Quickstart

```
git clone https://github.com/okfn/gobetween.git
npm install
npm start
```

We've now got a server running. By default, `127.0.0.1` is setup to proxy `google.com` in the `DOMAIN_MAP`, and additionally `localhost` is the `BASE_DOMAIN` which allows you to use the `/pipe/` endpoint to proxy any URI.

## Domain

Go to `127.0.0.1:3000/`. You should see `google.com`.

## File

Go to `localhost:3000/pipe/https://raw.githubusercontent.com/dataprotocols/schemas/master/data-package.json`. you should see `https://raw.githubusercontent.com/dataprotocols/schemas/master/data-package.json`.

# Configuration

Domains to proxy are configured via the `DOMAIN_MAP` environment variable, which is an array of mapping between front facing domains, and the domains or URI paths they proxy.

By default, `,` is the delimiter symbol (`DELIMITER_SYMBOL`) for values in this array, and `==` is the assignment symbol (`ASSIGNMENT_SYMBOL`).

Here is an example of a real configuration:

* `DOMAIN_MAP`: `schemas.datapackages.org==https://raw.githubusercontent.com/dataprotocols/schemas/master`
* `BASE_DOMAIN`: `gobetween.oklabs.org`

This configuration exposes `gobetween.oklabs.org/pipe/{URI_TO_PROXY}` as the file proxy, and `schemas.datapackages.org` serves up whatever files it can find under the `https://raw.githubusercontent.com/dataprotocols/schemas/master` path.
