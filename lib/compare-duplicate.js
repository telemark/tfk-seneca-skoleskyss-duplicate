'use strict'

const md5 = require('md5')
const mongojs = require('mongojs')
const envs = process.env
const dbduplicate = mongojs(envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_MONGODB_URI || 'localhost/duplicate')
const duplicates = dbduplicate.collection('duplicates')

module.exports = function compareDuplicates (args, callback) {
  const duplicateId = md5(args.duplicateId)
  const payload = {
    duplicateId: duplicateId
  }

  duplicates.find(payload, function findDuplicates (error, data) {
    if (error) {
      callback(error, null)
    } else {
      callback(null, data.length > 0 ? data[0] : false)
    }
  })
}
