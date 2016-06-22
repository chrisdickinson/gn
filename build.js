'use strict'

const fs = require('fs')

const REMAP_FILES = {
  './buildtools/win/gn.exe': './bin/gn.exe',
  './buildtools/linux64/gn': './bin/gn-linux',
  './buildtools/mac/gn': './bin/gn-mac'
}

Object.keys(REMAP_FILES).forEach(xs => {
  fs.createReadStream(xs).pipe(
    fs.createWriteStream(REMAP_FILES[xs], {mode: 0o744})
  )
})
