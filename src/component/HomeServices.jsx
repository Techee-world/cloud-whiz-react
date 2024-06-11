import React from "react";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { IoIosArrowForward } from "react-icons/io";
import mobile from "../assets/Group 3634.png";
import digital from "../assets/Group 3635.png";
import server from "../assets/Group 3636.png";
import working from "../assets/Group 3637.png";
import brand from "../assets/Group 3639.png";
import web from "../assets/Group 3641.png";
import cyber from "../assets/Group 3640.png";
import hosting from "../assets/Group 3643.png";

function HomeServices() {
  return (
    <div className="w-full bg-gradient-to-tl font-Poppins from-sky-300 to-sky-500 p-4 md:p-10">
      <div className="max-w-4xl mx-auto text-white">
        <h1 className="text-center text-4xl md:text-4xl font-bold mb-4 md:mb-6">
          Our Services
        </h1>
        <p className="text-center text-lg font-medium ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci orem
          ipsudipiscing elit,
        </p>
      </div>
      <div className="mt-4 md:mt-10 mx-2 md:mx-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="bg-gradient-to-tl hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] from-sky-400 via-sky-500 to-sky-600 rounded-xl shadow-md ">
            <div className="p-3 h-[14rem] flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-10 md:h-12 w-16 h-20 inline-block"
                  src={mobile}
                  alt=""
                />
                <h1 className="md:text-xl font-medium  text-2xl w-40 md:w-none mb-2 text-white">
                  Mobile App Development
                </h1>
              </div>
              <p className="h-20 w-64 md:w-[13rem] md:pl-0 pl-10 p-2 font-medium text-white">
                "High standard and excellent quality of work. "High
                standabusiness grow in digital."
              </p>

              <IoIosArrowForward className="mt-2 shadow-[2px_2px_4px_rgba(0,0,0,0.38)] bg-white p-1 rounded-full md:ml-40 ml-64 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div
            className="bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600 hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  rounded-xl shadow-md
        "
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-reset="true"
            data-te-animation="[slide-right_1s_ease-in-out]"
          >
            <div className="p-3 h-[14rem] flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-10 md:h-10 w-16 h-16 inline-block"
                  src={digital}
                  alt=""
                />
                <h1 className="md:text-xl font-normal md:font-medium  text-2xl mb-2 w-40 md:w-none text-white">
                  Digital Marketing
                </h1>
              </div>
              <p className="h-20 w-64 md:w-[13rem] md:pl-0 pl-10 p-2  text-white">
                "High standard and excellent quality of work. "High
                standabusiness grow in digital."
              </p>
              <IoIosArrowForward className="mt-2 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.38)] p-1 rounded-full md:ml-40 ml-64 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="bg-gradient-to-tl hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  from-sky-400 via-sky-500 to-sky-600 rounded-xl shadow-md">
            <div className="p-3 h-[14rem] flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-10 md:h-10 w-16 h-16 inline-block"
                  src={server}
                  alt=""
                />
                <h1 className="md:text-xl font-normal md:font-medium   text-2xl mb-2 w-40 md:w-none text-white">
                  Server Maintenance
                </h1>
              </div>
              <p className="h-20 w-64 md:w-[13rem] md:pl-0 pl-10 p-2  text-white">
                "High standard and excellent quality of work. "High
                standabusiness grow in digital."
              </p>
              <IoIosArrowForward className="mt-2 bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.38)] p-1 rounded-full md:ml-40 ml-64 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="bg-gradient-to-tl hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  from-sky-400 via-sky-500 to-sky-600 rounded-xl shadow-md">
            <div className="p-3 h-[14rem] flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-16  md:h-12 w-16 h-16 inline-block"
                  src={working}
                  alt=""
                />
                <h1 className="md:text-xl font-normal md:font-medium text-2xl mb-2 w-40 text-white">
                  Co Working Spaces
                </h1>
              </div>
              <p className="h-20 w-64 md:w-[13rem] md:pl-0 pl-10 p-2  text-white">
                "High standard and excellent quality of work. "High
                standabusiness grow in digital."
              </p>
        
              <IoIosArrowForward className="mt-2 bg-white p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.38)] rounded-full md:ml-40 ml-64 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="bg-gradient-to-tl hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)]  from-sky-400 via-sky-500 to-sky-600 rounded-xl shadow-md">
            <div className="p-3 h-[14rem] flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-10 md:h-10 w-16 h-16 inline-block"
                  src={brand}
                  alt=""
                />
                <h1 className="md:text-xl font-normal md:font-medium  text-2xl mb-2 w-40 md:w-none text-white">
                  Branding
                </h1>
              </div>
              <p className="h-20 w-64 md:w-[13rem] md:pl-0 pl-10 p-2  text-white">
                "High standard and excellent quality of work. "High
                standabusiness grow in digital."
              </p>
              <IoIosArrowForward className="mt-2 bg-white p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.38)] rounded-full md:ml-40 ml-64 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600 rounded-xl shadow-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <div className="p-3 h-[14rem] flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-10 md:h-10 w-16 h-16 inline-block"
                  src={web}
                  alt=""
                />
                <h1 className="md:text-xl font-normal md:font-medium  text-2xl mb-2 w-40 md:w-none text-white">
                  Web Development
                </h1>
              </div>
              <p className="h-20 w-64 md:w-[13rem] md:pl-0 pl-10 p-2  text-white">
                "High standard and excellent quality of work. "High
                standabusiness grow in digital."
              </p>
              <IoIosArrowForward className="mt-2 bg-white p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.38)] rounded-full md:ml-40 ml-64 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600 rounded-xl shadow-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <div className="p-3 h-[14rem] flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-10 md:h-10 w-16 h-16 inline-block"
                  src={cyber}
                  alt=""
                />
                <h1 className="md:text-xl font-normal md:font-medium  text-2xl mb-2 w-40 md:w-none text-white">
                  Cyber Security
                </h1>
              </div>
              <p className="h-20 w-64 md:w-[13rem] md:pl-0 pl-10 p-2  text-white">
                "High standard and excellent quality of work. "High
                standabusiness grow in digital."
              </p>
              <IoIosArrowForward className="mt-2 bg-white p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.38)] rounded-full md:ml-40 ml-64 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll animateIn="animate__fadeInLeftBig">
          <div className="bg-gradient-to-tl from-sky-400 via-sky-500 to-sky-600 rounded-xl shadow-md hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
            <div className="p-3 h-[14rem] flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="md:w-10 md:h-10 w-16 h-16 inline-block"
                  src={hosting}
                  alt=""
                />
                <h1 className="md:text-xl font-normal md:font-medium  text-2xl mb-2 w-40 md:w-none text-white">
                  Web Hosting
                </h1>
              </div>
              <p className="h-20 w-64 md:w-[13rem] md:pl-0 pl-10 p-2  text-white">
                "High standard and excellent quality of work. "High
                standabusiness grow in digital."
              </p>
              <IoIosArrowForward className="mt-2 bg-white p-1 shadow-[2px_2px_4px_rgba(0,0,0,0.38)] rounded-full md:ml-40 ml-64 w-8 h-8 cursor-pointer" />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}

export default HomeServices;
