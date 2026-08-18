import Image from "next/image";
import logo from "../../public/assets/logo-prescripto.svg"
import Link from "next/link";


export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <h2 className="text-[110px] md:text-[170px] font-extrabold text-[#5f6FFF] leading-none">
          404
        </h2>

        {/* Title */}
        <h3 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h3>

        {/* Description */}
        <p className="text-gray-600 md:text-lg font-sans mt-6 leading-7">
          The page you are looking for might have been removed, renamed,
          or is temporarily unavailable. Continue exploring trusted doctors
          and healthcare services with DocAppoint.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <Link href={"/"}>
             <button className="bg-[#5f6FFF] text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition duration-300 shadow-md">
            Back To Home
          </button>
            </Link>
        </div>

        {/* Footer Text */}
        <div className="mt-14">
          <p className="text-sm text-gray-500">
            Need assistance? Reach us at{" "}
            <span className="text-[#5f6FFF] font-semibold">
              support@prescripto.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}