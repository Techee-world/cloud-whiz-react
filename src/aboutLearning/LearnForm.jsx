import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function LearnForm() {
  return (
    <div className=" bg-gradient-to-tl from-sky-300 to-sky-500 h-[45rem] md:h-[35rem] w-full  ">
      <div className=" flex md:flex-row flex-col justify-center items-center">
        <AnimationOnScroll animateIn="animate__fadeInDownBig">
          <div className="ml-20 mt-10 md:mt-none  w-[21rem] ">
            <h1 className="text-5xl text-white mb-4 md:mb-4 font-bold ">
              Lets Get You Started
            </h1>
            <p>
              Please complete the details. Your dedicated course consultant will
              be in touch with you shortly.
            </p>
          </div>
        </AnimationOnScroll>
        <div class="md:w-[40rem] w-[20rem] h-[27rem] md:h-[27rem] mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
          <h2 class="text-2xl font-semibold mb-4">Contact Information</h2>
          <form>
          <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div class="mb-4 rounded-lg   shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                class="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div class="mb-4 rounded-lg   shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="email"
                class="w-full px-4 py-2   border-none rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div class="mb-4 rounded-lg  shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="phone"
                class="w-full px-4 py-2 rounded-lg border-none focus:outline-none focus:border-blue-500"
              />
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div class="mb-4 rounded-lg  shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <input
                type="text"
                id="location"
                name="location"
                placeholder="location"
                class="w-full px-4 py-2 border-none rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div class="mb-4 rounded-lg border-none shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <select
                id="course"
                name="course"
                placeholder="preferred course"
                class="w-full px-4 py-2 rounded-lg border-none focus:outline-none focus:border-blue-500"
              >
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </div>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn="animate__fadeInRightBig">
            <div class="text-center">
              <button
                
                class="bg-sky-500 text-white  w-[12rem] px-4 py-2 rounded-sm hover:bg-sky-600 focus:outline-none transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Submit
              </button>
            </div>
            </AnimationOnScroll>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LearnForm;
