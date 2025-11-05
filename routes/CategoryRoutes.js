const express = require('express');
const CategoryRouter = express.Router();
const Category = require('../models/Category');

// ➕ Add category
CategoryRouter.post('/', async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json({ success: true, message: 'Category created', category });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error creating category' });
  }
});

// 📋 Get all categories
CategoryRouter.get('/', async (req, res) => {
  try {
    const categories = await Category.find().sort({ order: 1 });
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories' });
  }
});

module.exports = CategoryRouter;
