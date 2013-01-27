var utils = require('./utils'),
    sgen = require('sgen')

var kordon = function (path, port, server) {
  this.path = path
}

module.exports.open = function (path, port) {
  return new kordon(path)
}