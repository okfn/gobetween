import { assert } from 'chai'
import _ from 'lodash'
import request from 'request'
import jsdom from 'mocha-jsdom'
import { start } from '../app'

const defaultDomain = 'http://127.0.0.1:3000'

describe('proxy types', () => {
  before( function () { start() } )
  it('proxies domain to domain', (done) => {
    request(defaultDomain, (err, res, body) => {
      assert.isString(body)
      assert.include(body, 'Google.com')
      done()
    })
  })
  it('proxies domain to uri path', (done) => {
    request(defaultDomain, (err, res, body) => {
      // TODO: example where proxied root is like:
      // https://raw.githubusercontent.com/dataprotocols/schemas/master
      done()
    })
  })
  it('proxies any url', (done) => {
    let source = 'https://raw.githubusercontent.com/dataprotocols/schemas/master/registry.csv'
    let filePipe = defaultDomain + '/pipe/' + source
    request(filePipe, (err, res, body) => {
      assert.isString(body)
      assert.include(body, 'id,')
      done()
    })
  })
})
