var kordon = process.env.KORDON_COVERAGE ? require('../lib-cov/kordon.js') : require('..'),
    assert = require('assert')

assert(kordon())