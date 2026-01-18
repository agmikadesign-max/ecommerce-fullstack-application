import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; // Use 'react-router-dom' if you switched, or 'react-router' as per your setup
import axios from 'axios';

function Header() {
  // 1. State for the cart count
  const [cartQuantity, setCartQuantity] = useState(0);

  // 2. Fetch the cart data when the header loads
  useEffect(() => {
    const fetchCartQuantity = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        
        // Calculate total items (sum of all quantities)
        // Example: 2 socks + 1 basketball = 3 items total
        const total = response.data.reduce((sum, item) => sum + item.quantity, 0);
        
        setCartQuantity(total);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };

    fetchCartQuantity();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] bg-white/90 backdrop-blur-md shadow-sm flex items-center justify-between px-6 z-50 transition-all">
      
      {/* LEFT: Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
           <span className="text-2xl font-black tracking-tighter text-indigo-600 group-hover:scale-105 transition">
             STORE.
           </span>
        </Link>
      </div>

      {/* MIDDLE: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-[600px] mx-8">
        <div className="relative w-full group">
          <input 
            type="text" 
            placeholder="Search for anything..." 
            className="w-full h-[50px] pl-6 pr-14 bg-gray-100 text-gray-800 rounded-full border-2 border-transparent focus:bg-white focus:border-indigo-500 focus:outline-none transition-all placeholder-gray-400 font-medium"
          />
          <button className="absolute right-2 top-1.5 h-[38px] w-[38px] bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center space-x-6">
        
        <Link to="/orders" className="hidden sm:block text-gray-500 hover:text-indigo-600 font-bold text-sm transition">
          Orders
        </Link>

        {/* Cart Button */}
        <Link to="/checkout" className="flex items-center group relative cursor-pointer">
          <div className="p-3 rounded-full bg-gray-50 group-hover:bg-indigo-50 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          
          {/* 3. DYNAMIC QUANTITY BADGE */}
          {cartQuantity > 0 && (
            <span className="absolute top-0 right-0 h-5 w-5 bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white shadow-sm transform group-hover:scale-110 transition">
              {cartQuantity}
            </span>
          )}
        </Link>
        
      </div>
    </header>
  );
}

export default Header;