'use strict'

const verify = require('../verify')

const schemaType1 = ['endereço', 'cardinality', 'one']
const schemaType2 = ['telefone', 'cardinality', 'many']
const personInfo1 = ['gabriel', 'endereço', 'av rio branco, 109', true]
const personInfo2 = ['gabriel', 'endereço', 'casinha feliz, 110', true]
const personInfo3 = ['joão', 'telefone', '91234-5555', true]
const personInfo4 = ['gabriel', 'telefone', '98888-1111', true]
const personInfo5 = ['larissa', 'telefone', '98888-1111', false]

test('should return something', () => {
  expect(verify()).toBeUndefined()
})

test('should have arguments', () => {
  let arr = [];
  expect(verify(arr, arr, arr)).toBeUndefined()
})

test('should have exactly two arguments', () => {
  let facts = [personInfo1, personInfo2]
  let schema = [schemaType1]
  expect(verify(facts, schema)).toBeDefined()
})

test('should be return an array', () => {
  let facts = [personInfo1, personInfo2]
  let schema = [schemaType1]
  expect(verify(facts, schema).length).toBeGreaterThanOrEqual(0);
})

test('should be return info with true values to cardinality to equal one', () => {
  let facts = [personInfo1, personInfo2]
  let ExpectedFacts = [personInfo1]
  let schema = [schemaType1];
  expect(verify(facts, schema)).toEqual(expect.arrayContaining(ExpectedFacts).sample)
})

test('should be return info with true values to any cardinality', () => {
  let facts = [personInfo1, personInfo2, personInfo3, personInfo4, personInfo5]
  let ExpectedFacts = [personInfo1, personInfo3, personInfo4]
  let schema = [schemaType1, schemaType2];
  expect(verify(facts, schema)).toEqual(expect.arrayContaining(ExpectedFacts).sample)
})
