const { reverseText } = require('./text.controller')
const services = require('../services/text.services')

module.exports = {
  reverseText: reverseText(services.textServices)
}
