export function notFound(req, res, next) {
  return res.status(404).send('not found')
}

export function serverError(err, req, res, next) {
  console.error(err.stack)
  return res.status(500).send('server error')
}
