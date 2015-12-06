import path from 'path'
import nconf from 'nconf'
import _ from 'lodash'

const d = process.env.DELIMIT_SYMBOL || ','
const a = process.env.ASSIGNMENT_SYMBOL || '=='
const m = process.env.DOMAIN_MAP || '127.0.0.1==https://google.com'

nconf.file({ file: path.join(path.dirname(__dirname), 'settings.json') })

nconf.defaults({
  port: process.env.PORT || 3000,
  workers: process.env.WEB_CONCURRENCY || 1,
  baseDomain: process.env.BASE_DOMAIN || 'localhost',
  map: _.zipObject( _.map(m.split(d), (o) => { return o.split(a) }) )
})

export default nconf
