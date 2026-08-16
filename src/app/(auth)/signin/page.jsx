"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Replace with your authentication API call
    const { data, error } = await authClient.signIn.email({
      email: formData.email,
      password: formData.password,
    });

    if (data) {
      toast.success("Logged in successfully!");
      redirect("/");
    }
  };

  const handleGoogleSignIn = () => {
    toast.info("Redirecting to Google Authentication...");
    // Add Google OAuth logic here (e.g., NextAuth signIn('google'))
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 font-sans">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-gray-100">
        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-800">Login</h2>
        <p className="text-sm text-gray-500 mt-1 mb-6">
          Please log in to book appointment
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5F6FFF] text-sm text-gray-800 transition-colors"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5F6FFF] text-sm text-gray-800 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#5F6FFF] text-white py-3 rounded-lg text-sm font-medium hover:bg-[#5060f5] transition duration-200 cursor-pointer shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-400 font-medium">Or</span>
          </div>
        </div>

        {/* Google Sign-in Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200 cursor-pointer"
        >
          <FcGoogle className="text-xl shrink-0" />
          <span>Sign in with Google</span>
        </button>

        {/* Footer Navigation */}
        <p className="mt-6 text-xs sm:text-sm text-gray-600 text-center">
          Create a new account?{" "}
          <Link
            href="/signup"
            className="text-[#5F6FFF] underline font-medium hover:text-blue-600"
          >
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
}
