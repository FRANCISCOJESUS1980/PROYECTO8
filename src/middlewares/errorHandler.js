const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500
  const message = err.message || 'Error en el Servidor'
  console.error(`Error: ${message}, Status Code: ${statusCode}`)
  res.status(statusCode).json({ message })
}

module.exports = errorHandler
