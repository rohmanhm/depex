#!/usr/bin/env node
'use strict'

require('console.table') // eslint-disable-line import/no-unassigned-import
const path = require('path')
const program = require('commander')
const pkgJSON = require('../package.json')
const { parsePkg } = require('./utils')

program
  .version(pkgJSON.version)
  .option('-d, --dep', 'only expose dependencies')
  .option('-D, --devdep', 'only expose devDependencies')
  .parse(process.argv)

const PKG_PATH = path.resolve(process.env.PWD, './package.json')
const PKG_FILE = require(PKG_PATH)

const sendExpose = (dep, devdep) => {
  if (dep) {
    console.log('------ DEPENDENCIES ------')
    console.table(parsePkg(PKG_FILE.dependencies))
  }

  if (devdep) {
    console.log('------ DEV DEPENDENCIES ------')
    console.table(parsePkg(PKG_FILE.devDependencies))
  }
}

const { dep, devdep } = program
// If there is no option passed
if (!dep && !devdep) {
  sendExpose(true, true)
} else {
  sendExpose(dep, devdep)
}
