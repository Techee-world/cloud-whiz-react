import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [close, setClose] = useState(false);
  function menuClick() {
    setMenu(!menu);
    setClose(!close);
  }
  return (
    <div
      className={`font-system-ui md:bg-inherit   ${menu && "h-80 bg-gray-500"}`}
    >
      <div className="md:flex justify-around md:flex-row flex flex-col md:items-center  p-2">
        <div className="md:flex md:flex-col md:justify-center md:items-center">
          <Link to="/">
            {" "}
            <img
              className="w-6 h-6"
              src="https://cdn-icons-png.flaticon.com/128/9089/9089854.png"
              alt=""
            />
            <h1 className="text-blue-800 ">Cloud Whiz</h1>
            <p className="text-[10px] text-blue-800">We Build Smiles</p>
          </Link>
        </div>
        <div className="flex justify-end  items-center ">
          {close ? (
            <img
              className="w-6 h-6 md:hidden -mt-20"
              onClick={menuClick}
              src="https://cdn-icons-png.flaticon.com/128/2997/2997911.png"
              alt=""
            />
          ) : (
            <img
              className="w-10 h-10 md:hidden -mt-20"
              onClick={menuClick}
              src="https://cdn-icons-png.flaticon.com/128/2811/2811759.png"
              alt=""
            />
          )}

          <ul
            className={`flex flex-col items-start  md:flex-row md:flex md:gap-10 md:items-center z-[1]  md:z-auto md:static  mt-16 absolute md:mt-0   w-full left-0 md:w-auto md:py-0 md:opacity-100 opacity-0  pl-6  h-20 ${
              menu ? "opacity-100   " : "opacity-0"
            }`}
          >
            <Link to="/">
              {" "}
              <li className="cursor-pointer md:my-0 my-3">Home </li>
            </Link>
            <li className="cursor-pointer md:my-0 my-1">Services </li>
            <Link to="/about">
              <li className="cursor-pointer md:my-0 my-1">About us </li>
            </Link>
            <li className="cursor-pointer md:my-0 my-1">Blog </li>
            <Link to="/careers"><li className="cursor-pointer md:my-0 my-1">Careers </li> </Link>
            <Link to="/contact">
              <li className="cursor-pointer md:my-0 my-1">Contact us </li>
            </Link>
            <Link to="/learning">
              <li className="bg-gradient-to-t from-blue-600 to-blue-800  px-4 text-white py-[2px] cursor-pointer rounded-md inline-block">
                Learning Center{" "}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
