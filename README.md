# mask-json

Redacts values in objects. Useful when sending data to external logging services such as [Sentry](http://app.getsentry.com/).

## Status

[![npm version][npm-image]][downloads-url] [![npm downloads][downloads-image]][downloads-url] [![build status][workflow-image]][workflow-url]

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
_replacement_ | _--REDACTED--_ | The default value to replace, this can be either an explicit value or a function using current value as only parameter

### Returns

_(Function)_: Returns a function that will redact values from a given object.

### Example

```javascript
var blacklist = ['password', 'username'];
var maskJson = require('mask-json')(blacklist);

maskJson({ foo: 'bar', biz: { username: 'myusername', password: 'mypassword' } });

// => { foo: 'bar', biz: { username: '--REDACTED--', password: '--REDACTED--' } }
```

Works the same when "replacement" is not a static string, but a function to convert 
the original value somehow, e.g. mask some parts of a credit card number or phone number
like the original "1234-5678-9012" shall become "1234-****-9012".

The replacement function is called with one parameter - the original value to replace.

```javascript
// with replacement function
var replaceFunc = function(value) { return value.toUpperCase() }; 
var maskJson2 = require('mask-json')(blacklist, {replacement: replaceFunc});

maskJson2({ foo: 'bar', biz: { username: 'myusername', password: 'mypassword' } });

// => { foo: 'bar', biz: { username: 'MYUSERNAME', password: 'MYPASSWORD' } }
```

## Tests

```shell script
$ npm test
```

## Release

```shell script
npm version [<new version> | major | minor | patch] -m "Release %s"
```

## License

MIT

[downloads-image]: https://img.shields.io/npm/dm/mask-json.svg
[downloads-url]: https://npmjs.org/package/mask-json
[npm-image]: https://img.shields.io/npm/v/mask-json.svg
[npm-url]: https://npmjs.org/package/mask-json
[workflow-image]: https://github.com/nunofgs/mask-json/workflows/Node%20CI/badge.svg
[workflow-url]: https://github.com/nunofgs/mask-json/actions
