'use strict'

const envs = process.env

module.exports = {
  TFK_SENECA_SKOLESKYSS_DUPLICATE_MONGODB_URI: envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_MONGODB_URI || 'mongodb://localhost/duplicate'
}
