import Image from "next/image";
import Link from "next/link";

async function getDoctors() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors`, {
      next: { revalidate: 60 }, // revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
}

const DoctorsInfo = async () => {
  const doctorData = await getDoctors();

  if (!doctorData || doctorData.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <p className="text-gray-500 text-lg">No doctors found.</p>
      </div>
    );
  }

  return (
    <div className="p-4 container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
        {doctorData.map((doctor) => (
          <Link
            href={`/all-doctors/${doctor._id}`}
            key={doctor._id}
            className="block"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group h-full">
              {/* Image */}
              <div className="relative h-80 bg-linear-to-br from-purple-50 to-blue-50 overflow-hidden">
                <Image
                  src={doctor.image}
                  alt={doctor.doctor || "Doctor"}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Availability Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-700">Available</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5 text-center">
                <h3 className="font-semibold text-xl text-gray-900 mb-1">
                  {doctor.doctor}
                </h3>
                <p className="text-gray-600 text-[15px]">{doctor.speciality}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorsInfo;