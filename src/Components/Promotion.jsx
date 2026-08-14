import Image from "next/image";
import womandoc from "../../public/assets/appointment-doc-img.png";
import Link from "next/link";

export default function Promotion() {
  return (
    <section className="w-full px-4 py-10">
      <div className="container mx-auto bg-[#5F6FFF] rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="px-8 md:px-12 py-12 text-white">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Book Appointment
            </h2>

            <h3 className="text-3xl md:text-5xl font-bold mt-3 leading-tight">
              With 100+ Trusted Doctors
            </h3>

            <Link href={"/register"}>
              <button className="mt-8 bg-white text-gray-700 px-7 py-3 rounded-full text-sm font-medium hover:scale-105 transition duration-300">
                Create account
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end items-end h-full">
            <Image
              src={womandoc}
              alt="Doctor"
              className="w-[320px] md:w-105 object-contain md:block hidden"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
