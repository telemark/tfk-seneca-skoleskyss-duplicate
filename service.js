'use strict'

const Seneca = require('seneca')
const Mesh = require('seneca-mesh')
const Duplicate = require('./lib/duplicate')
const envs = process.env

const options = {
  seneca: {
    tag: envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_TAG || 'tfk-seneca-skoleskyss-duplicate'
  },
  mesh: {
    auto: true,
    listen: [
      {pin: 'role:duplicate, cmd:set', model: 'consume'},
      {pin: 'role:duplicate, cmd:check', model: 'consume'}
    ]
  },
  duplicate: {
    url: envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_URL || 'https://skoleskyssduplicate.no'
  },
  isolated: {
    host: envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_HOST || 'localhost',
    port: envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_PORT || 8000
  }
}

const Service = Seneca(options.seneca)

if (envs.TFK_SENECA_SKOLESKYSS_DUPLICATE_ISOLATED) {
  Service.listen(options.isolated)
} else {
  Service.use(Mesh, options.mesh)
}

Service.use(Duplicate, options.duplicate)
