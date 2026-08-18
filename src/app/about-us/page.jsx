import Image from "next/image";
import about from "../../../public/assets/about_image.png";

const page = () => {
  const features = [
    {
      title: "EFFICIENCY:",
      description:
        "Streamlined appointment scheduling that fits into your busy lifestyle.",
    },
    {
      title: "CONVENIENCE:",
      description:
        "Access to a network of trusted healthcare professionals in your area.",
    },
    {
      title: "PERSONALIZATION:",
      description:
        "Tailored recommendations and reminders to help you stay on top of your health.",
    },
  ];

  return (
    <div className="container mx-auto md:mt-12 mt-7 mb-5">
      <h1 className="md:text-3xl text-2xl text-gray-700 text-center md:mb-5">
        ABOUT <strong>US</strong>{" "}
      </h1>
      <div className="flex md:flex-row flex-col  max-w-7xl md:gap-10 gap-8 items-center p-3">
        <Image src={about} alt="about" width={400} height={200} />
        <div className="space-y-5  text-gray-500 text-sm">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>{" "}
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you re booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>{" "}
          <h2 className="font-bold text-black">Our Vision </h2>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <section className="py-16 p-2">
        <h1 className="md:text-3xl text-2xl md:mb-8 mb-5">
          Why <strong>Choose Us</strong>{" "}
        </h1>
        <div className="container mx-auto">
          {/* Heading */}

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-300">
            {features.map((item, index) => (
              <div
                key={index}
                className="min-h-55 hover:bg-[#6b79fd] hover:text-white flex flex-col justify-center px-8 md:px-16 py-12 border-b md:border-b-0 md:border-r border-gray-300 last:border-r-0 "
              >
                <h3 className="text-lg font-semibold uppercase mb-6">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base leading-8 max-w-xs">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
