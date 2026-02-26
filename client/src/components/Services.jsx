import React from 'react'
import Title from './Title'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {

    const services = [
        {
            title: "Appliance Repair",
            description: 'Keep your appliances running smoothly with expert repair services.',
            types: [
                'Washing Machines',
                'Refrigerators',
                'Air Conditioners',
                'Microwave Ovens',
            ],
            image: '/Appliance Repair.png'
        },
        {
            title: "Electrical Services",
            description: 'Safe and efficient electrical solutions for your home.',
            types: [
                'Switch & socket repair',
                'Wiring & rewiring',
                'Fan & light installation',
                'Inverter & power backup setup'
            ],
            image: '/Electrical Services.png'
        },
        {
            title: "Plumbing Services",
            description: 'Reliable plumbing services for everyday and emergency needs.',
            types: [
                'Leak detection & repair',
                'Pipe fitting & replacement',
                'Bathroom & kitchen fittings',
                'Water tank connections',
            ],
            image: '/Plumbing Services.png'
        },
        {
            title: "Furniture & Cabinet Installation",
            description: 'Perfect installations that enhance your living space.',
            types: [
                'Kitchen cabinets',
                'Wardrobes & shelves',
                'Furniture assembly',
                'Curtain rods & wall fixtures',
            ],
            image: '/Furniture & Cabinet Installation.png'
        },
        {
            title: "Home Cleaning & Maintenance",
            description: 'Keep your home clean, healthy, and well-maintained.',
            types: [
                'Deep home cleaning',
                'Periodic maintenance checks',
                'Minor household fixes',
                'Roof and garden cleaning',
            ],
            image: '/Home Cleaning & Maintenance.png'
        },

    ]

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden'>

        <div className='min-h-screen py-6 md:py-10'>

            <Title title={"Our Services"}/>

            <div className='mx-auto space-y-6 md:space-y-10 mt-6 md:mt-10 md:w-3xl lg:w-5xl'>
                {services.map((service, i) => (
                    <motion.div 
                        initial={{scale: 0.5}}
                        whileInView={{scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type :'spring'}}
                    className={`md:flex items-center justify-between max-md:space-y-4 md:p-6 p-4 max-md:rounded-3xl ${i % 2 !== 0 ? "flex-row-reverse md:rounded-r-full bg-secondary/3 ring-2 ring-secondary/30" : "md:rounded-l-full bg-primary/3 ring-2 ring-primary/30" }  `} key={i}>

                        <motion.div 
                            initial={{x: i % 2 === 0 ?  "50%" : "-50%", opacity: 0, rotate: 180}}
                            whileInView={{x: 0, opacity: 1, rotate: 0}}
                            viewport={{once: true}}
                            transition={{duration: 1, ease: 'easeOut', type :'spring'}}
                            className='md:w-60 md:h-60 h-60 rounded-3xl md:rounded-full'>
                            <img src={service.image} className='w-full h-full object-cover rounded-3xl md:rounded-full' alt="" />
                        </motion.div>

                        <motion.div 
                            initial={{x: i % 2 === 0 ?  "-50%" : "50%", opacity: 0}}
                            whileInView={{x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 1, ease: 'easeOut', type :'spring'}}
                            className='space-y-4'>
                            <h1 className='text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text text-center text-xl md:text-3xl title font-bold '>{1 + i}. {service.title}</h1>
                            <p className='text-sm md:text-base text-gray-500 text-center'>{service.description}</p>
                            <ul className='space-y-2 w-fit mx-auto'>
                                {service.types.map((text, j) => (
                                    <li className={`text-sm md:text-base font-medium`} key={j}>{j + 1}. {text}</li>
                                ))}
                            </ul>
                            <Link to={'/all-services'} className='mx-auto w-fit group flex items-center gap-1 text-gray-500 hover:text-gray-800 text-xs md:text-sm transition-all duration-300'>
                                <span>View more</span> 
                                <ArrowRight className='size-4 md:size-5 group-hover:translate-x-1 transition-all duration-300'/>
                            </Link>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

        </div>
        
    </div>
  )
}

export default Services