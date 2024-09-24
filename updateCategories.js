const mongoose = require('mongoose')
const Category = require('./src/models/Category').Category
const cloudinary = require('./src/config/cloudinary')

const updateCategories = async () => {
  const categories = await Category.find({ cloudinaryId: { $exists: false } })

  for (let category of categories) {
    console.log(`Updating category: ${category.name}`)

    const publicId = category.image.split('/').pop().split('.')[0]

    category.cloudinaryId = publicId
    await category.save()
  }

  console.log('Categorías actualizadas.')
  mongoose.disconnect()
}

mongoose
  .connect(process.env.DB_URL, {})
  .then(() => {
    console.log('Conectado a MongoDB')
    updateCategories()
  })
  .catch((err) => console.log('Error conectando a MongoDB:', err))
