'use client'
import React, { useRef } from 'react'
import { motion, useInView, useScroll } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Mind from './../../../public/mind-icon-2.png'

const Aboutpage = () => {

  const containerRef=useRef()
  const {scrollYProgress}=useScroll({container:containerRef})
  const skilRef=useRef()
  const isSkillRefView = useInView(skilRef, { margin: '-100px', once: true })
  const experienceRef =useRef()
  const isexperienceView = useInView(experienceRef, { margin: '-100px', once: true })

  console.log("scrollYProgress",scrollYProgress)

  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>

     {/* <div className='h-full overflow-scroll'> */}
        {/* container */}
      <div className='h-full overflow-scroll lg:flex mt-10'>

          {/* text container */}
        <div className='p-4 sm:p-8 md:p-12 lg:p-20 xl:p-44 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
            {/* biography container*/}
            <div className='flex flex-col gap-12 justify-center'>
              <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
              <p className='text-lg'>I am a full-stack developer and I have to complete computer engineering. I have experience in this language HTML, CSS, JavaScript, React, TypeScript, Node.Js, Express.Js, PostgreSQL, and MongoDB. I have completed some projects in this language. I have published one research paper on Blockchain technologies and I have taken copyright in environment helpful app.</p>
            </div>

            {/* skill */}

            <div className='flex flex-col gap-12 justify-center' ref={skilRef}>
              {/* skill title */}
            <motion.h1 initial={{ x: '-300px' }} animate={isSkillRefView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className='font-bold text-2xl'>SKILLS</motion.h1>
              {/* SKILL LIST */}

            <motion.div initial={{ x: '-300px' }} animate={isSkillRefView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className=''>
                <h1 className='font-bold text-xl mb-2'>Frontend</h1>
                <div className='flex gap-4 flex-wrap'>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>HTML</div>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>CSS</div>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>JavaScript</div>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>React</div>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>Typescript</div>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>Node.Js</div>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>Express.Js</div>
                </div>
              </motion.div>
            <motion.div initial={{ x: '-300px' }} animate={isSkillRefView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className=''>
                <h1 className='font-bold text-xl mb-2'>Backend</h1>
                <div className='flex gap-4 flex-wrap'>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>Node.Js</div>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>Express.Js</div>
                </div>
            </motion.div>
            <motion.div initial={{ x: '-300px' }} animate={isSkillRefView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className=''>
                <h1 className='font-bold text-xl mb-2'>Database</h1>
                <div className='flex gap-4 flex-wrap'>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>PostgreSQL</div>
                  <div className='rounded p-2 text-sm cursor-default bg-black text-white hover:bg-white hover:text-black'>MongoDB</div>
                </div>
              </motion.div>
            </div>
            {/* Experience container*/}
          <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
              {/* Experience title */}
              <motion.h1 initial={{x:'-300px'}} animate={isexperienceView ? {x:"0"} :{}} transition={{delay:0.2}} className='font-bold text-2xl'>Experience</motion.h1>
              {/* Experience LIST */}
            <motion.div initial={{ x: '-300px' }} animate={isexperienceView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className=''>
                {/* first */}
                <div className='flex justify-between h-48'>
                  {/* left */}
                  <div className='w-1/3'>
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Research Intership</div>
                    <div className='p-3 pl-0 text-sm italic'>I have to completed research internship in Blockchain Technology</div>
                    <div className='text-red-400  text-sm font-semibold'>1 May 2023 to 30 Jun 2023</div>
                  <Link href={'https://www.swansea.ac.uk/'} target="_blank" className='p-1 bg-white text-sm rounded mt-2 font-semibold w-fit hover:bg-black hover:text-white cursor-pointer'>Swansea University</Link>
                  </div>
                  {/* center line */}
                <div className='w-1/6 flex justify-center '>
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                    </div>
                  </div>
                  {/* right */}
                  <div className='w-1/3'>
                  
                  </div>
                </div>
                {/* second */}
                <div className='flex justify-between h-48'>
                  {/* left */}
                  <div className='w-1/3'>

                  </div>
                  {/* center line */}
                  <div className='w-1/6 flex justify-center '>
                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                      <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                    </div>
                  </div>
                  {/* right */}
                  <div className='w-1/3'>
                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-e-lg'>Full Stack Developer Intership</div>
                  <div className='p-3  pl-0 text-sm italic'>I start internship in Propelius Technologies </div>
                    <div className='text-red-400  text-sm font-semibold'>1 Jan 2024 to 1 May 2024 </div>
                  <Link href={'https://propelius.tech'} target="_blank" className='p-1 rounded bg-white text-sm mt-2 font-semibold w-fit hover:bg-black hover:text-white cursor-pointer'>Propelius Technologies</Link>
                  </div>
                </div>

                {/* third */}
              <div className='flex justify-between h-48'>
                {/* left */}
                <div className='w-1/3'>
                  <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Full Stack Developer Job</div>
                  <div className='p-3  pl-0 text-sm italic'>I start Job in Propelius Technologies </div>
                  <div className='text-red-400  text-sm font-semibold'>1 May 2024 to Present</div>
                  <Link href={'https://propelius.tech/'} target="_blank" className='p-1 bg-white text-sm rounded mt-2 font-semibold w-fit hover:bg-black hover:text-white cursor-pointer'>Propelius Technologies</Link>
                </div>
                {/* center line */}
                <div className='w-1/6 flex justify-center '>
                  <div className='w-1 h-full bg-gray-600 rounded relative'>
                    <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                  </div>
                </div>
                {/* right */}
                <div className='w-1/3'>

                </div>
              </div>
               
              </motion.div>
             
            </div>
          </div>
          {/* svg */}
          <div className='hidden lg:block w-1/3 xl:[45%] sticky top-0 z-30'>
          <Image src={Mind} alt="hero" fill className="rounded-xl object-contain" />


          </div>
        </div>
     {/* </div> */}

    </motion.div>
  )
}

export default Aboutpage