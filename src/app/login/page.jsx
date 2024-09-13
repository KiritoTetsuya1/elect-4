"use client"; // Add this line for Next.js apps

import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-orange-400 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <img src="logo123.png" alt="ABC Logo" className="h-12" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <p className="text-center mb-6">Welcome to Learning ABC's</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-blue-500">Forgot Password?</a>
        </div>

        <div className="text-center mt-2">
          Don’t have an account? <a href="#" className="text-blue-500">Register Now!</a>
        </div>
      </div>
    </div>
  );
}
