import React from "react";
import { TypeAnimation } from "react-type-animation";
import {motion} from "motion/react"

const Main = () => {
  return (
    <div id="Home" className="w-full flex justify-center  xl:m-auto bg-black">
      <div className="w-[90%] flex my-[60px]">
        <div className="flex-auto flex flex-col justify-center gap-6">
          <div 
            className="text-4xl font-bold">
            <h1>
              <TypeAnimation
                sequence={[
                  "Hello,\nI am Mehroz Ali", // Pehle normal text
                  2000, // Thoda wait karega
                  "", // Phir sab delete karega
                  1000,
                  "A MERN Stack\nDeveloper.", // Phir MERN Stack Developer type hoga
                  2000,
                ]}
                wrapper="span"
                speed={200}
                deletionSpeed={30}
                style={{ display: "block", whiteSpace: "pre-line" }} // Line break support
                repeat={Infinity} // Infinite repeat
              />
            </h1>
          </div>
          <motion.p
          initial={{y:-20 , opacity:0}}
          whileInView={{y:0 , opacity:1}}
          transition={{duration:0.4 , delay:0.3}} 
          className="text-xl">
            I am a MERN Stack Developer, specializing in creating modern,
            responsive, and high-performance web applications.
          </motion.p>
          <div className="flex gap-2 flex-wrap">
            <motion.a
              initial={{y:30 , opacity:0}}
              whileInView={{y:0 , opacity:1}}
              transition={{duration:0.6 , delay:0.6}}
              download
              href="/Mehroz_Ali_CV.pdf"
              className="border-[3px] text-white border-red-600 bg-red-600 py-2 px-4 rounded-3xl text-center max-w-fit text-xl hover:bg-red-700 cursor-pointer">
                Download CV
              </motion.a>
              <motion.a
              initial={{y:30 , opacity:0}}
              whileInView={{y:0 , opacity:1}}
              transition={{duration:0.6 , delay:0.6}}
              href="/Mehroz_Ali_CV.pdf"
              target="_blank"
              className="border-[3px] text-red-600 border-red-600 py-2 px-4 rounded-3xl text-center max-w-fit text-xl hover:bg-red-600 hover:text-white cursor-pointer">
                View CV
            </motion.a>
          </div>
        </div>
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6 , delay:0.5}} 
        className="hidden lg:block w-2/5">
          <img src="/pngwing.com.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Main;
