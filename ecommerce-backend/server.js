import express from 'express';
import cors from 'cors';
import path from 'path'; // 1. Import path
import { fileURLToPath } from 'url'; // 2. Import URL tools
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';

const app = express();
const PORT = 3000;

// 3. Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// 4. THE STATIC FILE SERVER
// This tells Express: "Serve the files inside 'backend/images' at the URL '/images'"
app.use('/images', express.static(path.join(__dirname, 'images')));

// API Routes
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});