
/**
 * Module dependencies.
 */

import maskJson from '../src/index';

/**
 * Test `maskJson`.
 */

describe('maskJson()', () => {
  it('should accept a custom `replacement`', () => {
    const object = {
      foo: {
        password: 'foobar',
        secret: 'bizbaz'
      }
    };

    maskJson(['password', 'secret'], { replacement: '*****' })(object).should.eql({
      foo: {
        password: '*****',
        secret: '*****'
      }
    });
  });

  it('should mask non-plain objects', () => {
    const object = {
      bar: {
        biz: 'baz'
      },
      foo: {
        expiration: new Date()
      }
    };

    maskJson(['expiration'])(object).should.eql({
      bar: {
        biz: 'baz'
      },
      foo: {
        expiration: '--REDACTED--'
      }
    });
  });

  it('should mask values from the object', () => {
    const object = {
      bar: {
        biz: 'baz'
      },
      foo: {
        password: 'foobar',
        secret: 'bizbaz'
      }
    };

    maskJson(['password', 'secret'])(object).should.eql({
      bar: {
        biz: 'baz'
      },
      foo: {
        password: '--REDACTED--',
        secret: '--REDACTED--'
      }
    });
  });
});
