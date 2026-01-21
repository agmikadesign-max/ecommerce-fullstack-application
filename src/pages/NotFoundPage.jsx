import React from 'react';
import { Link } from 'react-router';

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 text-center">
      
      {/* Background decoration (reuse blobs for consistency) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[30%] right-[20%] w-72 h-72 bg-purple-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-lg">
        {/* Big Gradient 404 */}
        <h1 className="text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200 select-none">
          404
        </h1>
        
        <h2 className="text-3xl font-black text-gray-900 -mt-8 mb-4 tracking-tight">
          Page not found.
        </h2>
        
        <p className="text-gray-500 mb-8 font-medium text-lg leading-relaxed">
          Sorry, we couldn’t find the page you’re looking for. It might have been removed or doesn't exist.
        </p>

        {/* Home Button */}
        <Link 
          to="/" 
          className="
            inline-flex items-center justify-center
            bg-gray-900 text-white 
            px-8 py-4 
            rounded-full 
            font-bold 
            text-sm 
            shadow-lg 
            hover:bg-indigo-600 
            hover:scale-105 
            hover:shadow-indigo-500/25 
            active:scale-95 
            transition-all duration-300
          "
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;