'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Projectdata, ProjectType } from '../data'
import Image from 'next/image'
import Link from 'next/link'


const Portfoliopage = () => {
  const ref = useRef()
  const {scrollYProgress}=useScroll({target:ref});
  // const x=useTransform(scrollYProgress,[0,1],["0%","-65%"])
  const x=useTransform(scrollYProgress,[0,1],["0%","-80%"])



  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>

      <div className='h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] mb-10 flex items-center justify-center sm:text-5xl md:text-6xl lg:text-7xl text-4xl text-center'>My Works</div>
        <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
         <motion.div style={{x}} className='flex'>
            <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300`}/>
            {
              Projectdata.map((project: ProjectType) => (

                <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`} key={project.id}>
                  <div className='flex flex-col gap-5 text-white'>
                    <h1 className='text-xl font-bold md:text-4xl lg:text-5xl xl:text-5xl'>{project.title}</h1>
                    <div className='relative h-56 w-64 md:w-96 md:h-64 lg:w-[500px] mt-5 lg:h-[300px] xl:w-[600] xl:h-[280px] '  >
                      <Image src={project.image1} alt='image1' width={350} height={280}  className='rounded-md text-start'/>
                    </div>
                    <p className='w-80 md:w-96  lg:w-[600px] xl:w-[600] text-sm sm:text-md'>{project.description}</p>
                    <div className='flex gap-5 flex-wrap'>
                      {
                        project.tech.map((lan => (
                          <div className='rounded p-1 sm:p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black w-fit'>{lan}</div>
                        )))
                      }
                    </div>
                    <Link className='flex sm:justify-end justify-start ' href={project.code}><button className='p-2 text-sm  md:p-4 md:text-md lg:py-2 lg:px-5 ml-0 lg:text-lg bg-white text-black font-semibold m-2 rounded '>See Code</button></Link>
                  </div>

                </div>

              ))
            }
            
         </motion.div>

       
          
        </div>
        
      </div>
      <div className='h-screen mt-5 w-screen flex flex-col gap-10 items-center justify-center text-center'>
        <h1 className='sm:text-5xl md:text-6xl lg:text-7xl text-3xl'>Do you have a Project?</h1>
        <div className='relative'>
          <motion.svg animate={{rotate:360}} transition={{duration:8,ease:'linear',repeat:Infinity}} viewBox="0 0 300 300" className='w-64 h-64 md:w-[400px] md:h-[400px]'>
            <defs>
              <path
                id="circulePath"
                d="M 150,150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0 , 1 -120 ,0" />
            </defs>
            <text fill='#000'>
              <textPath xlinkHref='#circulePath' className='text-xl'>Frontend and Backend Developer</textPath>
            </text>
          </motion.svg>
          <Link href="/contact" className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 bottom-0 right-0 m-auto bg-black text-white rounded-full flex justify-center items-center'>Hire Me</Link>
        </div>

      </div>

    </motion.div>
  )
}

export default Portfoliopage