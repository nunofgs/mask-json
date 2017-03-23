
/**
 * Module dependencies.
 */

const { assign, cloneDeepWith, includes, isObject } = require('lodash');

/**
 * Export `maskJson` function.
 */

module.exports = function maskJson(collection, options) {
  options = assign({
    replacement: '--REDACTED--'
  }, options);

  return function(values) {
    return cloneDeepWith(values, (value, key) => {
      // Strip matching keys.
      if (includes(collection, key)) {
        return options.replacement;
      }

      // Allow cloneDeep to recurse into nested objects.
      if (isObject(value)) {
        return;
      }

      // Otherwise, return the value.
      return value;
    });
  };
}
