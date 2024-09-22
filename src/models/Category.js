const mongoose = require('mongoose')
const Joi = require('joi')

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }
})

const joiCategorySchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  image: Joi.string().optional()
})

module.exports = {
  Category: mongoose.model('Category', categorySchema),
  categorySchema: joiCategorySchema
}
