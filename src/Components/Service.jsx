import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import {motion} from "motion/react"
import '../App.css'

const Service = () => {
  return (
    <div id="Services" className="bg-black flex justify-center">
      <div className="w-[90%] flex flex-col justify-center items-center mb-[30px]">
        <div className="text-red-600 text-5xl my-8 font-bold">
          <motion.h1 initial={{y:-20 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:0.5}} >Services</motion.h1>
        </div>
        <div className="text-xl mb-8 text-center">
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6 , delay:0.3}}>
            Let's build quality products in programming and designs with my
            sevices.
          </motion.p>
        </div>
        <motion.div initial={{y:30 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:0.8 , delay:0.6}} className="flex gap-6 flex-wrap">
          <div className="flex-1 p-5 bg-gray-600 hover:bg-red-600 hover:-translate-y-2 duration-500 hover:rounded-xl">
            <div className="text-3xl">
              <IoCodeSlash />
            </div>
            <h1 className="text-2xl my-5">Frontend Development</h1>
            <p>
              I create interactive and visually appealing front-end interfaces.
            </p>
          </div>
          <div className="flex-1 p-5 bg-gray-600 hover:bg-red-600 hover:-translate-y-2 duration-500 hover:rounded-xl">
            <div className="text-3xl">
              <FaServer />
            </div>
            <h1 className="text-2xl my-5">Backend Development</h1>
            <p>
              I build robust and scalable server-side applications using Node.js
              and Express.js.
            </p>
          </div>
          <div className="flex-1 p-5 bg-gray-600 transition-all hover:bg-red-600 hover:-translate-y-2 duration-500 hover:rounded-xl">
            <div className="text-3xl">
              <FaDatabase />
            </div>
            <h1 className="text-2xl my-5">Full Stack Development</h1>
            <p>Combinig both Frontend and Backend development skills.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
