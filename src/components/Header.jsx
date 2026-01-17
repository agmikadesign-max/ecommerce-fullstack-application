import React from 'react';

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] bg-[#084f2d] flex items-center justify-between px-4 z-50 text-white font-roboto">
      
      {/* LEFT SECTION: Logo */}
      <div className="flex items-center">
        <a href="#" className="border border-transparent hover:border-white rounded-sm p-1 cursor-pointer">
           <img className="h-[35px] object-contain" src="/images/logo-white.png" alt="Amazon Logo" />
        </a>
      </div>

      {/* MIDDLE SECTION: Search Bar */}
      <div className="hidden md:flex flex-1 max-w-[850px] mx-4">
        <input 
          type="text" 
          placeholder="Search" 
          className="flex-1 h-[40px] px-4 rounded-l-md border-none focus:outline-none focus:ring-2 focus:ring-[#e77600] text-black"
        />
        <button className="bg-[#cd9042] h-[40px] w-[45px] rounded-r-md flex items-center justify-center hover:bg-[#b5803a] cursor-pointer">
          <img className="h-[20px]" src="/images/icons/search-icon.png" alt="Search" />
        </button>
      </div>

      {/* RIGHT SECTION: Links */}
      <div className="flex items-center space-x-4">
        
        <a href="#" className="border border-transparent hover:border-white rounded-sm p-2 cursor-pointer">
          <span className="block text-xs leading-none">Returns</span>
          <span className="block text-sm font-bold leading-none">& Orders</span>
        </a>

        {/* --- CHANGED: items-end -> items-center --- */}
        <a href="#" className="flex items-center border border-transparent hover:border-white rounded-sm p-2 cursor-pointer text-white">
          
          <div className="relative">
            <img className="h-[30px] w-[30px] object-contain" src="/images/icons/cart-icon.png" alt="Cart" />
            
            <div className="absolute -top-1 -right-2 bg-[#f08804] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center border border-[#084f2d]">
              3
            </div>
          </div>

          {/* --- REMOVED: translate-y-1 (no longer needed since we are centering) --- */}
          <span className="font-bold text-sm ml-2">Cart</span>
        </a>
        
      </div>
    </header>
  );
}

export default Header;