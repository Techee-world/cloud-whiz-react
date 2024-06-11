import React from 'react'

function ImageSection() {
  return (
    <div>
        <div className=' md:h-[80vh] mb-10 md:mb-none flex-col-reverse w-full  pt-10 md:pl-none md:pt-none  flex md:flex-row  gap-10 md:gap-20 justify-center items-center' >
            <div className='md:w-[36rem] flex flex-col items-center justify-center md:justify-start md:items-start w-full animate-fadeInDown md:mb-none '>
            <h1 className="md:w-[32rem] w-[25rem] text-center text-black text-[22px] md:text-3xl md:text-3xl  md:mb-4 font-bold"> Kerala’s Best IT Company Based </h1>
                <h1 className='md:text-8xl text-center md:text-start md:w-none text-[45px] font-bold text-white mb-4 text-outline mb-8 tracking-wider -mt-2'>
                IT Training <p className='text-center md:text-start -mt-6 md:m-0'> Campus</p>
                </h1>
                <button className="transition duration-500 ease-in-out h-[50px] text-lg md:h-9 md:text-base  hover:-translate-y-1 hover:scale-110 px-4 md:px-4 py-2 md:py-[6px] bg-sky-500 hover:font-medium font-medium text-white hover:bg-sky-600 rounded-sm w-[23rem] md:w-[12rem]  mb-4 md:mb-10">
            Apply Now
          </button>
            </div>
            <div className='animate-fadeInDown'>
                <img className='w-72 h-72 md:w-96 md:h-96' src="https://i.imgur.com/q3NcLTG.png" alt="" />
            </div>
        </div>
       
    </div>
  )
}

export default ImageSection