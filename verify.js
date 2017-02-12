'use strict'
const validation = require('./validation.js')

const verify = (facts, schema) => {
  if (validation(facts) && validation(schema)) {
    return true
  }
  else {
    return
  }
}

module.exports = verify
/*
mapear o schema
filtrar os facts

*/
