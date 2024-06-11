import React from 'react'
import layer from "../assets/layer 2.png";
import iso from "../assets/Group 3776.png";

function AboutAwards() {
  return (
    <div>
       <div className="w-full md:h-[38vh] h-[18vh]">
          <div className="text-center text-blue-600 font-bold text-2xl md:text-4xl mt-8 md:mt-4">
            <h1>Awards & Recognitions</h1>
          </div>
          <div className="flex justify-center gap-2 md:gap-16 items-center justify-center mt-8 md:mt-6">
            <img className="w-20 h-20 md:w-36 md:h-36" src={iso} alt="" />
            <img className="md:w-[30rem] md:h-28 w-[16rem] h-16" src={layer} alt="" />
          </div>
        </div>
    </div>
  )
}

export default AboutAwards