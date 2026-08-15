"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    imageUrl: "",
    password: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your signup logic/API call here

    const { data, error } = await authClient.signUp.email({
      email: formData.email,
      password: formData.password,
      name: formData.fullName,
      image: formData.imageUrl,
      
    });
    if (data) {
      redirect("/signin");
    }
    console.log(data, error);
  };

  const handleGoogleSignUp = () => {
    console.log("Google Sign-up clicked");
    // Add Google Auth logic here (e.g., NextAuth signIn('google'))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl p-6 sm:p-10 shadow-md border border-gray-100">
        {/* Title & Subtitle */}
        <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
        <p className="text-sm text-gray-500 mt-1 mb-6">
          Please sign up to book appointment
        </p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5F6FFF] text-sm text-gray-800 transition-colors"
            />
          </div>

          {/* Email */}
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

          {/* Image URL (Added as requested) */}
          <div>
            <label className="block text-sm text-gray-700 mb-1 font-medium">
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/avatar.jpg"
              className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5F6FFF] text-sm text-gray-800 transition-colors"
            />
          </div>

          {/* Password */}
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

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full mt-2 bg-[#5F6FFF] text-white py-3 rounded-lg text-sm font-medium hover:bg-blue-600 transition duration-200 cursor-pointer shadow-sm"
          >
            Create account
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

        {/* Google Sign-up Button */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition duration-200 cursor-pointer"
        >
          <FcGoogle className="text-xl shrink-0" />
          <span>Sign up with Google</span>
        </button>

        {/* Footer Link */}
        <p className="mt-6 text-xs sm:text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="text-[#5F6FFF] underline font-medium hover:text-blue-600"
          >
            Signin here
          </Link>
        </p>
      </div>
    </div>
  );
}
