
/**
 * Module dependencies.
 */

const maskJson = require('src/index');

/**
 * Test `maskJson`.
 */

describe('maskJson()', () => {
  it('should accept a custom `ignoreCase`', () => {
    const object = {
      bar: ['biz', 'baz'],
      foo: {
        PaSSWorD: 'barbiz',
        password: 'foobar',
        secret: 'bizbaz'
      }
    };

    expect(maskJson(['password', 'secret'], { ignoreCase: true })(object)).toEqual({
      bar: ['biz', 'baz'],
      foo: {
        PaSSWorD: '--REDACTED--',
        password: '--REDACTED--',
        secret: '--REDACTED--'
      }
    });
  });

  it('should accept a custom `replacement`', () => {
    const object = {
      foo: {
        password: 'foobar',
        secret: 'bizbaz'
      }
    };

    expect(maskJson(['password', 'secret'], { replacement: '*****' })(object)).toEqual({
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

    expect(maskJson(['expiration'])(object)).toEqual({
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

    expect(maskJson(['password', 'secret'])(object)).toEqual({
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
