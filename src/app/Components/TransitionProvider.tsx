'use client'
import React from 'react'
import Navbar from './Navbar'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const TransitionProvider = ({ children }) => {
    const pathname = usePathname();
    return (
        <AnimatePresence>
            <div key={pathname} className="min-h-screen bg-gradient-to-b from-blue-50 to-red-100">
                <motion.div
                    className='h-screen w-screen fixed bg-black rounded-b-[100px] z-40'
                    animate={{ height: '0vh' }}
                    exit={{ height: '140vh' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
                <motion.div
                    className='hidden sm:block fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit'
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    {pathname.substring(1)}
                </motion.div>
                <motion.div
                    className='h-screen w-screen fixed bg-red rounded-t-[100px] z-40'
                    initial={{ height: '140vh' }}
                    animate={{ height: '0vh', transition: { delay: 0.5 } }}
                />
                <div className="h-full">
                    <Navbar />
                    <div className="h-full">
                        {children}
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default TransitionProvider;
