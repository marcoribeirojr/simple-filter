'use strict'

const validation = require('./validation.js')
const filter = require('./filter')
const removeRepeats = require('./remove-repeats')

const verify = (facts, schema) => {
  if (!validation(facts) || !validation(schema) || schema.length < 1) {
    return
  }
  let factsFiltered = []
  let factsPhoneFiltered = []
  let factsAddrFiltered = []
  schema.map(sc => {
    let factsTempFiltered = facts.filter((elem, index, arr) => {
      return elem[1] === sc[0]
    })
    if (sc[2] === 'one') {
      factsAddrFiltered = removeRepeats(factsTempFiltered)
    }
    else {
      factsPhoneFiltered = filter(factsTempFiltered)
    }
  })
  factsFiltered = factsFiltered.concat(factsAddrFiltered, factsPhoneFiltered)
  return factsFiltered
}
module.exports = verify
