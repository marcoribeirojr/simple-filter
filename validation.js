'use strict'

const validation = arg => {
  if (arg === undefined || !Array.isArray(arg)) {
    return
  }
  return true
}

module.exports = validation
