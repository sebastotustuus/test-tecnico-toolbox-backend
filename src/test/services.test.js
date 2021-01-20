/* eslint-disable no-undef */
const { expect } = require('chai')
const { textServices } = require('../services/text.services')

describe('Tesing of Service to reverse a text', () => {
  it('check if the reverse word is correctly', () => {
    const mock = {
      original: 'test',
      text: 'tset',
      palindrome: false
    }
    const result = textServices('test')
    expect(result).to.eql(mock)
  })

  it('should check a bussiness logic object key', () => {
    const result = textServices('test')
    expect(result).to.include.keys('text')
  })

  it('should return the reverse word', () => {
    const result = textServices('test')
    expect(result.text).to.equal('tset')
    expect(result.text).to.not.equal('test')
  })
})
