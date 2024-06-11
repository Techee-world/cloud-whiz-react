import React from 'react';
import emailIcon from '../assets/email.png';
import callIcon from '../assets/call.png';
import adressIcon from '../assets/location.png';


function ContactUs() {
  return (
    <div>
      <div className='text-whtie text-center md:max-w-2xl max-w-sm  mx-auto mb-6 md:mb-none'>
        <h1 className='text-4xl font-bold mb-1 text-sky-700'>Contact Us</h1>
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse minus porro harum ab. Eum libero, voluptatem
          illo nihil in quia.
        </p>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 md:mb-16 mb-3'>
        <div className='flex flex-col gap-4 md:gap-8'>
          <div className='flex flex-row gap-4 items-center animate-fadeInLeft'>
            <div className='bg-sky-500 rounded-full p-2'>
              <img className='w-10 h-10 rounded-full p-1' src={callIcon} alt='' />
            </div>
            <div>
              <h1 className='text-xl font-bold'>Number</h1>
              <p className=''>+91 0987654321</p>
            </div>
          </div>

          <div className='flex flex-row gap-4 items-center animate-fadeInLeft'>
            <div className='bg-sky-500 rounded-full p-2'>
              <img className='w-10 h-10 p-1 ' src={emailIcon} alt='' />
            </div>
            <div>
              <h1 className='text-xl font-bold'>Email</h1>
              <p className=''>cloudwhize@gmail.com</p>
            </div>
          </div>

          <div className='flex flex-row gap-4 items-center animate-fadeInLeft'>
            <div className='bg-sky-500 rounded-full p-2'>
              <img className='w-10 h-10 rounded-full p-1' src={adressIcon} alt='' />
            </div>
            <div>
              <h1 className='text-xl font-bold'>Address</h1>
              <p className=''>
                kochi, kalamasseri
                <br />
                90790, Kerala
              </p>
            </div>
          </div>
        </div>
        <div className='animate-fadeInDown'>
          <img className='w-full max-w-md' src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?size=626&ext=jpg&ga=GA1.1.78975299.1696083630&semt=ais" alt='' />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
