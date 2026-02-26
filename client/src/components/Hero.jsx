import { motion } from 'framer-motion'
import { BadgeIndianRupee, ShieldUser, Timer } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto w-full overflow-hidden'>
        
        <div className='md:flex min-h-screen pt-16 pb-6 md:py-10 items-center justify-between'>
            <div className='flex-1 max-md:text-center'>

                <motion.p 
                    initial={{y: 10, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut', delay: 0, type: 'spring'}}
                    viewport={{once: true}}
                    className='bg-primary/10 inline-block px-4 rounded-full py-0.5 text-xs font-medium ring ring-primary text-primary'>Trusted Household Services by Professionals</motion.p>

                <motion.h1 
                    initial={{y: 10, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut', delay: 0.1, type: 'spring'}}
                    viewport={{once: true}}
                    className='relative w-full title text-transparent bg-clip-text bg-linear-to-l from-secondary to-primary text-3xl md:text-4xl xl:text-5xl font-black mt-1 md:mt-2 mb-4 md:mb-6'>
                    <motion.div 
                    initial={{x: 0, rotate: 30}}
                    whileInView={{x: "8000%"}}
                    viewport={{once: true}}
                    transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
                    className='max-md:hidden w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
                    Your Home, in Safe Hands
                </motion.h1>

                <ul className='flex gap-4 font-medium text-xs items-center max-md:justify-center max-md:flex-col'>
                    <motion.li 
                        initial={{y: 10, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1, ease: 'easeInOut', delay: 0.2, type: 'spring'}}
                        viewport={{once: true}}
                        className='flex items-center gap-1 bg-secondary/10 ring ring-secondary px-2 rounded-full text-secondary py-0.5'><ShieldUser size={16}/> Verified Experts</motion.li>
                    <motion.li
                        initial={{y: 10, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1, ease: 'easeInOut', delay: 0.3, type: 'spring'}}
                        viewport={{once: true}}
                        className='flex items-center gap-1 bg-secondary/10 ring ring-secondary px-2 rounded-full text-secondary py-0.5'><Timer size={16}/> <span>Fast Service</span></motion.li>
                    <motion.li 
                        initial={{y: 10, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1, ease: 'easeInOut', delay: 0.4, type: 'spring'}}
                        viewport={{once: true}}
                        className='flex items-center gap-1 bg-secondary/10 ring ring-secondary px-2 rounded-full text-secondary py-0.5'><BadgeIndianRupee size={16}/>Transparent Pricing</motion.li>
                </ul>

                <motion.p 
                    initial={{y: 10, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    transition={{duration: 1, ease: 'easeInOut', delay: 0.5, type: 'spring'}}
                    viewport={{once: true}}
                    className='text-xs md:text-sm font-medium text-gray-400 my-4 md:my-6'>From appliance repairs to home installations, Safe Hands connects you with skilled and verified professionals for all your household needs quickly, safely and at fair prices.</motion.p>
            
                <motion.div
                    initial={{y: 10, opacity: 0}}
                    whileInView={{y: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, ease: 'easeInOut', delay: 0.6, type: 'spring'}}
                >
                    
                    <Link to={'/all-services'} className='bg-primary px-4 py-1 md:px-6 md:py-2 rounded-md font-medium text-white hover:bg-transparent hover:text-primary transition-all duration-300 ring-2 ring-primary'>Explore Services</Link>
                </motion.div>
                
            </div>

            <motion.div 
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 1, ease: 'easeInOut', delay: 0.7, type: 'spring'}}
                viewport={{once: true}}
                className='flex-1'>
                <motion.img
                    animate={{y: [0, 20 ,0]}}
                    transition={{duration: 5, ease: 'easeInOut', repeat :Infinity }}
                    src='/hero.png' alt="" />
            </motion.div>
        </div>

    </div>
  )
}

export default Hero