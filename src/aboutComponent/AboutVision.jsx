import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';

function AboutVision() {
  return (
    <div>
        <div className="flex flex-col md:flex-row ml-4 md:ml-16 p-4 md:p-10 gap-4 md:gap-10">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
      <div className="mx-auto  md:ml-20">
        <img
          className="w-80 h-80"
          src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInRightBig">
      <div className="max-w-lg mx-auto md:mx-none md:ml-16 text-center md:text-left">
        <h1 className="text-sky-600 text-4xl md:text-4xl mb-2 md:mb-4 font-bold">
          Our Vision
        </h1>
        <p className="text-sm md:text-base my-2 md:my-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, eum molestiae ipsum numquam magni sunt mollitia ex nemo nam quasi? Neque soluta exercitationem cumque facere sed laborum. Temporibus animi nam, nemo optio dolorem voluptatum exercitationem. Modi facere animi molestiae reprehenderit iure vel eaque. Odit exercitationem aperiam rerum amet minus nesciunt velit, magnam quae facilis atque facere assumenda omnis libero dicta quia consequatur cumque nihil dolorum voluptates suscipit eaque sint! Officia.
        </p>
      </div>
      </AnimationOnScroll>
    </div>
    </div>
  )
}

export default AboutVision