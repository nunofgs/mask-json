
/**
 * Module dependencies.
 */

import _ from 'lodash';

/**
 * Export `maskJson` function.
 */

export default function maskJson(collection, options) {
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
