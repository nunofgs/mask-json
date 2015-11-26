'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = maskJson;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export `maskJson` function.
 */

function maskJson(collection, options) {
  options = _lodash2.default.assign({
    replacement: '--REDACTED--'
  }, options);

  return function (values) {
    return _lodash2.default.cloneDeep(values, (value, key) => {
      // Allow cloneDeep to recurse into nested objects.
      if (_lodash2.default.isObject(value)) {
        return;
      }

      // Strip matching keys.
      if (_lodash2.default.contains(collection, key)) {
        return options.replacement;
      }

      // Otherwise, return the value.
      return value;
    });
  };
}
/**
 * Module dependencies.
 */

module.exports = Object.assign(exports.default || {}, exports);