const mongoose = require('mongoose')
const connectDB = require('./src/config/db')
const { Product } = require('./src/models/Product')
const { Category } = require('./src/models/Category')

const seedData = async () => {
  try {
    await connectDB()

    const category1 = new Category({
      name: 'Electrónica',
      image: 'image-url-1'
    })
    const category2 = new Category({ name: 'Ropa', image: 'image-url-2' })

    await category1.save()
    await category2.save()

    const product1 = new Product({
      name: 'Teléfono',
      image: 'image-url-3',
      category: category1._id
    })
    const product2 = new Product({
      name: 'Camiseta',
      image: 'image-url-4',
      category: category2._id
    })

    await product1.save()
    await product2.save()

    console.log('Datos iniciales insertados correctamente')
    process.exit()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

seedData()
