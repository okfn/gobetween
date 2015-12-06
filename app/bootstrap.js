import path from 'path'
import _ from 'lodash'
import cors from 'cors'
import config from './config'
import { notFound, serverError } from './middlewares'
import routes from './routes'

export default function bootstrap(app, express) {
  const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true,
    "exposedHeaders": 'Content-Range,X-Content-Range'
  }
  const corsInstance = cors(corsOptions)
  app.set('config', config)
  app.set('port', config.get('port'))
  app.use([ corsInstance ])
  app.options('*', corsInstance)
  app.use('', routes())
  app.use([ notFound, serverError ])
  return app
}
