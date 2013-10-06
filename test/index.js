var kordon = process.env.KORDON_COV ? require('../lib-cov/kordon.js') : require('..'),
    assert = require('assert')

suite('test')

test('nothing', function () {
  assert(kordon())
})