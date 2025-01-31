import React from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import {
  FaRegCopyright,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex   mt-5 w-full text-white gap-3 flex-col items-center justify-center bg-purple-900">
      <div className="mt-10">
        <img
          src="../public/Logo-removebg.png"
          alt="logo"
          className="w-[150px] h-[100px]"
        />
      </div>
      <p className="font-semibold text-base p-2 ">
        Explore more insightful articles, tips, and stories, your go-to
        destination for inspiration, knowledge, and creativity
      </p>
      <div className="grid grid-cols-2 font-light text-sm gap-x-6 underline">
        <p className="flex items-center ">
          <a href="mailto:info@fzone.lk" className="flex items-center">
            <EnvelopeIcon className="w-5 h-5 mr-2" />
            <span>info@fzone.lk</span>
          </a>
        </p>

        <p className="flex items-center space-x-2">
          <a href="tel:+94705937045" className="flex items-center">
            <PhoneIcon className="w-5 h-5 mr-2" />
            <span>+94705937045</span>
          </a>
        </p>
      </div>
      <div className="flex flex-row font-bold gap-9 ">
        <div>
          <a href="#" className="hover:underline">
            Home
          </a>
        </div>
        <div>
          <a href="#" className="hover:underline">
            Services
          </a>
        </div>
        <div>
          <a href="#" className="hover:underline">
            About Us
          </a>
        </div>
        <div>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div></div>
      </div>
      <div className="flex flex-row gap-x-5 mt-5">
        <div className="flex justify-center items-center hover:bg-[#5C0091]  bg-[#7D00C5] rounded-full w-[45px] h-[45px]">
          <a href="#" className="justify-items-center ">
            <FaFacebookF className="scale-[2]" />
          </a>
        </div>
        <div className="flex justify-center items-center hover:bg-[#5C0091] bg-[#7D00C5] rounded-full w-[50px] h-[50px]">
          <a href="#" className="justify-items-center ">
            <FaInstagram className="scale-[2]" />
          </a>
        </div>
        <div className="flex justify-center items-center hover:bg-[#5C0091] bg-[#7D00C5] rounded-full w-[50px] h-[50px]">
          <a href="#" className="justify-items-center ">
            <FaWhatsapp className="scale-[2] " />
          </a>
        </div>
        <div className="flex justify-center items-center hover:bg-[#5C0091] bg-[#7D00C5] rounded-full w-[50px] h-[50px]">
          <a href="#" className="justify-items-center ">
            <FaLinkedin className="scale-[2]" />
          </a>
        </div>
      </div>
      <div className="flex m-5 fill-inherit w-full border-0 border-t-2 items-center justify-center font-thin text-sm">
        <span className="mt-4">©</span>
        <p className="mt-4"> All rights reserved © 2025</p>
      </div>
    </div>
  );
};
