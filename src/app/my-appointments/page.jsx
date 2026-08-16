'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function MyAppointments() {
  // Sample appointments state
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: 'Dr. Richard James',
      speciality: 'General physician',
      image: 'https://raw.githubusercontent.com/avinashdm/gs-images/main/prescripto/doc1.png',
      addressLine1: '24 main street',
      addressLine2: '10 clause road',
      dateTime: '16 Sep 2026 | 04:30 PM',
      isPaid: false,
      isCancelled: false,
    },
  ]);

  const handleCancel = (id) => {
    setAppointments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isCancelled: true } : item
      )
    );
  };

  const handlePay = (id) => {
    setAppointments((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isPaid: true } : item))
    );
  };

  return (
    <div className="w-full container mx-auto md:pt-10 p-4 font-sans">
      {/* Page Title */}
      <p className="pb-3 font-semibold text-gray-700 border-b border-gray-200 text-lg">
        My appointments
      </p>

      {/* Appointments List */}
      <div className="divide-y divide-gray-200">
        {appointments.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-5 items-start sm:items-center justify-between"
          >
            {/* Left Group: Doctor Image + Details */}
            <div className="flex gap-4 sm:gap-6 items-start">
              {/* Doctor Image Container */}
              <div className="w-32 h-36 bg-[#EAEFFF] shrink-0 rounded-lg overflow-hidden flex items-end justify-center">
                <Image
                width={150} height={150}
                  src={item.image}
                  alt={item.doctor}
                  className="w-full h-full object-cover "
                />
              </div>

              {/* Details */}
              <div className="flex-1 text-sm text-gray-700">
                <p className="text-gray-800 font-semibold text-base">
                  {item.doctor}
                </p>
                <p className="text-gray-500 mb-2">{item.speciality}</p>

                <p className="text-gray-900 font-medium mt-1 text-xs sm:text-sm">
                  Address:
                </p>
                <p className="text-xs text-gray-500">{item.addressLine1}</p>
                <p className="text-xs text-gray-500 mb-2">{item.addressLine2}</p>

                <p className="text-xs mt-1">
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    Date & Time:{' '}
                  </span>
                  <span className="text-gray-500">{item.dateTime}</span>
                </p>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col gap-2.5 justify-end text-sm w-full sm:w-48 shrink-0">
              {!item.isCancelled && !item.isPaid && (
                <button
                  onClick={() => handlePay(item.id)}
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
                  onClick={() => handleCancel(item.id)}
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
        ))}
      </div>
    </div>
  );
}