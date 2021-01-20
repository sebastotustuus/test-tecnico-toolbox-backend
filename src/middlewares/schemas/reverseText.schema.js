const joi = require('joi')

const textReverseSchema = joi.string()

exports.querySchema = () => ({
  q: textReverseSchema
    .required()
    .error(() => new Error('El parámetro q es requerido'))
})
