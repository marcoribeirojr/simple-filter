'use strict'

const verify = require('../verify')

test('should return something', () => {
  expect(verify()).toBeUndefined()
})

test('should have arguments', () => {
  let arr = [];
  expect(verify(arr, arr, arr)).toBeDefined()
})

test('should have exactly two arguments', () => {
  let arr = [];
  expect(verify(arr, arr)).toBeDefined()
})
