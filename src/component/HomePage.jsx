import React from "react";
import "animate.css/animate.min.css";
import homeImage from '../assets/group 3609.png'

function HomePage() {
  return (
    <div className="">
      <div className="flex md:h-[30rem] mt-7 flex-col md:flex-row items-center justify-center md:ml-20 pb-4 md:p-3 md:gap-20 gap-1">
        <div className="w-full md:w-[20rem] md:ml-6 text-center md:text-left animate-fadeInDown">
          <h1  className="text-sky-700 w-[20rem] md:w-[29rem] md:mx-0 mx-auto text-5xl md:text-7xl mb-2 md:mb-8 font-Poppins font-[700] ">
            We work your ideas
          </h1>
          <p className="text-lg  font-Poppins font-base md:text-base mb-2 md:mb-6 font-medium md:my-3">
            Description of services, who we are as a company, and some filler text about the companyg
          </p>
          <button className="md:block hidden transition duration-500 ease-in-out h-16 text-xl md:h-9 md:text-base hover:-translate-y-1 hover:scale-110 px-4 md:px-4 py-2 md:py-[6px] bg-sky-500 hover:font-medium font-medium text-white hover:bg-sky-600 rounded-sm w-full  md:w-[12rem]  mb-2 md:mb-10">
            Apply Now
          </button>
        </div>
        <div  className="mx-auto mb-2 md:mb-0 mt-10 md:mt-0 md:ml-10">
          <img
            className="w-full md:w-auto md:p-4 h-auto md:h-auto animate-fadeInDown"
            src={homeImage}
            alt=""
          />
          <button className="transition md:hidden block duration-500 ease-in-out h-[50px] text-lg md:h-9 md:text-base transform hover:-translate-y-1 hover:scale-110 px-4 md:px-4 py-2 md:py-[6px] bg-sky-500 hover:font-medium font-medium text-white hover:bg-sky-600 rounded-sm w-[23rem] md:w-[140px] mb-4 ml-4 md:ml-0 md:mb-10">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
