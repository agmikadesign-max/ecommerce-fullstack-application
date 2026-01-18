import express from 'express';

const router = express.Router();

// --- SIMULATED CART DATA ---
// We are "mocking" a database here. 
// These IDs match the products in your products.js file.
const cart = [
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6", // The Socks
    quantity: 2,
    image: "/images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    priceCents: 1090,
    deliveryOptionId: '1'
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d", // The Basketball
    quantity: 2,
    image: "/images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    priceCents: 2095,
    deliveryOptionId: '2'
  }
];

// --- ROUTES ---
router.get('/', (req, res) => {
  res.json(cart);
});

export default router;