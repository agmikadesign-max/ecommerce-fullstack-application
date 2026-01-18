import React from 'react';
import Header from '../components/Header.jsx';

function TrackingPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Header />

      <main className="pt-[120px] max-w-[800px] mx-auto px-6 pb-20">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-8">
          <a href="/orders" className="text-indigo-600 hover:text-indigo-800 font-bold flex items-center gap-2 group transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            View all orders
          </a>
        </div>

        {/* MAIN TRACKING CARD */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
          
          {/* Header Status Strip */}
          <div className="bg-indigo-600 px-8 py-6 text-white flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight mb-1">
                Arriving on Monday, June 13
              </h1>
              <p className="text-indigo-100 font-medium">Order #27cba69d</p>
            </div>
            {/* Truck Icon Decoration */}
            <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
               </svg>
            </div>
          </div>

          <div className="p-8">
            
            {/* Product Details Section */}
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              <div className="bg-gray-50 p-6 rounded-2xl flex items-center justify-center shrink-0">
                <img 
                  className="w-32 h-32 object-contain mix-blend-multiply" 
                  src="/images/products/athletic-cotton-socks-6-pairs.jpg" 
                  alt="Socks" 
                />
              </div>
              
              <div className="py-2">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </h2>
                <div className="text-gray-500 font-medium mb-1">
                  Quantity: <span className="text-gray-900 font-bold">1</span>
                </div>
                <div className="text-gray-500 font-medium">
                  Sold by: <span className="text-gray-900 font-bold">Store. Official</span>
                </div>
              </div>
            </div>

            {/* PROGRESS BAR SECTION */}
            <div className="relative">
              <div className="mb-4 flex justify-between text-sm font-bold text-gray-400">
                <span className="text-indigo-600">Preparing</span>
                <span className="text-indigo-600">Shipped</span>
                <span>Delivered</span>
              </div>

              {/* The Bar Track */}
              <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
                {/* The Filled Bar (50% width for 'Shipped') */}
                <div className="h-full bg-indigo-600 w-1/2 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] relative">
                    {/* Optional: Shine effect on the bar */}
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default TrackingPage;