const key = 'q'

exports.reverseText = (textServices) => {
  return (req, res, next) => {
    try {
      const { query } = req
      const result = textServices(query[key])
      res.json(result)
    } catch (err) {
      next(err)
    }
  }
}
