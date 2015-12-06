import request from 'request'
import validator from 'validator'
import { makeUrlForFilePipe } from './utils'

function domainPipe(req, res) {
  let config = req.app.get('config')
  let sourceBase = config.get('map')[req.hostname]
  let sourcePath = req.params[0]
  let source = `${sourceBase}${sourcePath}`
  return request(source).pipe(res)
}

function filePipe(req, res, next) {
  let source = makeUrlForFilePipe(req.params[0], req.query)
  let config = req.app.get('config')
  if (!req.hostname === config.get('baseDomain')) { next() }
  if(!validator.isURL(source.replace(/ /g, '%20'))) { return res.status(404) }
  return request(source).pipe(res)
}

export default { domainPipe, filePipe }
