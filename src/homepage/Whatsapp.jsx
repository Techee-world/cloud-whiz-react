import React from 'react'
import whatsapp from '../assets/whatsapp.png'
import call from '../assets/call.png'

function Whatsapp() {
  return (
    <div >
        <div className='flex fixed z-[9] bottom-0 w-full items-center justify-center '>
            <div className='bg-green-400 w-full py-2 px-20'>
                <img className='w-7 h-7' src={whatsapp} alt="" />
            </div>
            <div className='bg-red-500 w-full py-2 px-20'>
                <img  className='w-7 h-7' src={call} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Whatsapp