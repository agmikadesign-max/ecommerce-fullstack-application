import React from 'react';
import Header from '../components/Header.jsx';
import { products } from '../data/products.js';

function HomePage() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen pb-20">
      <Header />

      {/* CHANGE 4: More top padding for the floating header */}
      <main className="pt-[120px] max-w-[1600px] mx-auto px-6">
        
        {/* Section Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Trending Now
        </h1>

        {/* Grid: Increased gap (gap-8) for an airy feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {products.map((product) => (
            <div key={product.id} className="group bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden border border-gray-100">
              
              {/* Image Container with Hover Zoom */}
              <div className="h-[220px] flex items-center justify-center mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-indigo-50/30 transition-colors duration-300 relative">
                <img 
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out" 
                  src={product.image} 
                  alt={product.name} 
                />
              </div>

              {/* Content */}
              <div>
                {/* Product Name: Bolder, cleaner */}
                <h3 className="line-clamp-2 text-gray-900 font-bold text-lg leading-tight mb-2 min-h-[50px]">
                  {product.name}
                </h3>

                {/* Rating: Clean Stars */}
                <div className="flex items-center mb-4 space-x-2">
                  <div className="flex text-yellow-400 text-sm">
                     {/* Rendering simple stars based on rating */}
                     {'★'.repeat(Math.floor(product.rating.stars))}
                     <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating.stars))}</span>
                  </div>
                  <span className="text-gray-400 text-xs font-semibold">
                    ({product.rating.count} reviews)
                  </span>
                </div>

                {/* Price & Action Row */}
                <div className="flex items-center justify-between mt-2">
                  <div className="font-black text-2xl text-gray-900">
                    ${(product.priceCents / 100).toFixed(2)}
                  </div>
                  
                  {/* CHANGE 5: Action Button - Pill shaped, Icon only on desktop or compact */}
                  <button className="bg-gray-900 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:scale-110 transition-all shadow-lg active:scale-95">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      </main>
    </div>
  );
}

export default HomePage;