require('dotenv').config()
const mongoose = require('mongoose')
const Category = require('./src/models/Category').Category

const seedCategories = async () => {
  const categories = [
    {
      name: 'Electronics',
      image:
        'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/your-image.jpg'
    },
    {
      name: 'Books',
      image:
        'https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/your-image.jpg'
    }
  ]

  try {
    await Category.insertMany(categories)
    console.log('Categories seeded')
  } catch (error) {
    console.error('Error seeding categories:', error)
  }
}

const runSeeder = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    await seedCategories()
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  } finally {
    mongoose.disconnect()
  }
}

runSeeder()
