'use strict'

const md5 = require('md5')
const mongojs = require('mongojs')
const envs = process.env
const dbduplicate = mongojs(envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_MONGODB_URI || 'localhost/duplicate')
const duplicates = dbduplicate.collection('duplicates')

module.exports = function setDuplicate (args, callback) {
  const duplicateId = md5(args.duplicateId)
  const payload = {
    query: {
      duplicateId: duplicateId
    },
    update: {
      '$set': {
        data: args.data,
        timeStamp: new Date().getTime()
      }
    },
    upsert: true,
    new: true
  }

  duplicates.findAndModify(payload, function updateDuplicate (error, data) {
    if (error) {
      console.error(error)
    } else {
      console.log(data)
    }
  })

  callback(null, {set: true})
}
