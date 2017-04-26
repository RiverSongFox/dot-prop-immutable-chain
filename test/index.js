var assert = require('assert')
var dotProp = require('dot-prop-immutable')
var dotPropWrapper = require('../index')

describe('wrapper', function () {

  it('should reflect dotPropImmutable', function () {
    for (var method in dotProp) {
      if (dotProp.hasOwnProperty(method)) {
        assert.strictEqual(dotPropWrapper[method], dotProp[method],
          'method ' + method + ' doesn\'t strictly match dot-prop-immutable\'s ones')
      }
    }
  })

  it('should allow chaining methods of dot-prop-immutable', function () {
    var changed = dotPropWrapper({
      foo: {}
    })
      .set('foo.bar', 'hello')
      .set('foo.baz', 'world')
      .value()
    assert.deepStrictEqual(changed, {
      foo: {
        bar: 'hello',
        baz: 'world'
      }
    })
  })

})
