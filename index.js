
/**
 * Module dependencies.
 */

const { cloneDeepWith, isObject, some } = require('lodash');

/**
 * Export `maskJson` function.
 */

module.exports = function maskJson(collection, {
  ignoreCase = false,
  replacement = '--REDACTED--'
} = {}) {
  return function(values) {
    return cloneDeepWith(values, (value, key) => {
      // The top-most object has no key.
      if (!key) {
        return;
      }

      // Strip matching keys.
      if (some(collection, (item) => ignoreCase ? key.toLowerCase() === item.toLowerCase() : key === item)) {
        return replacement;
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
