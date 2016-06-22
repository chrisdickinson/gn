'use strict'

const path = require('path')
const fs = require('fs')
const os = require('os')

const REMAP = {
  'darwin': 'gn-mac',
  'linux': 'gn-linux'
}


if (!(os.platform() in REMAP)) {
  return
}

fs.symlink(
  path.join(__dirname, 'bin', REMAP[os.platform()]),
  path.join(__dirname, 'bin', 'gn'),
  (err) => { if (err) throw err }
)
