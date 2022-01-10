
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sdk-connect.cjs.production.min.js')
} else {
  module.exports = require('./sdk-connect.cjs.development.js')
}
