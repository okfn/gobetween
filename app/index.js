import express from 'express'
import bootstrap from './bootstrap'

export function start() {
  let app = express()
  app = bootstrap(app, express)
  let server = app.listen(app.get('port'), function() {
    console.log('Serving from port ' + app.get('port'))
  })
}
