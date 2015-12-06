import _ from 'lodash'

export function makeUrlForFilePipe(baseUri, queryObject) {
  if (_.isEmpty(queryObject)) { return baseUri }
  let queryString = '?' + _.chain(queryObject).pairs()
    .map((pair) => { return pair.join('=') }).value().join('&')
  return `${baseUri}${queryString}`
}
