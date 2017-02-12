'use script'

const filter = require('../filter');

test('should return something', () => {
  expect(filter()).toBeUndefined();
})

test('should have arguments', () => {
  const ar = []
  expect(filter(ar)).toBeDefined();
})

test('the argument should be an array', () => {
  const ar = []
  expect(filter('')).toBeUndefined();
})

test('should be return an array', () => {
  const ar = [];
  expect(filter(ar).length).toBeGreaterThanOrEqual(0);
})

test('should be return info with true values', () => {
  const person1 = ['gabriel', 'endereço', 'av rio branco, 109', true];
  const person2 = ['gabriel', 'endereço', 'casinha feliz, 110', false];
  const ar = [person1, person2];
  expect(filter(ar)).toEqual([expect.arrayContaining(person1).sample]);
})
