import React from "react";
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import reactIcon from '../assets/atom.png'
import jsIcon from '../assets/js.png'
import iosIcon from '../assets/path 3339.png'
import pythonIcon from '../assets/python.png'
import androidIcon from '../assets/android.png'

function HomeTech() {
 
  function sliderRight() {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollRight - 500;
  }
  function sideLeft() {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  }
  return (
    <div className="w-full  md:h-[90vh] relative   p-10 ">
      <div className="max-w-4xl m-auto  ">
        <h1 className="text-center text-4xl text-sky-600   font-bold mb-6">Technologies</h1>
        <p className="text-center  ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci orem ipsum
          dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
          euismod
        </p>
      </div>
      <IoIosArrowBack
        onClick={sliderRight}
        className="z-[1] absolute md:top-[21rem] top-[27rem] left-12 cursor-pointer bg-white md:bg-gradient-to-l from-sky-400 via-sky-500 to-sky-600 p-1   h-8 w-8 rounded-full md:left-5"
      />
      <IoIosArrowForward
        onClick={sideLeft}
        className="z-[1]  absolute top-[27rem] right-[40px]  md:top-[21rem] bg-white md:bg-gradient-to-l from-sky-600 via-sky-500 to-sky-400 p-1 h-8 cursor-pointer w-8 rounded-full  md:-right-2"
      />
      <div
        id="slider"
        class="flex w-[21rem] md:w-[70rem]  gap-[2rem] md:mx-4 overflow-y-hidden scroll-smooth  overflow-x-scroll scrollbar-hide   items-start my-8"
      >
        <AnimationOnScroll animateIn="animate__fadeInLeftBig ">
        <div class="flex-none w-[21rem] md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3  ">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={androidIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center font-medium  ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInDownBig">
        <div class="flex-none w-[20rem] md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={iosIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInUpBig">
        <div class="flex-none w-[21rem] md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={pythonIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInRightBig">
        <div class="flex-none w-[21rem] md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={reactIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
        </AnimationOnScroll>
        <div class="flex-none w-full md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={jsIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
        <div class="flex-none w-full md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={jsIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
        <div class="flex-none w-full md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={jsIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
        <div class="flex-none w-full md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={jsIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
        <div class="flex-none w-full md:w-[16rem] bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600   md:pb-4 text-white border rounded-2xl p-3">
          <div class="aspect-w-16 aspect-h-9 flex justify-center">
            <img
              className="w-20 h-20 mt-4"
              src={jsIcon}
              alt=""
            />
          </div>
          <div class="px-4 py-2">
            <div class="text-lg leading-6 font-medium space-y-1">
              <h3 class="font-bold text-center  text-white text-3xl mb-2">
                Android
              </h3>
            </div>
            <div class="text-lg mt-4">
              <p class=" text-center ">
                “High standard and excellent quality ovn digita“Hibusiness grow
                in digital.”l.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeTech;
