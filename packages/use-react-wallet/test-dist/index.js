
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./use-react-wallet.cjs.production.min.js')
} else {
  module.exports = require('./use-react-wallet.cjs.development.js')
}
