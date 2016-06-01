'use strict'

const md5 = require('md5')
const mongojs = require('mongojs')
const config = require('../config')
const dbduplicate = mongojs(config.TFK_SENECA_SKOLESKYSS_DUPLICATE_MONGODB_URI)
const duplicates = dbduplicate.collection('duplicates')

module.exports = function compareDuplicates (args, callback) {
  const duplicateId = md5(args.duplicateId)
  const duplicateData = args.duplicateData
  const payload = {
    duplicateId: duplicateId
  }

  duplicates.find(payload, function findDuplicates (error, data) {
    if (error) {
      callback(error, null)
    } else {
      const result = data.length > 0 ? data.data === duplicateData : false
      callback(null, {duplicate: result})
    }
  })
}
