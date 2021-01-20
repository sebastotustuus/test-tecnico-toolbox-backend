/* eslint-disable no-undef */
const request = require('supertest')
const app = require('../')

const mockBadRequest = {
  statusCode: 404,
  error: 'Not Found',
  message: 'Recurso no encontrado. Comuniquese con el administrador'
}

describe('GET /iecho', () => {
  it('should response status 200', (done) => {
    request(app)
      .get('/iecho?text=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it('should return status 404 Not found', (done) => {
    request(app)
      .get('/ichosqw123')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404)
      .expect(mockBadRequest)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })

  it('should return status 400 Bad Request', (done) => {
    request(app)
      .get('/iecho?texts=test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err)
        done()
      })
  })
})
