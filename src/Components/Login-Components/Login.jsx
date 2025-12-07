import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Email from '../../../Assets/Register/email.png';
import Lock from '../../../Assets/Register/lock.png';

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target; // ✅ Fixed this
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Enter a valid email address.';
    if (!formData.password) newErrors.password = 'Password is required.';
    else if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      navigate("/home"); // ✅ Navigate to user homepage
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 my-18 sm:rounded sm:shadow sm:p-6 sm:border sm:border-gray-300">
      <h1 className="text-xl text-center font-bold mb-2 font-playfair">
        Welcome Back
      </h1>
      <p className="text-gray-600 font-inter text-center mb-6">
        Login to access your personalized beauty appointments
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Email */}
        <div>
          <label className="block font-medium">
            Email<span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <img
              src={Email}
              alt="email icon"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@example.com"
              className="w-full border border-gray-400 rounded pl-10 py-2 placeholder:text-sm placeholder:text-gray-500 outline-none bg-transparent"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        {/* Password */}
<div>
  <label className="block font-medium">
    Password<span className="text-red-500">*</span>
  </label>
  <div className="relative w-full">
    <img
      src={Lock}
      alt="Password"
      className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
    />
    <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Enter your password"
      className="w-full border border-gray-400 rounded pl-10 py-2 placeholder:text-sm placeholder:text-gray-500 outline-none bg-transparent"
    />
  </div>

  {/* error message (left) */}
  {errors.password && (
    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
  )}

  {/* forgot link (always right) */}
  <div className="flex justify-end mt-1">
    <Link
      to="/forgot-password"
      className="text-sm text-red-800 font-inter hover:text-gray-800 transition"
    >
      Forgot Password?
    </Link>
  </div>
</div>


        {/* Sign In Button */}
        <button
          type="submit"
          className="w-full bg-red-800 font-inter font-semibold text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
        >
          Sign In
        </button>
      </form>

      {/* Bottom Links */}
      <div className="mt-6 text-center space-y-2">
        <div className="flex justify-center gap-1 items-center">
          <p className="text-sm text-gray-600">Don't have an account?</p>
          <Link
            to="/register"
            className="text-red-800 text-sm font-semibold font-inter hover:text-gray-800 transition"
          >
            Sign Up
          </Link>
        </div>

        <Link
          to="/"
          className="block text-sm text-gray-800 hover:text-red-800 font-medium"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
            