import Image from "next/image";
import contact from "../../../public/assets/contact.png";

export default function ContactSection() {
  return (
    <section className="py-10 md:py-16 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-700 mb-10 md:mb-16">
          CONTACT <span className="font-bold">US</span>
        </h2>

        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center md:justify-end">
            <Image 
              src={contact} 
              alt="Contact us illustration" 
              className="w-full max-w-90 md:max-w-md h-auto"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-10 md:space-y-12 text-center md:text-left">
            {/* Office Info */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 md:mb-6 uppercase">
                Our Office
              </h3>
              <div className="space-y-2 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>54709 Willms Station</p>
                <p>Suite 350, Washington, USA</p>
                <div className="pt-2 md:pt-4">
                  <p>Tel: (415) 555-0132</p>
                  <p>Email: Prachurjov@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Careers */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-3 md:mb-4 uppercase">
                Careers at Prescripto
              </h3>
              <p className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">
                Learn more about our teams and job openings.
              </p>
              <button className="border border-gray-500 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base text-gray-700 hover:bg-[#5F6FFF] hover:text-white transition duration-300">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}