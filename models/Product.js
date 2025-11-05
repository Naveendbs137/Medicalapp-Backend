const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  price: Number,
  mrp: Number,
  discountPercent: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  manufacturer: String,
  expiry: Date,
  stock: { type: Number, default: 0 },
  images: [String], 
  unit: String,
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Product', ProductSchema);
