const createError = (status, message) => {
  const error = new Error(message)
  error.status = status
  error.timestamp = new Date().toISOString()
  return error
}
const createValidationError = (validationErrors) => {
  const message = validationErrors.map((err) => err.message).join(', ')
  return createError(400, message)
}

module.exports = { createError, createValidationError }
