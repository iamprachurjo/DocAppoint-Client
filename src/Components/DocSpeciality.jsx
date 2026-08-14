import Image from "next/image";
import general from "../../public/assets/General.png";
import gyno from "../../public/assets/Gynecologist.png";
import per from "../../public/assets/Pediatricians.png";
import der from "../../public/assets/Dermatologist (1).png";
import brain from "../../public/assets/Neurologist.png";
import brain1 from "../../public/assets/Gastroenterologist.png";

const DocSpeciality = () => {
  return (
    <div className="container mx-auto md:pt-10 pt-5">
      <h1 className="md:text-4xl text-3xl font-semibold text-center md:pb-4 pb-1.5">
        Find by Speciality
      </h1>
      <p className="text-center md:font-medium text-gray-600 pb-3">
        Simply browse through our extensive list of trusted doctors, schedule
        your <br /> appointment hassle-free.
      </p>

      <div className="flex max-w-5xl mx-auto items-center justify-center p-2 md:gap-5 gap-2 ">
        <div>
          <Image
            src={general}
            alt="fdsd"
            className="w-20 h-20 md:w-30 md:h-30"
          />
          <h3 className="md:text-lg text-sm">General physician</h3>
        </div>
        <div>
          <Image src={gyno} alt="fdsd" className="w-20 h-20 md:w-30 md:h-30" />
          <h3 className="md:text-lg text-sm">Gynecologist</h3>
        </div>
        <div>
          <Image src={per} alt="fdsd" className="w-20 h-20 md:w-30 md:h-30" />
          <h3 className="md:text-lg text-sm">Dermatologist</h3>
        </div>
        <div>
          <Image src={der} alt="fdsd" className="w-20 h-20 md:w-30 md:h-30" />
          <h3 className="md:text-lg text-sm">Pediatricians</h3>
        </div>
        <div className="md:block hidden ">
          <Image src={brain} alt="fdsd" className="md:w-30 md:h-30" />
          <h3 className="text-lg">Neurologist</h3>
        </div>
        <div className="md:block hidden">
          <Image src={brain1} alt="fdsd" className="md:w-30 md:h-30" />
          <h3 className="text-lg">Gastroenterologist</h3>
        </div>
      </div>
    </div>
  );
};

export default DocSpeciality;
