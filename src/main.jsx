import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Import your main App component

import './index.css' //Tailwind integration

// Find the element with id 'root' in index.html
const container = document.getElementById('root');

// Create a root
const root = createRoot(container);

// Render the App component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
