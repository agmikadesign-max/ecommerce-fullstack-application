import { Sequelize } from 'sequelize';

// 1. Read variables from .env
const dbName = process.env.RDS_DB_NAME;
const dbUser = process.env.RDS_USERNAME;
const dbPassword = process.env.RDS_PASSWORD;
const dbHost = process.env.RDS_HOSTNAME;
const dbPort = process.env.RDS_PORT;

// 2. Initialize Sequelize
// This is the "Manager" that handles the connection to Supabase
export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  port: dbPort,
  dialect: 'postgres', // We are using PostgreSQL
  logging: false, // Set to true if you want to see SQL queries in your terminal
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // This line is CRITICAL for Supabase connections
    }
  }
});

// Test the connection immediately when this file is loaded
sequelize.authenticate()
  .then(() => {
    console.log('✅ Connection to Supabase has been established successfully.');
  })
  .catch(err => {
    console.error('❌ Unable to connect to the database:', err);
  });