import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import LoginButton from "./LoginButton";
import UserPill from "./UserPill";

function Header() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Fetch Cart
    const fetchCartQuantity = async () => {
      try {
        const response = await axios.get("/api/cart");
        const total = response.data.reduce(
          (sum, item) => sum + item.quantity,
          0,
        );
        setCartQuantity(total);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };
    fetchCartQuantity();

    // 2. Check Login Status
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
      navigate("/");
      window.location.reload();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[90px] bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-sm flex items-center justify-between px-6 z-50 transition-all">
      {/* LEFT: Logo */}
      <div className="flex items-center">
        <Link to="/" className="group">
          <span className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:opacity-80 transition">
            STORE.
          </span>
        </Link>
      </div>

      {/* MIDDLE: Search Bar (Pill Shape) */}
      <div className="hidden md:flex flex-1 max-w-[500px] mx-8">
        <div className="relative w-full group">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full h-[50px] pl-6 pr-14 bg-gray-100 text-gray-700 rounded-full border-2 border-transparent focus:bg-white focus:border-indigo-500 focus:outline-none focus:shadow-lg transition-all placeholder-gray-400 font-bold text-sm"
          />
          <button className="absolute right-2 top-1.5 h-[38px] w-[38px] bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 hover:shadow-lg active:scale-95 transition text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* RIGHT: Icons & User */}
      <div className="flex items-center gap-6">
        {user && (
          <Link
            to="/orders"
            className="hidden sm:block text-gray-400 hover:text-indigo-600 font-bold text-sm transition tracking-tight"
          >
            Orders
          </Link>
        )}

        {/* Cart Button */}
        <Link to="/checkout" className="relative group p-2">
          <div className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700 group-hover:text-indigo-600 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          {cartQuantity > 0 && (
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white shadow-md animate-bounce">
              {cartQuantity}
            </span>
          )}
        </Link>

        {/* --- AUTH SECTION --- */}
        {user ? (
          <UserPill user={user} onLogout={handleLogout} />
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
}

export default Header;
