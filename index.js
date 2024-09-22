const express = require('express')
const connectDB = require('./src/config/db')
const categoryRoutes = require('./src/routes/categoryRoutes')
const productRoutes = require('./src/routes/productRoutes')
const errorHandler = require('./src/middlewares/errorHandler')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')

const app = express()
const env = require('./src/config/envConfig')

app.use(helmet())

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

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
