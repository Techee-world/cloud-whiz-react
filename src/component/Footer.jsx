import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'

function Footer() {
  return (
    <>
    <div className='w-full bg-gradient-to-tl from-sky-300 to-sky-500 py-5'>
        <div className='container mx-auto flex flex-col md:flex-row justify-center md:justify-center items-center text-white py-5'>
            <div className='max-w-sm text-center md:text-left mb-6 md:mb-0'>
                <h1 className='text-lg font-medium mb-3'>About us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores dolor, quae molestiae deserunt quia sapiente?</p>
            </div>
            <div className='text-lg text-center md:text-left flex flex-col flex-wrap gap-6'>
                <div className='md:flex md:flex-row gap-8'>
                <h1 className='font-medium mb-3 md:mb-0'>Quick Links:</h1>
                <a href="#" className='block'>Home</a>
                <a href="#" className='block'>About</a>
                <a href="#" className='block'>Services</a>
                <a href="#" className='block'>Blog</a>
                <a href="#" className='block'>Careers</a>
                </div>
            <div className='flex gap-6 justify-center md:justify-start mt-4 md:mt-0'>
                <div className='bg-blue-500 p-1 rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <img className='w-8 h-8 p-1' src={facebook} alt="" />
                </div>
                <div className='bg-blue-500 p-1 rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <img className='w-7 h-7 p-1' src={instagram} alt="" />
                </div>
                <div className='bg-blue-500 p-1 rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <img className='w-8 h-8 p-1' src={linkedin} alt="" />
                </div>
                <div className='bg-blue-500 p-1 rounded-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                    <img className='w-8 h-8 p-1' src={youtube} alt="" />
                </div>
            </div>
            </div>
        </div>
    </div>
    <div className='bg-gray-800 w-full h-6'></div>
    </>
  )
}

export default Footer
