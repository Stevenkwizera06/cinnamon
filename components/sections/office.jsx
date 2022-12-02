import Image from "next/image";
import OfficeCard from "../cards/office";
import zagreb from "../../public/images/zagreb.jpeg"
import Newyork from "../../public/images/Newyork.jpeg"
import Belgrade from "../../public/images/belgrade.jpeg"
import leftArrow from "../../public/images/left-arrow.webp";
import rightArrow from "../../public/images/right-arrow.webp";

export default function Offices() {

  return (
    <div className="bg-white lg:pb-16 pb-0 py-16 relative">
      <div className="max-w-6xl mx-auto  px-5">
        <h4 className="text-7xl my-6 leading-3.125 font-semibold ">
          Our offices
        </h4>
      </div>
      <div  className="w-screen   overflow-x-scroll">
        <div className="my-10 mx-auto max-w-6xl  flex gap-7 px-5">
          <OfficeCard
            image={zagreb}
            description={"Slavonska avenija 6, 10000, Zagreb, Croatia"}
            title={"Zagreb"}
          />
          <OfficeCard
            image={Newyork}
            description={"500 7th Ave, New York, NY 10018, United States"}
            title={"New York"}
          />
          <OfficeCard
            image={Belgrade}
            description={"500 7th Ave, New York, NY 10018, United States"}
            title={"New York"}
          />
          
        </div>
      </div>
      <div className="hidden max-w-6xl mx-auto lg:flex px-5 my-0 items-center gap-9">
        <a
          className="hover:-translate-y-2 transition-all duration-200 cursor-pointer"
          
        >
          <Image
            className="w-12 grayscale h-7"
            src={leftArrow}
            alt=""
          />
        </a>
        <a
          className="hover:-translate-y-2 transition-all duration-200 cursor-pointer"
          
        >
          <Image className="w-12 h-7"
           src={rightArrow}
            alt="" />
        </a>
      </div>
    </div>
  );
}