/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import menu from "../../public/icons/menu-icon-dark.svg";
import play from "../../public/images/play.png";
import Button from "../button";

function Navbar() {
  return (
    <section className="fixed w-full mt-0 bg-white text-black z-50">
      <div className="flex items-center justify-between gap:10 w-full p-6 m-0 max-w-7xl mx-auto md:px-20">
        <div>
          <h1 className="text-3xl font-cinnamonbold">CINNAMON</h1>
        </div>
        <div className="md:flex justify-between items-center gap-8 hidden">
          <ul className="md:flex justify-between gap-4 hidden ">
            <Link href="/project">
              <li>Projects</li>
            </Link>

            <Link href="/services">
              <li>Services</li>
            </Link>

            <Link href="/AboutUs">
              <li>About Us</li>
            </Link>

            <Link href="/Careers">
              <li>Carrers</li>
            </Link>

            <Link href="/Blog">
              <li>Blog</li>
            </Link>
          </ul>
          <div className="md:flex justify-between items-center gap-6 hidden -mt-1">
            <div
              className="w-fit h-fit border-[0.188rem] bg-black transition-box-shadow duration-500 ease-in-out hover:shadow-button hover:border-indigo-600 border-white
            rounded-full p-2 cursor-pointer "
            >
              <Image className="w-8" src={play} />
            </div>
          </div>
          <Button title="Contact us" />
        </div>

        <div className="md:hidden">
          <Image src={menu} />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
