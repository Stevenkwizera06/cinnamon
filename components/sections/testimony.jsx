import React from "react";
import Image from "next/image";
import ceo from "../../public/images/ceo.webp";
import ping from "../../public/images/ping.webp";
import leftArrow from "../../public/images/left-arrow.webp";
import rightArrow from "../../public/images/right-arrow.webp";
import chevron from "../../public/icons/chevron.svg";
// import quote from "../../public/images/quote.png";
// import Chevron from "../icons/Chevron";

export default function Testimonies() {
  return (
    <div className="relative py-28">
       <div className="max-w-6xl relative mx-auto px-5 grid grid-cols-1 lg:grid-cols-6 ">
        <div className="font-MontHeavy max-w-6xl mx-auto absolute text-[#5135ff1a] text-[258px] -top-32 -left-16">
        
        </div>
        <div className="col-span-4">
          <div>
           
            <h4 className="lg:text-4xl text-3xl leading-3.125 font-MontBold ">
              They’re consistent, and the communication is good.
            </h4>
            <p className="max-w-2xl lg:my-5 my-14 text-gray-500 text-opacity-80 text-base leading-7">
              When I have a deadline, they would work extra hours on the weekend
              and after hours. Cinnamon gives the impression of being a smaller
              team that’s focused on customers.
            </p>
          </div>
          <div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
              <Image className="h-14 w-14 rounded-full" src={ceo} alt="" />
              <div>
                <h4 className="font-MontSemiBold">Garin Toren,</h4>
                <p className="text-gray-500 text-base">CEO, ping</p>
              </div>
            </div>
          </div>
          <div className="flex  my-10 items-center gap-9">
            <a className="hover:-translate-y-2 transition-all duration-200 cursor-pointer">
              <Image className="w-12 h-7" src={leftArrow} alt="" />
            </a>
            <a className="hover:-translate-y-2 transition-all duration-200 cursor-pointer">
              <Image className="w-12 h-7" src={rightArrow} alt="" />
            </a>
          </div>
        </div>
        <div className="col-span-2 flex-col flex items-start lg:items-end justify-between">
          <Image className="w-52 h-16 lg:block hidden" src={ping} alt="" />
          <a className="text-primary flex  items-center gap-4 " href="">
            <Image src={chevron} />

            <span className="leading-7 border-b-0.5 border-primary">
              VIEW CASE STUDY
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
