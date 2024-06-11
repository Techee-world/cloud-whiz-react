import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState(false);
  const [menu, setMenu] = useState("hidden");

  function clickHandle() {
    if (menu === "hidden") {
      setMenu("h-[30rem]");
    } else {
      setMenu("hidden");
    }
    setIsOpen(!isOpen);
  }

  return (
    <nav className="p-4">
      <div className="container">
        <div className="flex justify-between items-center md:w-[74rem]">
          <div className="md:ml-8 items-center">
            <Link to="/">
              <img src={logo} className="h-16 mr-16" alt="cloud-whize logo" />
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={clickHandle}
              className="text-white hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
                className="h-6 w-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div 
            className={`${menu} md:inline-flex md:ml-[13rem] top-[102px] md:mt-0 md:bg-white w-[20rem] md:w-full left-0 md:left-0 bg-green-100 absolute md:static md:flex-row flex-col flex space-x-4 gap-8 animation-element animate `}
          >
            <Link to="/" className="ml-4 md:ml-0 mt-4 md:mt-0">
              Home
            </Link>
            <Link to="/about">About</Link>
            <div className="relative group">
              <button
                onClick={() => setService(!service)}
                className="hover:text-gray-300"
              >
                Services
              </button>
              <Transition
                show={service}
                enter="transition-opacity duration-700"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-700"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute left-0 mt-2 p-2 bg-white text-gray-800 shadow-lg rounded-lg">
                  <a href="#" className="block py-2 px-4">
                    Option 1
                  </a>
                  <a href="#" className="block py-2 px-4">
                    Option 2
                  </a>
                </div>
              </Transition>
            </div>
            <Link to="/blog" className="hover:text-gray-300">
              Blog
            </Link>
            <Link to="/careers" className="hover:text-gray-300">
              Careers
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
            <Link to="/learning">
              <span className="py-1 px-3 text-white bg-gradient-to-t rounded-sm from-sky-600 to-sky-800 hover:text-gray-300 cursor-pointer w-[10rem] md:mb-0">
                Learning Center
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
