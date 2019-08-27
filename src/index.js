
/**
 * Module dependencies.
 */

const { cloneDeepWith, isObject, toLower, some } = require('lodash');

/**
 * Export `maskJson` function.
 */

module.exports = function maskJson(collection, {
  ignoreCase = false,
  replacement = '--REDACTED--'
} = {}) {
  return function(values) {
    return cloneDeepWith(values, (value, key) => {
      // Strip matching keys.
      if (some(collection, item => ignoreCase ? toLower(key) === toLower(item) : key === item)) {
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
};
