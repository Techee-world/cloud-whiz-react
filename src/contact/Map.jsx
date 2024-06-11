import React from 'react'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Map() {
  return (
    <div className='md:p-20 p-6 gap-10 md:gap-40 flex md:flex-row flex-col itemx-center justify-center'>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
            <div>
                <img className='w-[20rem] h-[20rem] md:block hidden' src="https://img.freepik.com/premium-vector/location-travel-road-white-background-vector-illustration_547150-344.jpg?size=626&ext=jpg&ga=GA1.1.78975299.1696083630&semt=sph" alt="" />
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRightBig"> 
            <div>
                <img className='w-[30rem] h-[20rem]' src="https://img.freepik.com/free-vector/informational-city-map-with-streets-name_23-2148309621.jpg?size=626&ext=jpg&ga=GA1.1.78975299.1696083630&semt=sph" alt="" />
            </div>
            </AnimationOnScroll>
    </div>
  )
}

export default Map