import express from 'express';
import { getDatabase } from '../config/database.js';

const router = express.Router();

// Create order
router.post('/', async (req, res) => {
  try {
    const { userId, items, totalAmount, paymentId, address, phone } = req.body;

    if (!items || items.length === 0 || !totalAmount) {
      return res.status(400).json({ error: 'Items and total amount are required' });
    }

    const db = getDatabase();
    const ordersCollection = db.collection('orders');

    const order = {
      userId: userId || null,
      items,
      totalAmount: parseFloat(totalAmount),
      paymentId: paymentId || null,
      address: address || '',
      phone: phone || '',
      status: 'confirmed',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await ordersCollection.insertOne(order);
    res.status(201).json({ ...order, _id: result.insertedId });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all orders
router.get('/', async (req, res) => {
  try {
    const db = getDatabase();
    const ordersCollection = db.collection('orders');
    const orders = await ordersCollection.find({}).sort({ createdAt: -1 }).toArray();
    res.json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get orders by user
router.get('/user/:userId', async (req, res) => {
  try {
    const db = getDatabase();
    const ordersCollection = db.collection('orders');
    const orders = await ordersCollection.find({ 
      userId: req.params.userId 
    }).sort({ createdAt: -1 }).toArray();
    res.json(orders);
  } catch (error) {
    console.error('Get user orders error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

