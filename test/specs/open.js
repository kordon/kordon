if(process.env['KORDON_COV']) var kordon = require('../../src-cov/kordon')
else var kordon = require('../../')

var expect = require('chai').expect,
    utils = require('../utils'),
    sgen = require('sgen'),
    path = require('path')

suite('open', function () {
  suite('with path', function () {
    test('w/o port', function () {
      var db = kordon.open(utils.path)
      expect(db).to.be.ok
    })
  })
})