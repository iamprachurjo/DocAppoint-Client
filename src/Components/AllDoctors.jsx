import DoctorsInfo from "./Reuseable/DoctorsInfo";

const AllDoctors = () => {
  return (
    <div className="">
      <div className="text-center md:mt-12 mt-6 p-2">
        <h1 className="md:text-4xl text-3xl font-semibold">
          Top Doctors to Book
        </h1>
        <p className="font-semibold pt-4">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>
      <DoctorsInfo />
    </div>
  );
};

export default AllDoctors;
