import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js'; // Ensure this file exists in routes/

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect the routes we have actually built
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});