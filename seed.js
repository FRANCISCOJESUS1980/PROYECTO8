const mongoose = require('mongoose')
const Category = require('./models/Category').Category

const seedCategories = async () => {
  const categories = [
    { name: 'Electronics', image: 'example-path' },
    { name: 'Books', image: 'example-path' }
  ]

  await Category.insertMany(categories)
  console.log('Categories seeded')
}

const runSeeder = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  await seedCategories()
  mongoose.disconnect()
}

runSeeder()
