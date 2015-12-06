import path from 'path'
import _ from 'lodash'
import cors from 'cors'
import config from './config'
import routes from './routes'

export default function bootstrap(app, express) {
  app.set('config', config)
  app.set('port', config.get('port'))
  app.use([ cors() ])
  app.options('*', cors())
  app.use('', routes())
  return app
}
