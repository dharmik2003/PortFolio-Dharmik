'use client'
import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser';
import dotenv from 'dotenv'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import github from './../../../public/github.png'
import linkedin from './../../../public/linkedin.png'
import gfg from './../../../public//images/gfg.png'
import LeetCode from './../../../public//images/LeetCode.png'


const Contactpage = () => {
  const text='Say Hello'
  dotenv.config();
  const [Success, setSuccess]=useState(false)
  const [Error, setError]=useState(false)


  console.log("NEXT_PUBLIC_SERVICEID", process.env.NEXT_PUBLIC_SERVICEI)
  const form = useRef();

  const routes=useRouter()
  const formRef = useRef(null);
  const sendEmail = (e:any) => {
    console.log("1")
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const serviceId = "service_t94j2tf";
    const templateId = "template_9qydt2v";
    const publicId = "occPMpd0Hz13mBXNY";

    console.log("1")

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicId,
      })
      
      .then(
        (result:any) => {
          console.log("2")
          setSuccess(true);
          formRef.current.reset();
          routes.push('/')
        },
        (error:any) => {
          console.log("3", error)
          
          setError(true);
        }
      );
  };

  return (
    <motion.div className="min-h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}> 

      <div className='h-full mt-10 justify-center items-center flex flex-col gap-5 sm:gap-10 bg-gradient-to-b from-blue-50 to-red-100 lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
        <div className='1/2 lg:h-full lg:w-1/2 flex sm:gap-8 gap-5 flex-col justify-center items-center text-5xl'>
          <div>
            {text.split("").map((letter,index)=>(
              <motion.span initial={{opacity:1}} animate={{opacity:0}} transition={{duration:3,repeat:Infinity,delay:index*0.1}} key={index}>{letter}</motion.span>
            ))}😊
          </div>
          <div className='  flex gap-4 w-1/3 justify-center'>
            <Link href={"https://github.com/dharmik2003"} target="_blank"><Image src={github} alt="github" width={34} height={34} /></Link>
            <Link href={"https://www.linkedin.com/in/dharmik2003/"} target="_blank"><Image src={linkedin} alt="github" width={34} height={34} /></Link>
            <Link href={"https://www.geeksforgeeks.org/user/dharmik99/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"} target="_blank"><Image src={gfg} alt="github" width={54} height={4} /></Link>
            <Link href={"https://leetcode.com/u/Dharmik2003/"} target="_blank"><Image src={LeetCode} alt="github" width={45} height={34} /></Link>
          </div>
        </div>
        <form onSubmit={sendEmail} ref={form} className='1/2 mb-5 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl border flex flex-col gap-8 justify-center p-5 lg:p-14'>
          <span>Dear Dharmik,</span>
          <textarea rows={5} placeholder="Write mail" className='bg-transparent border-b-2 border-b-black outline-none resize-none' name='user_message'/>
          <span>My Email address is:</span>
          <input type='text' placeholder='Enter Email' name='user_email' className='bg-transparent border-b-2 border-b-black outline-none'/>
          <span>Regards</span>
          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>Send</button>
          {Success && <span className='text-green-600 font-semibold'>Your message has been sent Successfully!</span>}
          {Error && <span className='text-red-600 font-semibold'>Something went Wrong!</span>}
        </form>

      </div>

    </motion.div>
  )
}

export default Contactpage