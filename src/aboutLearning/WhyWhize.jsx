import React from 'react'
import "animate.css/animate.min.css";
import logo from '../assets/logo.png'

import { AnimationOnScroll } from 'react-animation-on-scroll';

function WhyWhize() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center md:flex-row ml-4 md:ml-16 p-4 md:p-10 gap-4 md:gap-10">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
      <div className="mx-auto  flex flex-col items-center">
      <img src={logo} class="h-40 " alt="cloud-whize logo" />
      </div>
      </AnimationOnScroll>
     <AnimationOnScroll animateIn="animate__fadeInRightBig">
      <div className="max-w-md mx-auto md:mx-none md:ml-16 text-center md:text-left">
        <h1 className="text-sky-500 text-4xl md:text-6xl mb-2 md:mb-4 font-bold">
          Why <br /> Cloud Whize ?
        </h1>
        <p className="text-sm md:text-base my-2 md:my-3">
          Description of services, who we are as a company, and some filler
          text about the company
        </p>
        <button className="transition duration-500 ease-in-out  hover:-translate-y-1 hover:scale-110 px-4 md:px-6 py-2 md:py-[6px] bg-sky-500 hover:font-medium font-medium text-white hover:bg-sky-600 rounded-sm  w-[12rem] ">
            Know More
          </button>
      </div>
      </AnimationOnScroll>
    </div>
    </div>
  )
}

export default WhyWhize