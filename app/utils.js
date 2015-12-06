import _ from 'lodash'

export function baseResponseModifier(response) {
  // set content-range. papaparse.js likes it so it can stream.
  if (!response.headers['content-range']) {
    let length = response.headers['content-length']
    let upper = parseInt(length, 10) - 1
    response.headers['content-range'] = `bytes 0-${upper}/${length}`
  }
}

export function makeUrlForFilePipe(baseUri, queryObject) {
  if (_.isEmpty(queryObject)) { return baseUri }
  let queryString = '?' + _.chain(queryObject).pairs()
    .map((pair) => { return pair.join('=') }).value().join('&')
  return `${baseUri}${queryString}`
}
