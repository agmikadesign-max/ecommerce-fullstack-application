import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import Header from '../components/Header'; // Optional: if you want the header on login too

function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post('/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      
      // Navigate and force refresh to update Header state
      navigate('/');
      window.location.reload(); 
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 font-sans">
        
        {/* Background Blobs (Matches Homepage Hero) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[20%] w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[20%] w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-md bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-10 overflow-hidden border border-gray-100">
          
          {/* Header Text */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Welcome back.
            </h1>
            <p className="text-gray-500 font-medium">
              Log in to access your cart and orders.
            </p>
          </div>

          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            
            {error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-2xl text-sm font-bold text-center border border-red-100">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Email address"
                  required 
                  className="w-full h-[55px] px-6 bg-gray-50 text-gray-900 rounded-2xl border-2 border-transparent focus:bg-white focus:border-indigo-500 focus:outline-none transition-all font-medium placeholder-gray-400"
                  onChange={handleChange}
                />
              </div>

              <div>
                <input 
                  name="password" 
                  type="password" 
                  placeholder="Password"
                  required 
                  className="w-full h-[55px] px-6 bg-gray-50 text-gray-900 rounded-2xl border-2 border-transparent focus:bg-white focus:border-indigo-500 focus:outline-none transition-all font-medium placeholder-gray-400"
                  onChange={handleChange}
                />
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white h-[55px] rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200">
              Sign In
            </button>

            <div className="text-center mt-6">
              <p className="text-gray-500 font-medium">
                Don't have an account?{' '}
                <Link to="/signup" className="text-indigo-600 font-bold hover:underline">
                  Join Store.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;