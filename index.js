const express = require('express')
const { errorHandler } = require('./src/middlewares/errorHandler')
const connectDB = require('./src/config/db')
const productRoutes = require('./src/routes/productRoutes')
const categoryRoutes = require('./src/routes/categoryRoutes')
require('dotenv').config()

const app = express()

connectDB()

app.use(express.json())

app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)

app.use(errorHandler)

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
