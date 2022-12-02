import React from "react";
import Image from "next/image";
import Button from "../button";
import Worktogether from "../../public/images/work-together.png"

export default function WorkTogether() {
  return (
    <div className="bg-slate-100 relative ">
      <div className="flex max-w-3xl flex-col mx-auto items-center lg:py-32 justify-center px-3">
        <h4 className="lg:text-5xl lg:  text-center md:max-w-none max-w-xs text-4xl leading-3.125 lg:leading-3.75 font-bold ">
          <span className="hidden md:block">Have a project in mind?</span>
          <br className="block md:hidden" /> Let's work
          <br className="block md:hidden" /> together.
        </h4>
        <div className="my-10">
          <Button title={"Contact us"}/>
        </div>
      </div>
      <Image
        className="bottom-0 left-0 absolute lg:max-w-md"
        src={Worktogether}
        alt=""
      />
    </div>
  );
}