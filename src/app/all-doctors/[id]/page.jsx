"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { LuInfo } from "react-icons/lu";

export default function DoctorAppointmentPage({ params }) {
  // --- State ---
  const [doctorData, setDoctorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  // --- Static slot data (will come from API later) ---
  const days = [
    { day: "SAT", date: "15" },
    { day: "SUN", date: "16" },
    { day: "MON", date: "17" },
    { day: "TUE", date: "18" },
    { day: "WED", date: "19" },
    { day: "THU", date: "20" },
    
  ];

  // --- Fetch doctor data ---
  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const { id } = await params;
        const res = await fetch(`http://localhost:2000/appointments/${id}`);
        if (!res.ok) throw new Error("Doctor not found");
        const data = await res.json();
        setDoctorData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDoctor();
  }, [params]);

  // Safely extract time slots array from doctorData
  const timeSlots = Array.isArray(doctorData?.timeSlots)
    ? doctorData.timeSlots
    : [
        doctorData?.time1,
        doctorData?.time2,
        doctorData?.time3,
        doctorData?.time4,
      ].filter(Boolean);

  // --- Booking handler ---
  const handleBooking = () => {
    if (selectedDay !== null && selectedTime) {
      alert(
        `Booking confirmed for ${days[selectedDay].day} ${days[selectedDay].date} at ${selectedTime}`,
      );
      // You can replace this with an API POST call later
    } else {
      alert("Please select a day and time slot.");
    }
  };

  // --- Loading & error states ---
  if (loading) {
    return <div className="text-center py-20">Loading doctor details...</div>;
  }

  if (error || !doctorData) {
    return (
      <div className="text-center py-20 text-red-500">Doctor not found.</div>
    );
  }

  // --- Render ---
  return (
    <div className="container mx-auto p-4 md:p-6 font-sans">
      {/* 1. Doctor Profile Card (matches your working code) */}
      <div className="w-full container mx-auto  ">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-6">
          {/* Doctor Image Container */}
          <div className="w-full md:w-72 h-80 md:h-auto bg-[#5F6FFF] rounded-2xl flex items-end justify-center overflow-hidden shrink-0">
            <Image
              src={doctorData.image}
              alt={doctorData.doctor}
              width={350}
              height={350}
              className="w-full h-full object-cover "
              priority
            />
          </div>

          {/* Details Card (Overlaps image on mobile, sits alongside on desktop) */}
          <div className="w-[92%] sm:w-[95%] md:w-full md:flex-1 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 -mt-16 md:mt-0 relative z-10 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header Name & Verified Badge */}
              <div className="flex items-center gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  {doctorData.doctor}
                </h2>
                {/* Verified Icon */}
                <MdVerified className="text-[#0016E1] text-2xl" />
              </div>

              {/* Speciality & Experience Badge */}
              <div className="flex items-center gap-2 sm:gap-3 mt-1.5 text-xs sm:text-sm text-gray-600 flex-wrap">
                <span className="text-md font-semibold">
                  {doctorData.speciality}
                </span>
                <span className="border border-gray-300 rounded-full px-2.5 py-0.5 text-xs font-medium text-gray-600">
                  {doctorData.experience} Years
                </span>
              </div>

              {/* About Section */}
              <div className="mt-5 max-w-3xl">
                <div className="flex items-center gap-1.5 text-gray-800 font-medium text-sm">
                  <span>About</span>
                  {/* Info Icon */}
                  <LuInfo />
                </div>
                <p className="mt-2 text-sm md:font-semibold text-gray-500 leading-relaxed">
                  {doctorData.description}
                </p>
              </div>
            </div>

            {/* Appointment Fee */}
            <div className="mt-6  text-gray-600 font-medium">
              Appointment fee:{" "}
              <span className="text-gray-900 text-lg font-bold">
                ${doctorData.fee}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Booking Slots Section */}
      <div className="mt-10">
        <h3 className="text-gray-800 font-medium text-base mb-4">
          Booking slots
        </h3>

        {/* Days */}
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {days.map((item, index) => {
            const isSelected = selectedDay === index;
            return (
              <button
                key={index}
                onClick={() => {
                  setSelectedDay(index);
                  setSelectedTime(null); // reset time when day changes
                }}
                className={`flex flex-col items-center justify-center w-15 h-21 rounded-full border transition-all duration-200 shrink-0 cursor-pointer ${
                  isSelected
                    ? "bg-[#5F6FFF] border-[#5F6FFF] text-white shadow-md"
                    : "bg-white border-gray-200 text-gray-600 hover:border-[#5F6FFF]"
                }`}
              >
                <span className="text-xs font-medium uppercase">
                  {item.day}
                </span>
                <span className="text-lg font-semibold mt-1">{item.date}</span>
              </button>
            );
          })}
        </div>

        {/* Time Slots */}
        {/* <div className="flex flex-wrap gap-3 mt-6">
          {timeSlots.map((time, index) => {
            const isSelected = selectedTime === time;
            return (
              <button
                key={index}
                onClick={() => setSelectedTime(isSelected ? null : time)}
                className={`px-5 py-2.5 rounded-full border text-sm transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#5F6FFF] border-[#5F6FFF] text-white shadow-md"
                    : "bg-white border-gray-200 text-gray-600 hover:border-[#5F6FFF]"
                }`}
              >
                {time}
              </button>
            );
          })}
        </div> */}

        <div className="flex flex-wrap gap-3 mt-6">
          {timeSlots?.map((time, index) => {
            const isSelected = selectedTime === time;
            return (
              <button
                key={index}
                onClick={() => setSelectedTime(isSelected ? null : time)}
                className={`px-5 py-2.5 rounded-full border text-sm transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#5F6FFF] border-[#5F6FFF] text-white shadow-md"
                    : "bg-white border-gray-200 text-gray-600 hover:border-[#5F6FFF]"
                }`}
              >
                {time}
              </button>
            );
          })}
        </div>

        {/* Book Button */}
        <button
          onClick={handleBooking}
          disabled={!selectedTime}
          className={`mt-8 px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedTime
              ? "bg-[#5F6FFF] hover:cursor-pointer hover:bg-[#5060f5] text-white  shadow-md"
              : "bg-[#5060f5] text-white cursor-not-allowed opacity-80"
          }`}
        >
          Book an appointment
        </button>
      </div>
    </div>
  );
}
