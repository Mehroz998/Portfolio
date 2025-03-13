import React, { useState } from 'react'
import {Bounce, Flip, toast, Zoom } from 'react-toastify';
import { MdEmail , MdLocalPhone } from "react-icons/md";
import { FaGithub , FaLinkedin } from "react-icons/fa";
import {motion} from "motion/react"

const Contact = () => {
    const [info , setInfo] = useState({
        name:'',
        email:'',
        contact:'',
        message:''
    })

    const handleChange = (e)=>{
        const {name , value} = e.target
        setInfo({
            ...info, [name]:value,
        })
    }

    // const handleSubmit = (e)=>{
    //     e.preventDefault()
    //     if(info.name && info.email && info.contact && info.message){
    //         setInfo({
    //             name:'',
    //             email:'',
    //             contact:'',
    //             message:''
    //          })
    //          toast.success("Sent Succesfully",{
    //             position:"top-center",
    //             autoClose:1000,
    //             pauseOnHover: false,
    //             transition: Bounce,
    //          })
    //     }
    //     else{
    //         toast.error("All fields Required",{
    //             position:"top-center",
    //             autoClose:1000,
    //             pauseOnHover: false,
    //             transition: Bounce,
    //         })
    //     }
        
         
    // }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://formspree.io/f/xgvaedwo", {
          method: "POST",
          body: JSON.stringify(info),
          headers: {
            Accept: "application/json",
          },
        });
        if (response.ok) {
            toast.success("Sent Succesfully",{
                            position:"top-center",
                            autoClose:1000,
                            pauseOnHover: false,
                            transition: Bounce,
                         })
            setInfo({
                name:'',
                email:'',
                contact:'',
                message:''
            })
        } else {
          toast.error("Oops! There was a problem submitting your form.",{
                        position:"top-center",
                        autoClose:1000,
                        pauseOnHover: false,
                        transition: Bounce,
                    })
        }
      };

  return (
    <div id='Contact' className='bg-black flex justify-center marker:selection'>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className='w-[90%] flex items-center flex-col my-8'>
            <motion.h1 initial={{y:-20 , opacity:0}} whileInView={{y:0 , opacity:1}} transition={{duration:0.5}} className='text-5xl text-red-600 font-bold mb-10'>Contact Me</motion.h1>
            <div className='flex w-[100%] gap-6 flex-col md:flex-row'>
                <div className='md:w-[50%]'>
                    <div className='md:mx-10 mx-5'>
                        <motion.h1 initial={{x:-20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5 , delay:0.3}} className='text-3xl mb-8 hidden md:block'>Contact</motion.h1>
                        <div className='flex flex-col gap-2 text-lg'>
                            <motion.div initial={{x:-20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5,delay:0.4}} className='flex items-center gap-4 md:text-xl'><MdEmail /> <a href='mailto:mehrozali997@gmail.com' className='underline'>mehrozali997@gmail.com</a></motion.div>
                            <motion.div initial={{x:-20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5,delay:0.45}} className='flex items-center gap-4 md:text-xl'><MdLocalPhone /> <a href='tel:+923162915219' className='underline'>0316-2915219</a></motion.div>
                            <motion.div initial={{x:-20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5,delay:0.50}} className='flex items-center gap-4 md:text-xl'><FaLinkedin /> <a href='https://www.linkedin.com/in/mehrozali998/' target='_blank' className='underline'>linkedin.com/in/mehrozali998/</a></motion.div>
                            <motion.div initial={{x:-20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5,delay:0.55}} className='flex items-center gap-4 md:text-xl'><FaGithub /><a href='https://github.com/Mehroz998' target='_blank' className='underline'>github.com/Mehroz998</a></motion.div>
                        </div>
                    </div>
                </div>
                <div className='md:w-[50%] text-black mx-5'>
                    <form onSubmit={handleSubmit} action="" className='gap-y-4 flex flex-col'>
                        <motion.input initial={{x:20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5,delay:0.5}} type="text" onChange={handleChange} value={info.name} placeholder="Your Name" name='name' className="input input-bordered w-full " />
                        <motion.input initial={{x:20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5,delay:0.55}} type="email" placeholder="Your Email" onChange={handleChange} value={info.email}  name='email' className="input input-bordered w-full " />
                        <motion.input initial={{x:20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5,delay:0.6}} type="text" placeholder="Contact info" onChange={handleChange} value={info.contact} name='contact' className="input input-bordered w-full " />
                        <motion.textarea
                            initial={{x:20 , opacity:0}} whileInView={{x:0 , opacity:1}} transition={{duration:0.5,delay:0.65}} 
                            name='message'
                            onChange={handleChange} value={info.message}
                            placeholder="Message"
                            className="textarea textarea-bordered textarea-sm w-full">      
                        </motion.textarea>
                        <motion.button initial={{scale:0 , opacity:0}} whileInView={{scale:1 , opacity:1}} transition={{duration:0.5 , delay:0.3}} type='submit' className=' max-w-fit px-4 py-2 rounded-xl border-[2px] border-red-600 text-white hover:bg-red-600 hover:duration-200'>Submit</motion.button>
                    </form>
                </div>
                
            </div>
        </motion.div>
    </div>
  )
}

export default Contact