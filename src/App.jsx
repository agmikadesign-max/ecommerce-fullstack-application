import React from 'react';
import Header from './components/Header.jsx';
// IMPORT the data from your new file
import { products } from './data/products.js';

function App() {
  return (
    <div className="font-roboto bg-gray-100 min-h-screen pb-10">
      <Header />

      <main className="pt-[80px] max-w-[2000px] mx-auto px-4">
        
        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          
          {/* Map through the imported products */}
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 border border-gray-200 rounded-lg flex flex-col justify-between hover:shadow-lg transition">
              
              <div className="h-[180px] flex items-center justify-center mb-4">
                <img 
                  className="max-h-full max-w-full object-contain" 
                  src={product.image} 
                  alt={product.name} 
                />
              </div>

              <div>
                <h3 className="line-clamp-2 h-[45px] text-gray-800 font-medium mb-2">
                  {product.name}
                </h3>

                <div className="flex items-center mb-2">
                  {/* Rating Logic: 4.5 -> rating-45.png */}
                  <img 
                    className="h-[20px] mr-2" 
                    src={`/images/ratings/rating-${product.rating.stars * 10}.png`} 
                    alt="rating" 
                  />
                  <span className="text-[#007185] text-sm cursor-pointer hover:underline hover:text-[#c7511f]">
                    {product.rating.count}
                  </span>
                </div>

                {/* Price Logic: Convert cents to dollars */}
                <div className="font-bold text-lg mb-4">
                  ${(product.priceCents / 100).toFixed(2)}
                </div>
              </div>

              <div className="space-y-3">
                <select className="bg-[#f0f2f2] border border-[#d5d9d9] rounded-md px-2 py-1 shadow-sm text-sm focus:ring-2 focus:ring-[#e77600] outline-none w-full">
                  {[...Array(10).keys()].map(num => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                  ))}
                </select>

                <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] rounded-full py-1.5 text-sm text-black shadow-sm cursor-pointer transition">
                  Add to Cart
                </button>
              </div>

            </div>
          ))}

        </div>
      </main>
    </div>
  );
}

export default App;