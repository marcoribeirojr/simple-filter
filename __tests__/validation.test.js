'use strict'

const validation = require('../validation')

test('should return something', () => {
  expect(validation()).toBeUndefined()
})

test('should be some argument', () => {
  expect(validation()).toBeUndefined()
})

test('should be an array', () => {
  expect(validation([1])).toBeDefined()
})
