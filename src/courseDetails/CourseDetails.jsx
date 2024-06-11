import React from "react";

function CourseDetails() {
  return (
    <div>
      <div className="bg-sky-600 md:h-[90vh] h-[80vh]  flex-col w-full pl-10  md:pl-none md:pt-none  flex md:flex-row  gap-10 md:gap-20  justify-center items-center">
        <div className="md:w-[26rem] text-center md:text-start w-[22rem] animate-fadeInDown md:mb-none ">
          <img className="w-16 h-16 inline-block" src="https://img.icons8.com/?size=96&id=7I3BjCqe9rjG&format=png" alt="" /> <span className="text-3xl text-white">Flutter</span>
          <h1 className="md:text-7xl text-4xl font-bold text-white mb-4">
          Flutter App
Development
Course
          </h1>
          <p className="text-white mb-3 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis optio vero minima temporibus id magni?</p>
          <button className="mb-3 transition duration-500 ease-in-out  hover:-translate-y-1 hover:scale-110 px-4 md:px-6 py-2 md:py-[6px] bg-white text-blue-600 hover:font-medium font-medium  w-[12rem]   hover:bg-white rounded-sm">
            Apply Now
          </button>
          <div className="flex   items-center justify-center md:justify-start text-white  gap-2">
                <img className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/128/8358/8358787.png" alt="" />
                <p>duration: 60 days</p>
            </div>
        </div>
        <div className="animate-fadeInDown">
          <img
            className="w-70 h-80"
            src="https://i.imgur.com/q3NcLTG.png"
            alt=""
          />
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0284C7"
          fill-opacity="1"
          d="M0,32L30,48C60,64,120,96,180,101.3C240,107,300,85,360,64C420,43,480,21,540,26.7C600,32,660,64,720,101.3C780,139,840,181,900,176C960,171,1020,117,1080,106.7C1140,96,1200,128,1260,138.7C1320,149,1380,139,1410,133.3L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default CourseDetails;
