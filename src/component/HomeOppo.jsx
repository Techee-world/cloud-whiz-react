import React from 'react';
import "animate.css/animate.min.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import homeImage from '../assets/group 3725.png'


function HomeOppo() {
  return (
    <div className="flex md:h-[30rem] h-[35rem] flex-col-reverse md:flex-row-reverse items-center justify-center  pb-4 md:p-3  md:gap-10 gap-10">
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className=" w-full md:w-[20rem]  md:ml-6 text-center md:text-left animate-fadeInDown">
          <h1 className="text-sky-600 w-[14rem]  md:w-[29rem] md:mx-0 mx-auto text-4xl md:text-7xl mb-2 md:mb-8 font-bold">
            We work your ideas
          </h1>
          <p className="text-sm mb-4 md:mb-6  md:text-base my-2 md:my-3">
            Description of services, who we are as <br /> a company, and some filler
            text about the company
          </p>
          <button className="transition duration-500 ease-in-out h-[45px] text-lg md:h-9 md:text-base  hover:-translate-y-1 hover:scale-110 px-4 md:px-4 py-2 md:py-[6px] bg-sky-500 hover:font-medium font-medium text-white hover:bg-sky-600 rounded-sm
           w-[12rem]   mb-4 md:mb-10">
            Apply Now
          </button>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className=" ">
       <img
          className="w-full md:w-[34rem] h-64 md:h-auto animate-fadeInDown"
        src={homeImage}
          alt="" 
        /> 
      </div> 
      </AnimationOnScroll>
      </div>
  );
}

export default HomeOppo;
