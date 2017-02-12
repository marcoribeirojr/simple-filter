'use strict'
const validation = require('./validation')

const removeRepeats = arg => {
  if (!validation(arg)) {
    return
  }
  for (let i = 0; i < arg.length -1; i++) {
    for (let k = 1; k < arg.length; k++) {
      if (arg[i][0] === arg[k][0]) {
        arg.splice(arg.indexOf(arg[k]), 1)
      }
    }
  }
  return arg
}
module.exports = removeRepeats
