import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { LuInfo } from "react-icons/lu";

export default async function DoctorProfileCard({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:2000/appointments/${id}`);
  const doctorData = await res.json();

  return (
    <div className="w-full container mx-auto py-5 p-5">
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
            <div className="mt-5">
              <div className="flex items-center gap-1.5 text-gray-800 font-medium text-sm">
                <span>About</span>
                {/* Info Icon */}
                <LuInfo />
              </div>
              <p className="mt-2 text-md font-normal text-gray-600 leading-relaxed">
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
  );
}