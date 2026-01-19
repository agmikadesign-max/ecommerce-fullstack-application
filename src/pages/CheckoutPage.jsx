import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CheckoutPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('/api/cart');
        setCartItems(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  // --- NEW CALCULATION ---
  // 1. Total Count (e.g., 3 items total)
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  // 2. Unique Types (e.g., 2 different products)
  const uniqueTypes = cartItems.length; 

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* HEADER */}
      <div className="fixed top-0 left-0 right-0 h-[80px] bg-white/90 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 z-50">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-black tracking-tighter text-indigo-600 cursor-pointer">
             STORE.
          </a>
        </div>

        {/* --- UPDATED TITLE --- */}
        <div className="text-xl font-bold text-gray-800">
          Checkout (
          <span className="text-indigo-600">
            {uniqueTypes} types, {totalQuantity} items total
          </span>
          )
        </div>

        <div className="text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>
      </div>

      <main className="pt-[110px] max-w-[1200px] mx-auto px-6 pb-20">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Review your order</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: Order Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.productId} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-green-700 mb-6">
                  Delivery date: Tuesday, June 21
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-6">
                  <img className="w-full h-auto object-contain rounded-lg mix-blend-multiply" src={item.image} alt={item.name} />

                  <div>
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <div className="text-red-700 font-bold text-lg mb-4">
                      ${(item.priceCents / 100).toFixed(2)}
                    </div>
                    
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-gray-600">
                        Quantity: <span className="font-bold text-gray-900">{item.quantity}</span>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium cursor-pointer">Update</button>
                      <button className="text-red-500 hover:text-red-700 hover:underline font-medium cursor-pointer">Delete</button>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                   <div className="font-bold mb-3 text-gray-800">Choose a delivery option:</div>
                   <div className="space-y-3">
                      <label className="flex items-center p-3 rounded-lg hover:bg-indigo-50 cursor-pointer transition border border-transparent hover:border-indigo-100">
                        <input type="radio" name={`delivery-option-${item.productId}`} className="h-5 w-5 text-indigo-600 focus:ring-indigo-500" defaultChecked />
                        <div className="ml-3">
                          <span className="block font-bold text-green-700">Tuesday, June 21</span>
                          <span className="block text-gray-500 text-sm">FREE Shipping</span>
                        </div>
                      </label>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN: Payment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 sticky top-[110px]">
              <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-4">Order Summary</h2>

              <div className="space-y-3 text-gray-600">
                <div className="flex justify-between">
                  {/* Updated Summary Text here too */}
                  <span>Items ({totalQuantity}):</span>
                  <span className="font-medium text-gray-900">
                    ${(cartItems.reduce((acc, item) => acc + item.priceCents * item.quantity, 0) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping & handling:</span>
                  <span className="font-medium text-gray-900">$4.99</span>
                </div>
                <div className="flex justify-between border-b pb-4">
                  <span>Estimated tax (10%):</span>
                  <span className="font-medium text-gray-900">$4.77</span>
                </div>
                <div className="flex justify-between text-xl font-black text-red-700 pt-2">
                  <span>Order total:</span>
                  <span>$52.51</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-indigo-600 text-white font-bold py-4 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-[1.02] active:scale-95 transition-all">
                Place your order
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default CheckoutPage;