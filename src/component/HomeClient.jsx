import React from "react";
import Comma from '../assets/comma.png'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";


function HomeClient() {
    function sliderRight() {
        const slider = document.getElementById("slide");
        slider.scrollLeft = slider.scrollRight - 500;
      }
      function sideLeft() {
        const slider = document.getElementById("slide");
        slider.scrollLeft = slider.scrollLeft + 200;
      }
  return (
    <div>
      <div className="p-10 relative bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600">
        <div className="">
          <h1 className="text-center text-4xl font-bold text-white">Client Testimonials</h1>
        </div>
        <IoIosArrowBack onClick={sliderRight} className="w-6 h-6 md:hidden absolute top-[17rem] left-2 cursor-pointer bg-white p-1 rounded-full" />
        <IoIosArrowForward onClick={sideLeft} className="w-6 h-6 md:hidden absolute top-[17rem] right-2 cursor-pointer bg-white p-1 rounded-full" />

        <div id="slide" className="w-full md:w-full flex p-10  scroll-smooth flex-no-wrap overflow-x-scroll scrollbar-hide scrolling-touch pl-[11rem] md:pl-none items-start  justify-center gap-8">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig" className="custom-animation">
<div className=" border bg-white p-4 w-[20rem] md:w-[17rem] ml-[36rem] md:-ml-32 rounded-xl">
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
<div className="border bg-white p-4 w-[20rem] md:w-[17rem] rounded-xl">
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
<div className="border bg-white p-4 w-[21rem] md:w-[17rem] rounded-xl">
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

export default HomeClient;
