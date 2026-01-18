import express from 'express';
import cors from 'cors';
import productsRouter from './routes/products.js'; // 1. Import the new file

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// 2. Use the router
// This tells Express: "If a request starts with /products, send it to the productsRouter"
app.use('/products', productsRouter); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});