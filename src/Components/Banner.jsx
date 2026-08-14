import Image from "next/image";
import doctor from "../../public/assets/doc-header-img.png"
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Banner() {
  return (
    <section className="w-full  p-4">
      <div className="container mx-auto bg-[#5F6FFF] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-150">
          
          {/* Left Content */}
          <div className="px-8 md:px-14 py-14 text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Book Appointment
              <br />
              With Trusted Doctors
            </h1>

            <div className="flex items-center gap-4 md:mt-8 mt-2.5">
              

              <p className="font-semibold text-gray-100 max-w-sm leading-relaxed">
                Simply browse through our extensive list of trusted doctors,
                schedule your appointment hassle-free.
              </p>
            </div>

            {/* Button */}
            <Button className="md:mt-8 mt-4 px-7 py-6 bg-white text-gray-800 font-medium hover:scale-105 transition">
              Book appointment
              <span className=""><FaArrowRightLong /></span>
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center items-end h-full">
           <Image
                  src={doctor}
                  alt="doctor"
                  className=" border-white object-cover"
                />
          </div>
        </div>
      </div>
    </section>
  );
}