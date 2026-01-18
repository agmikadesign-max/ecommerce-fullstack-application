import React from 'react';
import Header from '../components/Header.jsx';
import { products } from '../data/products.js';

function HomePage() {
  return (
    <div className="font-sans bg-gray-50 min-h-screen pb-20">
      <Header />

      <main className="pt-[120px] max-w-[1600px] mx-auto px-6">
        
        {/* --- NEW HERO SECTION START --- */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-16 mb-12 overflow-hidden shadow-2xl text-white">
          
          {/* Background Decoration (Abstract Blobs) */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-bold tracking-wide uppercase">New Collection 2025</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight mb-6">
              Upgrade your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">
                everyday lifestyle.
              </span>
            </h1>

            <p className="text-lg text-indigo-100 mb-8 leading-relaxed max-w-lg font-medium">
              Discover the latest trends in tech, fashion, and home essentials. 
              Quality you can trust, prices you'll love.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 hover:scale-105 transition-all shadow-lg active:scale-95">
                Shop Now
              </button>
              <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white/10 transition-all active:scale-95">
                View Deals
              </button>
            </div>
          </div>
        </div>
        {/* --- HERO SECTION END --- */}


        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
           <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
             Trending Now
           </h1>
           {/* Optional 'View All' link */}
           <a href="#" className="text-indigo-600 font-bold text-sm hover:underline">View all items &rarr;</a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {products.map((product) => (
            <div key={product.id} className="group bg-white p-5 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between relative overflow-hidden border border-gray-100">
              
              <div className="h-[220px] flex items-center justify-center mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-indigo-50/30 transition-colors duration-300 relative">
                <img 
                  className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 ease-out" 
                  src={product.image} 
                  alt={product.name} 
                />
              </div>

              <div>
                <h3 className="line-clamp-2 text-gray-900 font-bold text-lg leading-tight mb-2 min-h-[50px]">
                  {product.name}
                </h3>

                <div className="flex items-center mb-4 space-x-2">
                  <div className="flex text-yellow-400 text-sm">
                     {'★'.repeat(Math.floor(product.rating.stars))}
                     <span className="text-gray-300">{'★'.repeat(5 - Math.floor(product.rating.stars))}</span>
                  </div>
                  <span className="text-gray-400 text-xs font-semibold">
                    ({product.rating.count} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="font-black text-2xl text-gray-900">
                    ${(product.priceCents / 100).toFixed(2)}
                  </div>
                  
                  <button className="bg-gray-900 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:scale-110 transition-all shadow-lg active:scale-95 cursor-pointer">
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