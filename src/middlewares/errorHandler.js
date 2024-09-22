const errorHandler = (err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({
    error: { message: err.message || 'Ocurrió un error interno del servidor' }
  })
}

module.exports = { errorHandler }
