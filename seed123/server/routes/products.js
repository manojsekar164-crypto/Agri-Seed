import express from 'express';
import { getDatabase } from '../config/database.js';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const productsCollection = db.collection('products');
    const products = await productsCollection.find({}).toArray();
    res.json(products);
  } catch (error) {
    console.error('Get products error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const db = getDatabase();
    const productsCollection = db.collection('products');
    const { ObjectId } = await import('mongodb');
    
    const product = await productsCollection.findOne({ 
      $or: [
        { _id: new ObjectId(req.params.id) },
        { id: req.params.id }
      ]
    });
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json(product);
  } catch (error) {
    console.error('Get product error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get products by category
router.get('/category/:category', async (req, res) => {
  try {
    const db = getDatabase();
    const productsCollection = db.collection('products');
    const products = await productsCollection.find({ 
      category: req.params.category 
    }).toArray();
    res.json(products);
  } catch (error) {
    console.error('Get products by category error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create product (admin)
router.post('/', async (req, res) => {
  try {
    const { name, category, price, image, benefits, description } = req.body;

    if (!name || !category || !price) {
      return res.status(400).json({ error: 'Name, category, and price are required' });
    }

    const db = getDatabase();
    const productsCollection = db.collection('products');

    const product = {
      name,
      category,
      price: parseFloat(price),
      image: image || '',
      benefits: benefits || '',
      description: description || '',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await productsCollection.insertOne(product);
    res.status(201).json({ ...product, _id: result.insertedId });
  } catch (error) {
    console.error('Create product error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

