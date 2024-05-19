'use client'
import Image from "next/image";
import { motion } from 'framer-motion'
import Link from "next/link";
import { ReactTyped } from "react-typed";
import profileimage from '../../public/dharmik111.jpeg'

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
})

const Homepage = () => {

  const text = "I'm Full Stack Developer 💻"



  return (

    <motion.div className="min-h-full pt-8" initial={{ y: "-200vh" }} animate={{ y:"0%"}} transition={{duration:1}}>
    <div className="flex flex-col gap-8 xl:gap-28 justify-center items-center lg:mt-16  lg:flex-row h-full px-4 sm:px-8 md:px-12 lg:px-18 xl:px-48 ">
      {/* image */}


      <div className="h-[340px] sm:h-[400px] sm:w-[75%] md:w-[60%] w-full lg:w-[48%] xl:w-[38%] xl:h-[450px] flex justify-center relative rounded">
          <Image src={profileimage} alt="hero" fill className="rounded-xl w-[95%] h-[280px] sm:h-[400px] sm:w-[70%] lg:w-[38%]"/>
      </div>
      {/* content */}
      <div className="w-[95%] justify-center lg:h-full lg:w-1/2 flex flex-col gap-8 lg:items-start lg:justify-center">
          <div className="flex justify-start gap-2 flex-col lg:gap-5">

            <h1 className="text-[20px] md:text-2xl text-start">Hello, I am</h1>
            <div style={{ lineHeight: "1.2" }}>
              <h1 className="text-[40px] h-auto font-bold md:text-6xl text-start mt-1">Dharmik</h1>
              <h1 className="text-[45px] font-bold md:text-7xl text-start">Kachhadiya</h1>
            </div>

            {/* <h1 className="text-4xl font-bold md:text-5xl text-start">I am Full Stack Developer</h1> */}

            <motion.span variants={container(1)} initial="hidden" animate="visible" className='lg:pb-6 bg-gradient-to-t mt-4 from-blue-50 to-red-100 via-slate-500 bg-clip-text text-2xl md:text-3xl lg:text-4xl tracking-tight text-transparent' style={{ color: 'black' }}>
              I&apos;m a <ReactTyped
                strings={['Flutter Developer', 'Full Stack Developer', 'Blockchain Developer', 'Quick Learner']}
                typeSpeed={150}
                backSpeed={100}
                loop
              />
            </motion.span>




            {/* <p className="md:text-xl">I am a full-stack developer and I have to complete computer engineering. I have experience in this language HTML, CSS, JavaScript, React, TypeScript, Node.Js, Express.Js, PostgreSQL, and MongoDB. I have completed some projects in this language. I have published one research paper on Blockchain technologies and I have taken copyright in environment helpful app.</p> */}
            <div className="w-full flex gap-4 my-5 ">
              {/* <Link href={"/portfolio"} className="p-4 rounded-lg ring-1 ring-black bg-black text-white ">View My Work</Link> */}
              <Link href={"/portfolio"}>
                <motion.button
                  className="sm:p-4 p-2 rounded-lg ring-1 ring-black bg-black text-white inline-block"
                  whileHover={{ scale: 1.1 }} 
                >
                  View My work
                </motion.button>
              </Link>
              <Link href={"/contact"}>
                <motion.button
                  className="sm:p-4 p-2 rounded-lg ring-1 ring-black inline-block"
                  whileHover={{ scale: 1.1 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </div>
      </div>  
    </div>
    </motion.div>
  )
};

export default Homepage;
