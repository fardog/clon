# clon

[![Build Status](http://img.shields.io/travis/fardog/clon/master.svg?style=flat-square)](https://travis-ci.org/fardog/clon)
[![npm install](http://img.shields.io/npm/dm/clon.svg?style=flat-square)](https://www.npmjs.org/package/clon)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

Fast-clones an object using `JSON.parse(JSON.stringify(obj))`

**Note:** This function will throw if your object is not JSON serializable.

## Example

```javascript
var clon = require('clon')

var dup = clon({a: 1, b: 2})

console.log(dup)  // {a: 1, b: 2}
```

## License

MIT. See [LICENSE](./LICENSE) for details.
