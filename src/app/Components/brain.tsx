'use client'
import {motion, useTransform} from 'framer-motion'
import React from 'react'

const Brain = ({ scrollYProgress }) => {

    const rotateForward=useTransform(scrollYProgress,[0,1],[0,360])
  return (
    <div className='w-full h-full '>
        
    </div>
  )
}

export default Brain