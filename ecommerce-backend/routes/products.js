import express from 'express';
import { Product } from '../models/Product.js'; // Import the Model connected to Supabase

const router = express.Router();

// GET /api/products
// Returns the list of all products from the database
router.get('/', async (req, res) => {
  try {
    // 1. Fetch data using Sequelize
    // .findAll() is the equivalent of "SELECT * FROM Products"
    const products = await Product.findAll();
    
    // 2. Return the real data
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET /api/products/:id
// Returns a single product (Useful if you build a Product Detail page later)
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;