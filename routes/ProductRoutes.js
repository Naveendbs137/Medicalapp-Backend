const express = require('express');
const ProductRouter = express.Router();
const Product = require('../models/Product');

// ➕ Add new product
ProductRouter.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, message: 'Product created', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error creating product' });
  }
});

// 📋 Get all products
ProductRouter.get('/', async (req, res) => {
    console.log("hited")
  try {
    const products = await Product.find({}).populate('category');
    console.log(products)
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
});

 // 📦 Get single product by ID
ProductRouter.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('category');
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching product' });
  }
});

module.exports = ProductRouter;
