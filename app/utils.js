import _ from 'lodash'

export function baseResponseModifier(response) {
  // use this function to modify the response as a side effect
}

export function makeUrlForFilePipe(baseUri, queryObject) {
  if (_.isEmpty(queryObject)) { return baseUri }
  let queryString = '?' + _.chain(queryObject).pairs()
    .map((pair) => { return pair.join('=') }).value().join('&')
  return `${baseUri}${queryString}`
}
