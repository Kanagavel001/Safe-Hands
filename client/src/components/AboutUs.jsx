import { Eye, HandFist, Star, Target } from 'lucide-react'
import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'

const AboutUs = () => {

    const makeUs = [
        "Carefully verified service professionals" ,
        "On time and dependable service",
        "Transparent pricing with no hidden costs",
        "Customer-first support at every step"
    ]

    const about = [
        {title: "Our Mission", text: "To make household services simple, safe, and accessible by delivering professional solutions that homeowners can trust.", icon: Target},
        {title: "Our Vision", text: "To become the most trusted home service platform by setting new standards in quality, reliability, and customer satisfaction.", icon: Eye},
        {title: "Our Promise", text: "With Safe Hands, every service is handled responsibly because your home deserves expert care and attention.", icon: HandFist},
    ]

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden'>
        
        <div className='min-h-screen py-6 md:py-10'>

            <Title title={"About Safe Hands"}/>

            <div className='md:flex items-center gap-12 max-md:space-y-6 mt-6 md:mt-10'>
                <motion.div 
                    initial={{opacity: 0, scale: 0.5}}
                    whileInView={{opacity: 1, scale: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                    className='flex-1 rounded-2xl'>
                    <img src="/about.png" className='w-full h-full object-cover rounded-2xl' alt="" />
                </motion.div>
                <div className='flex-1 font-medium space-y-4'>
                    <motion.p
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: 0.05}}
                    >Safe Hands is a reliable home service platform built to simplify everyday household needs. From appliance repairs and electrical work to plumbing and home installations, we connect homeowners with skilled, verified professionals who deliver quality service with care.</motion.p>

                    <motion.p
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: 0.1}}
                    >We understand that your home is your most valuable space. That’s why every service at Safe Hands is designed around safety, transparency, and trust ensuring peace of mind from booking to completion.</motion.p>

                    <motion.h1 
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: 0.15}}
                        className='font-bold text-xl md:text-2xl text-primary title'>What Makes Us Different</motion.h1>

                    {makeUs.map((text, i) => (
                        <motion.div 
                            initial={{opacity: 0, x: 50}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: i === 0 ? 0.15 : i * 0.2}}
                            className='flex items-center gap-2' key={i}>
                            <Star className='size-5 text-primary fill-primary'/>
                            <span>{text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className='md:flex items-center justify-center gap-10 mt-8 md:mt-14 mx-auto w-fit max-md:space-y-8'>
                {about.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{y: 50, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: i * 0.2}}
                        >
                        <motion.div
                            initial='initial'
                            whileHover='hovered'
                            className='w-50 h-50 md:w-60 md:h-60 ring-2 ring-secondary/80 rounded-2xl relative overflow-hidden'>
                            <motion.div
                                variants={{
                                    initial: {y: 0, opacity: 1},
                                    hovered: {y: '-100%', opacity: 0}
                                }}
                                transition={{duration: 1, ease: 'easeInOut', type: 'spring'}}
                                className='flex items-center justify-center relative w-full h-full'>
                                <item.icon className='size-30 md:size-40 opacity-30 text-secondary '/>
                                <h1 className='title absolute font-bold text-2xl md:text-4xl text-primary text-shadow-sm text-shadow-secondary'>{item.title}</h1>
                            </motion.div>
                            <motion.div
                                variants={{
                                    initial: {y: "100%", opacity: 0},
                                    hovered: {y: 0, opacity: 1}
                                }}
                                transition={{duration: 1, ease: 'easeInOut', type: 'spring'}}
                                className=' absolute inset-0 flex items-center justify-center text-center text-sm p-4 text-secondary/80 font-medium'>
                                <p>{item.text}</p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AboutUs