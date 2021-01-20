const controllers = require('../controller')
const { handleValidation } = require('../middlewares/validations')
const { querySchema } = require('../middlewares/schemas/reverseText.schema')

module.exports = (router) => {
  router.get(
    '/iecho',
    [handleValidation(querySchema())],
    controllers.reverseText
  )
  return router
}
