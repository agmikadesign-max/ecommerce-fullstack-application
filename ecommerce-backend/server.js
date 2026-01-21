import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from './models/index.js'; 
import { Product } from './models/Product.js'; 
import { User } from './models/User.js';
import authRouter from './routes/auth.js';

// Import Routes
import productsRouter from './routes/products.js';
import cartRouter from './routes/cart.js';

const app = express();
const PORT = 3000; // Note: Ensure your vite.config.js proxy points to this port (3000)

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());

// Serve Static Images
app.use('/images', express.static(path.join(__dirname, 'images')));

// API Routes
app.use('/api/products', productsRouter);
app.use('/api/cart', cartRouter);
app.use('/api/auth', authRouter);

// --- STARTUP FUNCTION ---
const startServer = async () => {
  try {
    // 1. Connect to Database FIRST
    await sequelize.authenticate();
    console.log('✅ Connection to Supabase established successfully.');

    // 2. Sync Models
    await sequelize.sync(); 
    console.log('✅ Models synced.');

    // 3. Start Server ONLY after DB is ready
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('❌ CRITICAL ERROR: Unable to connect to the database:', error);
    // Optional: Kill the process if DB fails, so Nodemon tries to restart
    // process.exit(1);
  }
};

// Ignite the engine
startServer();