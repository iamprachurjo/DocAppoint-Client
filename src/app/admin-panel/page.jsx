"use client";

import { useState } from "react";

export default function DoctorForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const doctorData = Object.fromEntries(formData.entries());

    // Convert fee to number
    doctorData.fee = Number(doctorData.fee);
 
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setMessage("Doctor added successfully!");
      e.target.reset();
    } catch (error) {
      setMessage(error.message || "Failed to save doctor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#5F6FFF] text-white px-6 py-5">
          <h1 className="text-2xl md:text-3xl font-bold">
            Doctor Information Form
          </h1>
          <p className="text-sm md:text-base mt-1 opacity-90">
            Add doctor details below
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {/* Doctor Name */}
          <div>
            <label
              htmlFor="doctor"
              className="block mb-2 font-semibold text-gray-700"
            >
              Doctor Name
            </label>
            <input
              id="doctor"
              type="text"
              name="doctor"
              required
              placeholder="Enter doctor name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Specialty */}
          <div>
            <label
              htmlFor="speciality"
              className="block mb-2 font-semibold text-gray-700"
            >
              Specialty
            </label>
            <input
              id="speciality"
              type="text"
              name="speciality"
              required
              placeholder="Enter specialty"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Experience */}
          <div>
            <label
              htmlFor="experience"
              className="block mb-2 font-semibold text-gray-700"
            >
              Experience
            </label>
            <input
              id="experience"
              type="text"
              name="experience"
              required
              placeholder="e.g. 10 years"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Fee */}
          <div>
            <label
              htmlFor="fee"
              className="block mb-2 font-semibold text-gray-700"
            >
              Consultation Fee ($)
            </label>
            <input
              id="fee"
              type="number"
              name="fee"
              required
              min="0"
              placeholder="Enter consultation fee"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Hospital */}
          <div>
            <label
              htmlFor="hospital"
              className="block mb-2 font-semibold text-gray-700"
            >
              Hospital Name
            </label>
            <input
              id="hospital"
              type="text"
              name="hospital"
              required
              placeholder="Enter hospital name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block mb-2 font-semibold text-gray-700"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              name="location"
              required
              placeholder="Enter location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Image Link */}
          <div className="md:col-span-2">
            <label
              htmlFor="image"
              className="block mb-2 font-semibold text-gray-700"
            >
              Doctor Image Link
            </label>
            <input
              id="image"
              type="url"
              name="image"
              required
              placeholder="https://example.com/image.jpg"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Availability */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700">
              Availability
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="time1"
                placeholder="Morning: 09:00 AM - 12:00 PM"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
              />
              <input
                type="text"
                name="time2"
                placeholder="Afternoon: 02:00 PM - 05:00 PM"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
              />
              <input
                type="text"
                name="time3"
                placeholder="Evening: 06:00 PM - 09:00 PM"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
              />
              <input
                type="text"
                name="time4"
                placeholder="Night: 10:00 PM - 12:00 AM"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
              />
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 font-semibold text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              required
              placeholder="Write doctor description..."
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none resize-none focus:border-[#5F6FFF] focus:ring-2 focus:ring-[#5F6FFF]/30 transition"
            />
          </div>

          {/* Message */}
          {message && (
            <div className="md:col-span-2">
              <p
                className={`text-sm font-medium ${
                  message.includes("successfully")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {message}
              </p>
            </div>
          )}

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto bg-[#5F6FFF] hover:cursor-pointer hover:bg-[#5060f5] disabled:opacity-60 text-white font-semibold px-8 py-3 rounded-xl transition duration-300"
            >
              {loading ? "Saving..." : "Save Doctor Info"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
