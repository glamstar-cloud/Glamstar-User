import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ useNavigate correctly
import Email from "../../../Assets/Register/email.png";
import Lock from "../../../Assets/Register/lock.png";
import User from "../../../Assets/Register/user.png";
import Phone from "../../../Assets/Register/phone.png";

export default function Register() {
  const navigate = useNavigate(); // ✅ create navigate hook

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Basic validation
  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";

    if (!formData.password) newErrors.password = "Password is required.";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Account created successfully!");

      // ✅ Navigate to user homepage after successful signup
      navigate("/Home");
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 my-18 sm:my-13 sm:rounded sm:shadow sm:p-6 sm:border sm:border-gray-300">
      <h1 className="text-xl text-center font-bold mb-2 font-playfair">
        Create Your Glamstar Account
      </h1>
      <p className="text-gray-600 font-inter text-center mb-6">
        Enter your details and sign up for Glamstar.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* Full Name */}
        <div>
          <label className="block font-medium">
            Full Name<span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <img
              src={User}
              alt="Full name"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input
              type="text"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded pl-10 py-2 placeholder:text-sm placeholder:text-gray-500 outline-none bg-transparent"
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block font-medium">
            Email Address<span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <img
              src={Email}
              alt="Email"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input
              type="email"
              name="email"
              placeholder="johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded pl-10 py-2 placeholder:text-sm placeholder:text-gray-500 outline-none bg-transparent"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block font-medium">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <img
              src={Phone}
              alt="telephone"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input
              type="tel"
              name="phone"
              placeholder="e.g. 08012345678"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded pl-10 py-2 placeholder:text-sm placeholder:text-gray-500 outline-none bg-transparent"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

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
              className="w-full border border-gray-400 rounded pl-10 py-2 placeholder:text-sm placeholder:text-gray-500 outline-none bg-transparent"
            />
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block font-medium">
            Confirm Password<span className="text-red-500">*</span>
          </label>
          <div className="relative w-full">
            <img
              src={Lock}
              alt="Confirm Password"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded pl-10 py-2 placeholder:text-sm placeholder:text-gray-500 outline-none bg-transparent"
            />
          </div>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-red-800 font-inter font-semibold text-white py-2 rounded hover:bg-gray-800 transition cursor-pointer"
        >
          Sign Up
        </button>
      </form>


      <div className="mt-6 text-center space-y-2">
        <div className="flex justify-center gap-1 items-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link
            to="/Login"
            className="text-red-800 text-sm font-semibold font-inter hover:text-gray-800 transition"
          >
            Sign In
          </Link>
        </div>

        {/* ✅ Back to home link */}
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
