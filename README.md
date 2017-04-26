# dot-prop-immutable-chain

This module allows you to chain methods of the `dot-prop-immutable` library.

```js
// import the library first
var dotProp = require('dot-prop-immutable-chain')

// invoke dotProp passing object to wrap it
var next = dotProp(previous)
  .set('foo', 'bar')
  .toggle('baz')
  .value() // don't forget unwrap your object
```

You may still use all methods of the original `dot-prop-immutable` library if you want.
