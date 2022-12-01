import React from "react";
import Image from "next/image";
import Button from "../button";
import BigrightArrow from "../../public/icons/Big-right-arrow.webp";

export default function Growing() {
  return (
    <div className="bg-hero bg-zinc-900 py-28 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-5">
        <div>
          <h4 className="text-5xl my-6 text-white  font-bold ">
            We’re growing
          </h4>
          <p className="lg:w-96 text-gray-200 text-opacity-80 text-base leading-7 my-3">
            Jump on board with Cinnamon and get the privilege of working on
            challenging projects for leading global companies! Make the world a
            better, more connected place.
          </p>

          <div className="my-6">
            <Button title={"See All Positions"} />
          </div>
        </div>
        <div className="space-y-8 ">
          <div className="flex gap-4 border-b-2 border-neutral-500 py-5 w-full">
            <h1 className="text-white text-3xl">Node.js Backend Developer</h1>
            <Image className="w-12 mt-2 ml-28" src={BigrightArrow} />
          </div>
          <div className="flex gap-4 border-b-2 border-neutral-500 py-5 w-full">
            <h1 className="text-white text-3xl">Flutter Developer</h1>
            <Image className="w-12 mt-2 ml-60" src={BigrightArrow} />
          </div>
          <div className="flex gap-4 border-b-2 border-neutral-500 py-5 w-full">
            <h1 className="text-white text-3xl">Flutter Developer</h1>
            <Image className="w-12 mt-2 ml-60" src={BigrightArrow} />
          </div>
        </div>
      </div>
    </div>
  );
}
