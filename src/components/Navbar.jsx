import React from "react";
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const user_name = localStorage.getItem("user_name");

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    navigate("/");
  };
  return (
    <nav className=" bg-white shadow-md h-24 ">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between  h-full items-center">
          <div className="flex-shrink-0 items-center ">
            <img src="/Logo.png" alt="logo" className="w-[200px] h-[200px] " />
          </div>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-4">
            <a
              className="p-2 font-medium px-4 group hover:text-purple-600"
              href="/"
            >
              Home
              <div className="bg-purple-700 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a
              className="p-2 font-medium px-4 group hover:text-purple-600"
              href="/"
            >
              Services
              <div className="bg-purple-700 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a
              className="p-2 font-medium px-4 group  hover:text-purple-600"
              href="#"
            >
              About Us
              <div className="bg-purple-700 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a
              className="p-2 font-medium px-4 group  hover:text-purple-600"
              href="#"
            >
              Contact Us
              <div className="bg-purple-700 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          </div>
          <div className=" hidden md:flex space-x-4 ">
            <button className="bg-transparent border border-gray-500 hover:bg-purple-700  hover:text-white text-gray-500  font-medium rounded-full p-1  md:px-6 md:text-xl ">
              Let's Talk
            </button>
            {/* <button
              className="bg-transparent border border-gray-500 hover:bg-purple-700 text-gray-500  font-medium rounded-full p-1  md:px-3 md:text-sm text-[10px]"
              onClick={handleLogout}
            >
              Logout
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed  w-6/12 z-50 inset-y-0 right-0 bg-white shadow-lg transform transition-transform  duration-1000   ease-in-out   md:hidden ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between  items-center">
            <div className="flex-shrink">
              <img
                src="../public/Logo.png"
                alt="logo"
                className=" w-[100px] h-[100px] "
              />
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <XMarkIcon className="w-6 h-6 mt-2 mr-4" />
            </button>
          </div>
          <div className="px-4  space-y-2">
            <a href="#" className="block text-gray-600 hover:text-black">
              Home
            </a>
            <a href="#" className="block text-gray-600 hover:text-black">
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
