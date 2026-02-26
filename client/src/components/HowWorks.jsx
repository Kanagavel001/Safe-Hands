import React from 'react'
import Title from './Title'
import { CircleCheckBig, ClipboardClock, MousePointer2, ShieldPlus } from 'lucide-react';
import { motion } from 'framer-motion';


const HowWorks = () => {

    const works = [
        {
            title: "Choose Your Service", 
            description: 'Browse our range of home services and select what you need from repairs to installations.',
            points: [
                "Appliance Repair",
                "Plumbing & Electrical"
            ],
            icon: MousePointer2 ,
        },
        {
            title: "Schedule at Your Convenience", 
            description: 'Pick a date, time, and location that works best for you. No waiting, no unnecessary calls.',
            points: [
                "Flexible scheduling",
                "Service at your doorstep"
            ],
            icon: ClipboardClock,
        },
        {
            title: "Get Matched with a Verified Professional", 
            description: 'A skilled and verified expert is assigned to your request and arrives on time with the right tools.',
            points: [
                "Background-verified",
                "Trained professionals"
            ],
            icon: ShieldPlus,
        },
        {
            title: "Service Completed, Safely", 
            description: 'The job is done with care and precision. Pay securely and share your feedback to help us improve.',
            points: [
                "Secure payments",
                "Ratings & reviews"
            ],
            icon: CircleCheckBig,
        }
    ]

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden'>

        <div className='min-h-screen py-6 md:py-10'>

            <Title title={"How It Works"}/>

            <motion.p 
                initial={{scale: 0.5, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                className='text-center text-xs md:text-sm mt-2 md:mt-6 text-gray-500 md:w-2xl mx-auto '>Getting help for your home has never been easier. Safe Hands connects you with trusted professionals in just a few quick steps.</motion.p>

            <div className='mx-auto w-fit max-md:space-y-6 mt-6 md:mt-10 md:grid md:grid-cols-2 xl:grid-cols-4 xl:space-x-12 md:gap-6'>
                {works.map((item, i) => (
                    <motion.div 
                        initial={{y: i % 2 === 0 ? 50 : -50, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: i * 0.15}}
                        className={`relative w-60 md:w-70 py-8 px-4 md:py-10 rounded-xl ${i % 2 === 0 ? "bg-primary/3 ring-2 ring-primary/30 " : "bg-secondary/3 ring-2 ring-secondary/30 md:translate-y-25"}`} key={i}>

                        <p className=' absolute top-4 font-bold title text-2xl md:text-3xl bg-linear-to-r to-secondary from-primary bg-clip-text text-transparent'>0{i + 1}</p>

                        <div className={`mx-auto rounded-full p-4 w-fit ${i % 2 === 0 ? "bg-primary/5 ring-2 ring-primary/30 text-primary" : " bg-secondary/5 ring-2 ring-secondary/30 text-secondary"}`}><item.icon size={26}/></div>

                        <h1 className='my-2 text-center font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text text-xl md:text-2xl'>{item.title}</h1>

                        <p className='text-xs md:text-sm text-center text-gray-500'>{item.description}</p>

                        <ul className='mt-4 w-fit mx-auto space-y-2'>
                            {item.points.map((text, j) => (
                                <li className={`text-sm md:text-base ring px-4 rounded-full text-center ${i % 2 === 0 ? "text-primary ring-primary" : "text-secondary ring-secondary"}`} key={j}>{text}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default HowWorks