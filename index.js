
/**
 * Module dependencies.
 */

const _ = require('lodash');

/**
 * Export `maskJson` function.
 */

module.exports = function maskJson(collection, options) {
  options = _.assign({
    replacement: '--REDACTED--'
  }, options);

  return function(values) {
    return _.cloneDeep(values, (value, key) => {
      // Strip matching keys.
      if (_.contains(collection, key)) {
        return options.replacement;
      }

      // Allow cloneDeep to recurse into nested objects.
      if (_.isObject(value)) {
        return;
      }

      // Otherwise, return the value.
      return value;
    });
  };
}
