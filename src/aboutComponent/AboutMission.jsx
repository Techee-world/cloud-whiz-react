import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function AboutMission() {
  return (
    <div>
          <div className="flex border-b-2 flex-col-reverse items-center md:flex-row ml-2 md:ml-20 p-4 md:p-10  gap-4 md:gap-10">
          <AnimationOnScroll animateIn="animate__fadeInLeftBig">
      <div className="max-w-lg mx-auto md:m-1 text-center md:text-left animate-fadeInDown">
        <h1 className="text-sky-600 text-4xl md:text-4xl mb-2 md:mb-4 font-bold">
          Our Mission
        </h1>
        <p className="text-sm md:text-base my-2 md:my-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti beatae nostrum culpa laboriosam nulla esse facere. Blanditiis earum minus natus laboriosam! Temporibus corrupti iure error pariatur blanditiis explicabo corporis dolor vero, maiores aut, optio accusantium incidunt! Doloribus quae quas asperiores iure incidunt laborum beatae, magni nam velit, et eos autem. Optio accusantium dolor perspiciatis, laborum iure adipisci maiores quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deleniti beatae nostrum culpa laboriosam nulla esse facere. Blanditiis earum minus natus laboriosam!
        </p>
        
      </div>
      </AnimationOnScroll>
        <div className="mx-auto  ">
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
     <img
        className="w-full md:w-[40rem] h-64 md:h-auto animate-fadeInDown"
        src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg"
        alt="" 
      /> 
    </AnimationOnScroll>
    </div> 
    </div>
    </div>
  )
}

export default AboutMission