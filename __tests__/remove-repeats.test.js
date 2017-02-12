'use-strict'

const removeRepeats = require('../remove-repeats')

test('Should be return anything', () => {
  expect(removeRepeats()).toBeUndefined()
})

test('Should have argument', () => {
  expect(removeRepeats('')).toBeUndefined()
})

test('The argument must be an array', () => {
  expect(removeRepeats('')).toBeUndefined()
})

test('Should be return an array', () => {
  let arr = []
  expect(removeRepeats(arr).length).toBeGreaterThanOrEqual(0)
})

test('Should be return filtered elements', () => {

  let person1  = ['person1', 'addr', 'addr1']
  let person2  = ['person1', 'addr', 'addr1']
  let person3  = ['person3', 'addr', 'addr3']
  let persons = [person1, person2, person3]
  let expectedReturn = [person1, person3]

  expect(removeRepeats(persons)).toEqual(expect.arrayContaining(expectedReturn).sample)
})
