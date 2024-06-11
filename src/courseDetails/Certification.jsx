import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import checkBox from '../assets/checkbox.png'

function Certification() {
  return (
    <div className='bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600 '>
        <div className='text-center text-white text-4xl  pt-10'>
            <h1 className='font-bold'>Our Certification Criteria</h1>
        </div>
    <div className="flex flex-col items-center md:flex-row ml-4 md:ml-16 p-4 md:p-10 gap-6 md:gap-1">
    <AnimationOnScroll animateIn="animate__fadeInLeftBig">
    <div className="mx-auto md:mx-16 md:ml-36">
      <img
        className="w-80 h-80"
        src="https://pluspng.com/img-png/coder-png-coder-png-file-354.png"
        alt=""
      />
    </div>
    </AnimationOnScroll>
  
    <div className="max-w-sm mx-auto md:mx-none flex flex-col mb-6 md:mb-0  md:ml-16 text-center md:text-left">
    <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className='flex items-center gap-4'>
      <img className='w-16 h-16' src={checkBox} alt="" />
      <p className="text-xs text-white md:text-xl my-2 md:my-3">
        Description of services, who we are as a company, and some 
      </p>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className='flex items-center gap-4'>
      <img className='w-16 h-16' src={checkBox} alt="" />
      <p className="text-xs text-white md:text-xl my-2 md:my-3">
        Description of services, who we are as a company, and some 
      </p>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className='flex items-center gap-4'>
      <img className='w-16 h-16' src={checkBox} alt="" />
      <p className="text-xs text-white md:text-xl my-2 md:my-3">
        Description of services, who we are as a company, and some 
      </p>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className='flex items-center gap-4'>
      <img className='w-16 h-16' src={checkBox} alt="" />
      <p className="text-xs text-white md:text-xl my-2 md:my-3">
        Description of services, who we are as a company, and some 
      </p>
        </div>
        </AnimationOnScroll>
    </div>
   
  </div>
  </div>
  )
}

export default Certification