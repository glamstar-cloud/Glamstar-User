import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <>
    <div className="max-w-md mx-auto px-4 my-18">
      <h1 className="text-xl text-center font-bold mb-2 font-playfair">Forgot Password</h1>
      <p className="text-gray-600 font-inter text-center mb-6">
        Enter your email, and we'll send you a link to reset your password.
      </p>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border border-gray-400 rounded px-3 py-2 mb-4 outline-none"
      />
      <button className="w-full bg-red-800 text-white py-2 rounded hover:bg-gray-800 transition">
        Send Reset Link
      </button>

      <Link to="/" className="block text-sm text-center mt-6 text-gray-800 hover:text-red-800 font-medium">
        ← Back to Home
      </Link>
    </div>
    </>
  );
}
