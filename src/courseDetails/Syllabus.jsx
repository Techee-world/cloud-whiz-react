import React, { useState } from 'react'
import { IoIosArrowForward , IoIosArrowBack} from "react-icons/io";


function Syllabus() {
   
  return (
    <div className='h-[80vh]'>
        <div className='flex ml-20 items-center justify-center'>
            <div className='flex flex-col  justify-center gap-3 '>

               <div className='flex gap-6 justify-between cursor-pointer   items-center '>
                <div className='border-blue-700 rounded-l-xl p-2 flex border-y-2 border-l-2  '>
                <h1 className=' w-[20rem] text-xl font-lg'>syllabus</h1>
                <IoIosArrowForward  className="w-8 h-8  shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer bg-white p-1 rounded-full" />
                </div>
                <p className='w-[30rem] border h-[20rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, veniam. dolor sit amet consectetur adipisicing elit. Mollitia, veniam.</p>
               </div>

               <div className='flex gap-6 justify-between cursor-pointer   rounded-l-xl p-2 items-center' >
                <div className='border-blue-700 rounded-l-xl p-2 flex'>
                <h1 className='w-[20rem]  text-xl font-lg'>Benefits of students</h1>
                <IoIosArrowForward  className="w-8 h-8 cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-white p-1 rounded-full" />
                </div>
                <p className='w-[30rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, veniam.m dolor sit amet consectetur adipisicing elit. Mollitia, veniam.</p>
               </div>

               <div  className='flex gap-6 justify-between  cursor-pointer  rounded-l-xl p-2 items-center'  >
                <h1 className=' text-xl font-lg'>Job Oppartunities</h1>
                <IoIosArrowForward  className="w-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-8 cursor-pointer bg-white p-1 rounded-full" />
               </div>

               <div  className='flex gap-6 justify-between cursor-pointer  rounded-xl p-2 items-center ' >
                <h1 className=' text-xl font-lg'>Job sapport</h1>
                <IoIosArrowForward  className="w-8 h-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer bg-white p-1 rounded-full" />
               </div>

               <div className='flex gap-6 justify-between cursor-pointer  rounded-xl p-2 items-center '>
                <h1 className=' text-xl font-lg '>Course Summary</h1>
                <IoIosArrowForward  className="w-8 h-8  shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer bg-white p-1 rounded-full" />
               </div>

               <div className='flex justify-between gap-6 cursor-pointer  rounded-xl p-2 items-center '>
                <h1 className=' text-xl font-lg '>who should take this course</h1>
                <IoIosArrowForward  className="w-8 h-8   shadow-[0_8px_30px_rgb(0,0,0,0.12)] cursor-pointer bg-white p-1 rounded-full" />
               </div>

            </div>
        </div>
    </div>
  )
}

export default Syllabus