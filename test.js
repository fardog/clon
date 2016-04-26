var test = require('tape')

var clon = require('./')

test('clones objects', function (t) {
  var obj = {
    a: 'yes',
    b: 'no',
    c: {
      nested: true
    }
  }
  var dup = clon(obj)

  t.deepEqual(dup, obj, 'have identical contents')
  // eslint-disable-next-line eqeqeq
  t.ok(dup != obj, 'are not the same object')
  t.end()
})
