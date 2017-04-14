#!/usr/bin/env node
'use strict'

require('console.table')
const program = require('commander')
const path = require('path')
const pkgJSON = require('./package.json')

const PKG_NAME = 'package.json'
const PKG_PATH = './'
const PKG = path.join(__dirname, PKG_PATH, PKG_NAME)
const PKG_FILE = require(PKG)

program
  .version(pkgJSON.version)
  .option('-d, --dep', 'only expose dependencies')
  .option('-D, --devdep', 'only expose devDependencies')
  .parse(process.argv)

const serializePkg = json => {
  return Object.keys(json).map(v => {
    return {
      name: v,
      version: json[v]
    }
  })
}

const sendExpose = (dep, devdep) => {
  if (dep) {
    console.log('------ DEPENDENCIES ------')
    console.table(serializePkg(PKG_FILE.dependencies))
  }

  if (devdep) {
    console.log('------ DEV DEPENDENCIES ------')
    console.table(serializePkg(PKG_FILE.devDependencies))
  }
}

const { dep, devdep } = program
if (!dep && !devdep) return sendExpose(true, true)
sendExpose(dep, devdep)
