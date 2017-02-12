'use strict'
const validation = require('./validation')

const filter = arg => {
  if (!validation(arg)) {
    return
  }
  let result = [];
  result = arg.filter(data => {
    if (data[data.length -1] === true) return data
  })
  return result
}

module.exports = filter
