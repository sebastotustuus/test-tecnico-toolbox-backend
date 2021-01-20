const joi = require('joi')

const textReverseSchema = joi.string()

exports.querySchema = () => ({
  text: textReverseSchema
    .required()
    .error(() => new Error('El parámetro text es requerido'))
})
