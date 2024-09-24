const express = require('express')
const connectDB = require('./src/config/db')
const categoryRoutes = require('./src/routes/categoryRoutes')
const productRoutes = require('./src/routes/productRoutes')
const errorHandler = require('./src/middlewares/errorHandler')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const morgan = require('morgan')
const app = express()
const env = require('./src/config/envConfig')

app.use(helmet())

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'))
} else {
  app.use(morgan('dev'))
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
})
app.use(limiter)

connectDB()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)

app.use(errorHandler)

const PORT = env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor levantado en: http://localhost:${PORT}`)
})
