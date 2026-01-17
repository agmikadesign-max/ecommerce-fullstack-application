import React from 'react';
import Header from './components/Header.jsx';

function App() {
  return (
    // 1. 'bg-red-500' turns the background RED. 
    // If the background is white, Tailwind is disconnected.
    <div className="min-h-screen bg-red-100 p-10">
      
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind is Working!
        </h1>
        <p className="text-gray-600">
          If you see a card with a shadow and blue text, you are done.
        </p>
        
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Click Me
        </button>
      </div>
      
    </div>
  );
}

export default App;