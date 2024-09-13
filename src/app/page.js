"use client"; // Add this line

import { useState } from 'react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthDate: { month: '', date: '', year: '' },
    gender: ''
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
    // Add form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-orange-400 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-sm">
        <div className="flex justify-center mb-4">
          {/* Use the logo from the public directory */}
          <img src="logo123.png" alt="ABC Logo" className="h-12" />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Sign up</h1>
        <p className="text-center mb-6">Just a few quick things to get started</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
          
          <div className="flex space-x-2">
            <input
              type="text"
              name="month"
              placeholder="Month"
              value={formData.birthDate.month}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  birthDate: { ...prevData.birthDate, month: e.target.value }
                }))
              }
              className="w-1/3 px-4 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="date"
              placeholder="Date"
              value={formData.birthDate.date}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  birthDate: { ...prevData.birthDate, date: e.target.value }
                }))
              }
              className="w-1/3 px-4 py-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="year"
              placeholder="Year"
              value={formData.birthDate.year}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  birthDate: { ...prevData.birthDate, year: e.target.value }
                }))
              }
              className="w-1/3 px-4 py-2 border rounded-md"
              required
            />
          </div>

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition"
          >
            Create Account
          </button>
        </form>

        <div className="text-center mt-4">
          Already have an account? <a href="login" className="text-blue-500">Log in</a>
        </div>
      </div>
    </div>
  );
}
