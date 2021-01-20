const { PORT } = require('./config')
const app = require('./server')

app.listen(PORT, () => {
  console.log('Escuchando en el puerto: ', PORT)
})

module.exports = app
