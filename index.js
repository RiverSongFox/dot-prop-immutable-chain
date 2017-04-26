var dotProp = require('dot-prop-immutable')

module.exports = Object.assign(function (init) {
  var next = init

  var methods = {
    value: function () {
      return next
    }
  }

  for (var name in dotProp) {
    methods[name] = function (name) {
      var params = [next]
      for (var i = 1; i < arguments.length; i++) {
        params.push(arguments[i])
      }
      next = dotProp[name].apply(undefined, params)
      return methods
    }.bind(undefined, name)
  }

  return methods
}, dotProp)
