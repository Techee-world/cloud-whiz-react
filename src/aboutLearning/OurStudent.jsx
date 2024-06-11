import React from "react";
import Comma from '../assets/comma.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";


function OurStudent() {
    function sliderRight() {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollRight - 500;
      }
      function sideLeft() {
        const slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 200;
      }
  return (
    <div>
      
    <div className="p-10 bg-gradient-to-tl relative from-sky-400 to-sky-600">
      <h1 className="text-white font-bold text-center text-3xl md:text-4xl">Hear From Our Students</h1>
         <IoIosArrowBack onClick={sliderRight} className="w-8 h-8 z-[1] md:top-60   absolute top-[18rem] left-4 cursor-pointer bg-white p-1 rounded-full" />
        <IoIosArrowForward onClick={sideLeft} className="w-8 h-8 z-[1]    absolute top-[18rem] md:top-60 right-6 md:right-10 cursor-pointer bg-white p-1 rounded-full" />
        
 <div
        id="slider"
        class="flex w-[19rem] md:w-[65rem] md:pl-3  overflow-y-hidden pt-6 gap-[2rem] ml-3 md:ml-8 pl-1 flex-no-wrap overflow-x-scroll scroll-smooth scrollbar-hide scrolling-touch  items-start my-8"
      >
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className="border bg-white p-4 w-[18rem] md:w-[20rem] rounded-xl">
  <div className="flex flex-col items-center">
    <img
      className="w-14 h-14  bg-gradient-to-t from-blue-400 to-blue-500 rounded-full p-2 -mt-10 border-solid border-2"
      src={Comma}
      alt=""
    />
    <p className=" text-center text-lg mb-6 p-4">
      excellent quality of work. “High standard and They helped my
      business grow in digital.”
    </p>

    <div class="text-yellow-500 flex gap-2">

    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>

</div>
    <p className="text-xs mt-2 mb-2 text-gray-500">-Lorem, ipsum dolor-</p>
    <p></p>
  </div>
</div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInDownBig">
        <div className="border bg-white p-4 w-[18rem]   md:w-[20rem] rounded-xl">
  <div className="flex flex-col items-center">
    <img
      className="w-14 h-14  bg-gradient-to-t from-blue-400 to-blue-500 rounded-full p-2 -mt-10 border-solid border-2"
      src={Comma}
      alt=""
    />
    <p className=" text-center text-lg mb-6 p-4">
      excellent quality of work. “High standard and They helped my
      business grow in digital.”
    </p>

    <div class="text-yellow-500 flex gap-2">

    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>

</div>
    <p className="text-xs mt-2 mb-2 text-gray-500">-Lorem, ipsum dolor-</p>
    <p></p>
  </div>
</div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUpBig">
        <div className="border bg-white p-4 w-[18rem]  md:w-[20rem] rounded-xl">
  <div className="flex flex-col items-center">
    <img
      className="w-14 h-14  bg-gradient-to-t from-blue-400 to-blue-500 rounded-full p-2 -mt-10 border-solid border-2"
      src={Comma}
      alt=""
    />
    <p className=" text-center text-lg mb-6 p-4">
      excellent quality of work. “High standard and They helped my
      business grow in digital.”
    </p>

    <div class="text-yellow-500 flex gap-2">

    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>

</div>
    <p className="text-xs mt-2 mb-2 text-gray-500">-Lorem, ipsum dolor-</p>
    <p></p>
  </div>
</div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div className="border bg-white p-4 w-[18rem]   md:w-[20rem] rounded-xl">
  <div className="flex flex-col items-center">
    <img
      className="w-14 h-14  bg-gradient-to-t from-blue-400 to-blue-500 rounded-full p-2 -mt-10 border-solid border-2"
      src={Comma}
      alt=""
    />
    <p className=" text-center text-lg mb-6 p-4">
      excellent quality of work. “High standard and They helped my
      business grow in digital.”
    </p>

    <div class="text-yellow-500 flex gap-2">

    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
</svg>

</div>
    <p className="text-xs mt-2 mb-2 text-gray-500">-Lorem, ipsum dolor-</p>
    <p></p>
  </div>
</div>
        </AnimationOnScroll>
      </div>
    </div>
    </div>
  );
}

export default OurStudent;
