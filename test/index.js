var assert = require('assert')
var dotProp = require('dot-prop-immutable')
var dotPropChain = require('../index')

describe('dot-prop-immutable-chain', function () {

  describe('individual methods', function () {

    it('gets', function () {
      assert.strictEqual(
        dotPropChain({foo: {bar: 'baz'}})
          .get('foo.bar')
          .value(),
        'baz'
      )
    })

    it('sets', function () {
      assert.deepStrictEqual(dotPropChain({
          foo: {
            bar: 'baz'
          }
        })
          .set('foo.bar', 'meow')
          .value(),
        {
          foo: {
            bar: 'meow'
          }
        }
      )
    })

    it('deletes', function () {
      assert.deepStrictEqual(dotPropChain({
          foo: {
            bar: 'baz',
            baz: 'meow'
          }
        })
          .delete('foo.bar')
          .value(),
        {
          foo: {
            baz: 'meow'
          }
        }
      )
    })

    it('toggles', function () {
      assert.strictEqual(dotPropChain({foo: false})
          .toggle('foo')
          .value().foo,
        true
      )
    })

    it('merges', function () {
      assert.deepStrictEqual(dotPropChain({
          foo: {
            bar: ['baz']
          }
        })
          .merge('foo.bar', ['meow'])
          .value(),
        {
          foo: {
            bar: ['baz', 'meow']
          }
        }
      )
    })

  })

  describe('integration features', function () {

    it('reflects methods of dot-prop-immutable', function () {
      for (var method in dotProp) {
        if (dotProp.hasOwnProperty(method)) {
          assert.strictEqual(dotPropChain[method], dotProp[method],
            'method ' + method + ' doesn\'t strictly match dot-prop-immutable\'s ones')
        }
      }
    })

    it('allows chaining methods', function () {
      var state = {}
      state = dotPropChain(state)
        .set('foo.bar', 'hello')
        .set('foo.baz', 'world')
        .value()
      assert.deepStrictEqual(state, {
        foo: {
          bar: 'hello',
          baz: 'world'
        }
      })
    })

  })

})
