var path = require('path')

module.exports.path = function () {
  return path.join(path.basename(__filename), '..', 'dbs', sgen.timespan())
}