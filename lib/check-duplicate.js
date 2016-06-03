'use strict'

const md5 = require('md5')
const mongojs = require('mongojs')
const config = require('../config')
const dbduplicate = mongojs(config.TFK_SENECA_SKOLESKYSS_DUPLICATE_MONGODB_URI)
const duplicates = dbduplicate.collection('duplicates')

module.exports = function compareDuplicates (args, callback) {
  const duplicateId = md5(args.duplicateId)
  const payload = {
    duplicateId: duplicateId
  }
  var result = false

  duplicates.find(payload, function findDuplicates (error, data) {
    if (error) {
      callback(error, null)
    } else {
      if (!args.duplicateData) {
        result = data.length > 0
      } else {
        result = data.length > 0 ? data[0].data === args.duplicateData : false
      }
      callback(null, {duplicate: result})
    }
  })
}
