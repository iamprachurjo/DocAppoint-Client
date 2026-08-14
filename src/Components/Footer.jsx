import Image from "next/image";
import logo from "../../public/assets/logo-prescripto.svg";

export default function Footer() {
  return (
    <footer className="p-2 pt-16">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          <div>
            <Image src={logo} alt="fd" width={200} height={199} />

            <p className="mt-6 text-gray-600 leading-8 ">
              DocAppoint helps patients connect with trusted doctors quickly and
              easily. Book appointments online, manage schedules, and get
              quality healthcare support anytime from the comfort of your home.
            </p>
          </div>

          {/* Company Links */}
          <div className="md:mx-auto">
            <h3 className="text-xl font-semibold text-black mb-6 uppercase">
              Company
            </h3>

            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li className="hover:text-[#5f6FFF] cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-[#5f6FFF] cursor-pointer transition">
                About us
              </li>
              <li className="hover:text-[#5f6FFF] cursor-pointer transition">
                Delivery
              </li>
              <li className="hover:text-[#5f6FFF] cursor-pointer transition">
                Privacy policy
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-black mb-6 uppercase">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-sm font-bold text-gray-500">
              <li>+0-000-000-000</li>
              <li>reatstacdev@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 py-6 text-center">
          <p className="text-gray-700 text-sm md:text-base">
            Copyright 2026 © Prachurjo.dev - All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
