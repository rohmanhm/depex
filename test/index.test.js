/* eslint-disable no-unused-vars */
import { join, resolve } from 'path'
import test from 'ava'
import S from 'string'
import { shell, shellSync } from 'execa'
import pkgJSON from '../package.json' // eslint-disable-line import/extensions

const depJSON = pkgJSON.dependencies
const devDepJSON = pkgJSON.devDependencies
const depex = join(__dirname, '../', pkgJSON.bin)

const checkDep = (str, dep) => {
  return Object.keys(dep).map(v => {
    return S(str).contains(v)
  })
}

test.before(t => {
  // Ask permission
  shellSync(`chmod +x ${ depex }`)
})

test.beforeEach(async t => {
  const noop = await shell(`${ depex }`)
  t.context.result = noop.stdout
})

test('should show something', t => {
  t.truthy(t.context.result)
})

test('result should contains dependencies', t => {
  const contains = checkDep(t.context.result, depJSON).indexOf(false) < 0
  t.true(contains)
})

test('result should contains devDependencies', t => {
  const containsDev = checkDep(t.context.result, devDepJSON).indexOf(false) < 0
  t.true(containsDev)
})
