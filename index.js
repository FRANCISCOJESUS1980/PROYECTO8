require('dotenv').config()
const express = require('express')
const connectDB = require('./src/config/db')
/*const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const { errorHandler } = require('./middlewares/errorHandler')*/

const app = express()

app.use(express.json())

connectDB()

//app.use('/api/products', productRoutes)
//app.use('/api/categories', categoryRoutes)

//app.use(errorHandler)

app.listen(3000, () => {
  console.log('Servidor levantado en: http://localhost:3000')
})
