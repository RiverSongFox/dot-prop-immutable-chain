# dot-prop-immutable-chain 
![Travis CI](https://travis-ci.org/yaruson/dot-prop-immutable-chain.svg)

This module allows you to chain methods of the [dot-prop-immutable](https://github.com/debitoor/dot-prop-immutable) library.

```
npm install dot-prop-immutable-chain
```

## Usage

The module exports a single function that creates a wrapper object around given object. The wrapper will contain all methods of the **dot-prop-immutable** library.

You must explicitly unwrap your object with `value()` method.

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

```js
var next = dotProp.set(previous, 'foo', 'bar')
next = dotProp.toggle(next, 'baz')
```

## Bugs and fixes

* Raise an issue if you want to report an error, request a feature or just ask a question.
* Please file an issue as well before start working on the pull request.