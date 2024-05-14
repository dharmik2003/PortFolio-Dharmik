'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import Navlinks from './Navlinks'
import { motion, stagger } from 'framer-motion'
import { IoIosLaptop } from "react-icons/io"; 
import { FaComputer } from "react-icons/fa6";
import github from './../../../public/github.png'
import linkedin from './../../../public/linkedin.png'
import gfg from './../../../public//images/gfg.png'
import LeetCode from './../../../public//images/LeetCode.png'


export interface Links {
    url: string,
    title: string
}

const Navbar = () => {


    const links:Links[] = [
            {url: "/", title: "Home"},
            {url: "/about", title: "About"},
            { url: "/portfolio", title: "Portfolio"},
            {url: "/contact", title: "Contact"}
    ]

    const topVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"        
        }
    }
    const centerVariants={
        closed:{
            opacity:1,
        },
        opened:{
            opacity: 0,               
        }
    }
    const bottomVariants={
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)"
        }
    }
    const listVariants={
        closed: {
            x:"100vw",
        },
        opened: {
            x:0,
            transition:{
                when:'beforeChildren',
                staggerChildren:0.2
            }
        }
    }
    const listItemsVariants ={
        closed: {
            x:-10,
            opacity: 0,
        },
        opened: {
            x:0,
            opacity: 1,
        }
    }

    const [open,setopen]=useState<Boolean>(false)

  return (
    <div className='h-full pt-4 lg:pt-6  flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl'>

        {/* links */}
        <div className='hidden md:flex gap-4 w-1/3'>
              {
                  links.map((link: Links) => (
                      <Navlinks link={link} key={link.title} />
                  ))
              }
        </div>  
        {/* logo */}
        <div className='md:hidden lg:flex xl:w-1/3 xl:justify-center'>
            <Link href={"/"} className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center '>
                  <span className='text-white px-3 text-center'>DK</span>
                  <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'><IoIosLaptop className='text-4xl' /></span>
            </Link>
        </div>
        {/* social */}
        <div className='hidden md:flex gap-4 w-1/3 justify-center'>
              <Link href={"https://github.com/dharmik2003"} target="_blank"><Image src={github} alt="github" width={24} height={24}/></Link>
              <Link href={"https://www.linkedin.com/in/dharmik2003/"} target="_blank"><Image src={linkedin} alt="github" width={24} height={24}/></Link>
              <Link href={"https://www.geeksforgeeks.org/user/dharmik99/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user"} target="_blank"><Image src={gfg} alt="github" width={44} height={34}/></Link>
              <Link href={"https://leetcode.com/u/Dharmik2003/"} target="_blank"><Image src={LeetCode} alt="github" width={35} height={24}/></Link>
        </div>

        {/* mobile */}
        <div className='md:hidden'>
            <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={()=>setopen((prev)=>!prev)}>
                  <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
                  <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded'></motion.div>
                  <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-black rounded origin-left'></motion.div>
            </button>

            {
                open && (
                      <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-3xl z-40'>
                          {
                              links.map((link: Links) => (
                                 <motion.div variants={listItemsVariants} className=''>
                                      <Link href={link.url} key={link.title}>{link.title}</Link>
                                 </motion.div>
                              ))
                          }
                      </motion.div>
                )
            }

        </div>

    </div>
  )
}

export default Navbar