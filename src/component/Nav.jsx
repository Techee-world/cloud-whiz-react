import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Nav() {
  const [menu, setMenu] = useState("hidden");
  const [drop, setDrop] = useState("hidden");
  const [border, setBorder] = useState("");
  const [close, setClose] = useState(false);
  function menuClick() {
    if (menu) {
      setMenu("");
      setClose(!close);
    } else {
      setMenu("hidden ");
      setClose(false);
    }
  }
  function clickDrop() {
    if (drop) {
      setDrop("");
      setBorder("bg-green-50");
    } else {
      setDrop("hidden ");
      setBorder("");
    }
  }
  return (
    <>
      <nav class="bg-white border-gray-200  dark:bg-gray-900">
        <div class="max-w-screen-xl relative flex  items-center  justify-between mx-auto p-4">
          <Link to="/">
            {" "}
            <div class=" md:ml-20 items-center">
              <img src={logo} class="h-16 mr-16" alt="cloud-whize logo" />
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            onClick={menuClick}
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            {close ? (
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="24" height="24" fill="none" />
                <path
                  d="M7 17L16.8995 7.10051"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7 7.00001L16.8995 16.8995"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div class={`${menu} absolute left-0 top-[5rem]  w-[21rem] md:block md:w-0 `} id="navbar-default">
            <ul class="font-medium h-screen flex  flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-500 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 animation-element animate">
              <Link to="/">
                {" "}
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900  rounded md:bg-transparent md:text-blue-700 md:px-3 md:py-1 dark:text-white  "
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/about">
                {" "}
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:px-3 md:py-1"
                  >
                    About Us
                  </a>
                </li>
              </Link>
              <li onClick={clickDrop}>
                <a
                  href="#"
                  class={`block py-2 pl-3 pr-4 text-gray-900 rounded relative  ${border}   md:px-3 md:py-1 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:hover:text-blue-700`}
                >
                  Services
                  <svg
                    width="30px"
                    height="30px"
                    className="inline-block"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </li>

              <div
                class={`absolute ${drop}  md:right-[48%] right-[1%] z-[1] mt-20 md:mt-10 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none animate-fadeInDown`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4  hover:bg-green-100 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Edit
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 hover:bg-green-100 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Duplicate
                  </a>
                </div>
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Archive
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 hover:bg-green-100 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-3"
                  >
                    Move
                  </a>
                </div>
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-green-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-4"
                  >
                    Share
                  </a>
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-green-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-5"
                  >
                    Add to favorites
                  </a>
                </div>
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="text-gray-700 block px-4 py-2 text-sm hover:bg-green-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-6"
                  >
                    Delete
                  </a>
                </div>
              </div>

              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:px-3 md:py-1"
                >
                  Blog
                </a>
              </li>
              <Link to="/careers">
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:px-3 md:py-1"
                  >
                    Careers
                  </a>
                </li>
              </Link>
              <Link to="/contact">
                {" "}
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:px-3 md:py-1"
                  >
                    Contact Us
                  </a>
                </li>
              </Link>
              <Link to="/learning">
                {" "}
                <li>
                  <a
                    href="#"
                    class="block py-2 pl-3 pr-4 text-gray-900 rounded-sm md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent bg-gradient-to-t from-sky-600 to-sky-800  md:px-2 text-white md:py-[1px] inline-block"
                  >
                    Learning Center
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
