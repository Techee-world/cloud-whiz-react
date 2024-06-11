
import React,{useEffect} from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Coursol() {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className="h-[50rem] p-20 ">
    <div
      className="bg-gray-800 text-white text-center p-10  delay-[300ms] duration-[10s] taos:[transform:translate3d(50px,500px,0)] taos:opacity-1 " data-taos-offset="300" data-aos="fade-right"
    >
      MyFunctionalComponent
    </div>
    </div>
  );
}