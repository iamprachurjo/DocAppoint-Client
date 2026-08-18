"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const MyAppointments = () => {
  // 1. Get user session to extract userId
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  // 2. Setup State
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. Fetch data safely using useEffect
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!userId) return;

      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${userId}`);
        const data = await res.json();
        setAppointments(data);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [userId]);

  const handleCancel = async (id) => {
    setAppointments((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, isCancelled: true } : item,
      ),
    );

    // Cancel Appointment function
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };

  const handlePay = (id) => {
    setAppointments((prev) =>
      prev.map((item) => (item._id === id ? { ...item, isPaid: true } : item)),
    );
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600 font-medium">
        Loading your appointments...
      </div>
    );
  }

  // 6. Render UI
  return (
    <div className="w-full container mx-auto md:pt-14 pt-8 p-3 font-sans">
      {/* Page Title */}
      <p className="pb-3 font-semibold text-gray-700 border-b border-gray-200 text-lg">
        My appointments
      </p>

      {/* Appointments List */}
      <div className="divide-y divide-gray-200">
        {appointments.length === 0 ? (
          <p className="py-10 text-center text-gray-500">
            No appointments found.
          </p>
        ) : (
          appointments.map((item) => (
            <div
              key={item._id}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-5 items-start sm:items-center justify-between"
            >
              {/* Left Group: Doctor Image + Details */}
              <div className="flex gap-4 sm:gap-6 items-start">
                {/* Doctor Image Container */}
                <div className="w-35 h-36 bg-[#EAEFFF] shrink-0 rounded overflow-hidden flex items-end justify-center">
                  <Image
                    width={150}
                    height={150}
                    src={item.doctorImage}
                    alt={item.doctorName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1   text-gray-700">
                  <p className="text-gray-800 font-bold text-lg ">
                    {item.doctorName}
                  </p>
                  <p className="text-gray-500 mb-2 text-md font-medium">
                    {item.doctorSpeciality}
                  </p>

                  <p className="text-gray-900 mt-1 font-semibold sm:text-lg text-sm">
                    Address:
                  </p>
                  <p className="text-sm font-semibold text-gray-500 mb-2">
                    {item.doctorAddress}
                  </p>

                  <p className="text mt-1">
                    <span className=" font-semibold text-gray-700">
                      Date & Time:{" "}
                    </span>
                    <span className="text-gray-500 text-sm font-semibold">
                      {item.bookingDate}
                    </span>
                  </p>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex flex-col gap-2.5 justify-end text-sm w-full sm:w-48 shrink-0">
                {!item.isCancelled && !item.isPaid && (
                  <button
                    onClick={() => handlePay(item._id)}
                    className="text-gray-600 text-xs sm:text-sm text-center py-2 px-4 border border-gray-300 rounded hover:bg-[#5F6FFF] hover:border-[#5F6FFF] hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Pay Online
                  </button>
                )}

                {item.isPaid && !item.isCancelled && (
                  <button className="text-emerald-600 text-xs sm:text-sm text-center py-2 px-4 border border-emerald-300 bg-emerald-50 rounded cursor-default font-medium">
                    Paid
                  </button>
                )}

                {!item.isCancelled ? (
                  <button
                    onClick={() => handleCancel(item._id)}
                    className="text-gray-600 text-xs sm:text-sm text-center py-2 px-4 border border-gray-300 rounded hover:bg-red-600 hover:border-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                  >
                    Cancel appointment
                  </button>
                ) : (
                  <button className="text-red-500 text-xs sm:text-sm text-center py-2 px-4 border border-red-200 bg-red-50 rounded cursor-default font-medium">
                    Appointment Cancelled
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
