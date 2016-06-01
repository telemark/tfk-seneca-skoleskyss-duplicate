'use strict'

const envs = process.env
const setDuplicate = require('./set-duplicate')
const checkDuplicate = require('./check-duplicate')
const compareDuplicate = require('./compare-duplicate')

module.exports = function duplicate (options) {
  const seneca = this

  seneca.add('role:duplicate, cmd:set', setDuplicate)
  seneca.add('role:duplicate, cmd:check', checkDuplicate)
  seneca.add('role:duplicate, cmd:compare', compareDuplicate)

  return {
    name: envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_TAG || 'tfk-seneca-skoleskyss-duplicate'
  }
}
