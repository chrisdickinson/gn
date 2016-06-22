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

fs.createReadStream(path.join(__dirname, 'bin', REMAP[os.platform()])).pipe(
  fs.createWriteStream(path.join(__dirname, 'bin', 'gn'), {
    mode: 0o744
  })
)
