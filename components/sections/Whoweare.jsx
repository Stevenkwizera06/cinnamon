import React from "react";
import Button from "../button";
import Image from "next/image";
import who from "../../public/images/who-we-are.webp"

export default function WhoWeAre() {
  return (
    <div className="bg-slate-100 py-32 relative">
      <div className="max-w-6xl mx-auto md:mt-28  px-5">
        <div className="col-span-3">
          <h4 className="lg:text-5xl text-4xl leading-3.125 font-bold ">
            Who we are
          </h4>
          <p className="max-w-md my-8 lg:my-3 text-gray-500 text-opacity-80 text-lg leading-7">
            Meet our international teams made up of 86 innovators, branched into
            8 departments, that influence the market throughout 20 different
            countries.
          </p>
          <Image
            className="lg:absolute right-0  lg:max-w-md h-max md:-mt-56"
            src={who}
            alt=""
          />
          <div className="lg:grid hidden max-w-2xl my-12 grid-cols-2 gap-10">
            <div>
              <ul className="font-bold text-2xl space-y-12">
                <li>Product design</li>
                <li>Web development</li>
                <li>Mobile development</li>
                <li>Quality assurance</li>
                <li>Marketing</li>
              </ul> 
            </div>
            <div className="ml-8">
              <ul className="font-bold text-2xl space-y-12">
                <li>Project management</li>
                <li>Human resources</li>
                <li>Sales</li>
                <li>Fluffy friends</li>
              </ul>
            </div>
          </div>
          <div className="my-6">
            <Button title={"Read About us"} />
          </div>
        </div>
      </div>
    </div>
  );
}
