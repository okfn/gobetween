import request from 'request'
import validator from 'validator'
import { makeUrlForFilePipe, baseResponseModifier } from './utils'

function domainPipe(req, res) {
  let config = req.app.get('config')
  let sourceBase = config.get('map')[req.hostname]
  let sourcePath = req.params[0]
  let source = request(`${sourceBase}${sourcePath}`)
  source.on('response', baseResponseModifier);
  return source.pipe(res);
}

function filePipe(req, res, next) {
  let url = makeUrlForFilePipe(req.params[0], req.query)
  let config = req.app.get('config')
  if (!req.hostname === config.get('baseDomain')) { next() }
  if(!validator.isURL(url.replace(/ /g, '%20'))) {
    return res.status(404).send('not found.')
  }
  let source = request(url)
  source.on('response', baseResponseModifier);
  return source.pipe(res);
}

export default { domainPipe, filePipe }
