# mask-json

Redacts values in objects. Useful when sending data to external logging services such as [Sentry](http://app.getsentry.com/).

## Status

  [![npm version][npm-image]][npm-url]
  [![npm downloads][downloads-image]][downloads-url]
  [![build status][travis-image]][travis-url]

## Installation

  Install the package via `npm`:

```
$ npm install mask-json
```

## Usage

#### Arguments

  1. `collection` *(Array)*: An array of keys to redact.
  2. `[options]` *(Object)*: An optional object with the following options:

| Option        | Default value  | Description                  |
|---------------|----------------|------------------------------|
| _replacement_ | _--REDACTED--_ | The default value to replace |

#### Returns

  *(Function)*: Returns a function that will redact values from a given object.

#### Example

```js
var blacklist = ['password', 'secret'];
var maskJson = require('mask-json')(blacklist);

maskJson({ foo: 'bar', biz: { username: 'myusername', password: 'mypassword' } });

// => { foo: 'bar', biz: { username: '--REDACTED--', password: '--REDACTED--' } }
```

## Tests

```js
$ npm test
```

## License

MIT

[downloads-image]: https://img.shields.io/npm/dm/mask-json.svg
[downloads-url]: https://npmjs.org/package/mask-json
[npm-image]: https://img.shields.io/npm/v/mask-json.svg
[npm-url]: https://npmjs.org/package/mask-json
[travis-image]: https://travis-ci.org/seegno/mask-json.svg
[travis-url]: https://travis-ci.org/seegno/mask-json
