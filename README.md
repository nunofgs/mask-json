# mask-json

Redacts values in objects. Useful when sending data to external logging services such as [Sentry](http://app.getsentry.com/).

## Status

[![npm version][npm-image]][downloads-url] [![npm downloads][downloads-image]][downloads-url] [![build status][travis-image]][travis-url]

## Installation

Install the package via `npm`:

```
$ npm install mask-json
```

## Usage

### Arguments

1. `collection` _(Array)_: An array of keys to redact.
2. `[options]` _(Object)_: An optional object with the following options:

Option        | Default value  | Description
------------- | -------------- | -----------------------------------------------------
_ignoreCase_  | false          | Whether to ignore case sensitivity when matching keys
_replacement_ | _--REDACTED--_ | The default value to replace

### Returns

_(Function)_: Returns a function that will redact values from a given object.

### Example

```javascript
var blacklist = ['password', 'secret'];
var maskJson = require('mask-json')(blacklist);

maskJson({ foo: 'bar', biz: { username: 'myusername', password: 'mypassword' } });

// => { foo: 'bar', biz: { username: '--REDACTED--', password: '--REDACTED--' } }
```

## Tests

```javascript
$ npm test
```

## License

MIT

[downloads-image]: https://img.shields.io/npm/dm/mask-json.svg
[downloads-url]: https://npmjs.org/package/mask-json
[npm-image]: https://img.shields.io/npm/v/mask-json.svg
[npm-url]: https://npmjs.org/package/mask-json
[travis-image]: https://img.shields.io/travis/seegno/mask-json.svg
[travis-url]: https://travis-ci.org/seegno/mask-json
