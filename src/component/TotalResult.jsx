import React from "react";
import layer from "../assets/layer 2.png";
import iso from "../assets/Group 3776.png";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function TotalResult() {
  return (
    <div>
      <div className="w-full md:py-10 flex flex-wrap md:flex-row flex-col text-white justify-evenly items-center bg-gradient-to-tl from-sky-400 to-sky-500 py-5">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-4 sm:mb-0">
          <h1 className="text-5xl sm:text-6xl font-medium">4.8k</h1>
          <p>jobs completed</p>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-4 sm:mb-0">
          <h1 className="text-5xl sm:text-6xl font-medium">10k</h1>
          <p>Industry Experience</p>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="w-full sm:w-1/2 md:w-1/4 text-center mb-4 sm:mb-0">
          <h1 className="text-5xl sm:text-6xl font-medium">2.2k</h1>
          <p>Global Clients</p>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="w-full sm:w-1/2 md:w-1/4 text-center">
          <h1 className="text-5xl sm:text-6xl font-medium">100+</h1>
          <p>Awards Winned</p>
        </div>
        </AnimationOnScroll>
      </div>

      <div>
        <div className="w-full md:h-[38vh] h-[20vh]">
          <div className="text-center text-blue-600 font-bold text-3xl md:text-4xl mt-8 md:mt-4">
            <h1>Recognitions</h1>
          </div>
          <div className="flex justify-center  gap-2 md:gap-16 items-center justify-center mt-8 md:mt-6">
            <img className="w-24 h-24 md:w-36 md:h-36" src={iso} alt="" />
            <img className="md:w-[30rem] md:h-28 w-[16rem] h-16" src={layer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalResult;
