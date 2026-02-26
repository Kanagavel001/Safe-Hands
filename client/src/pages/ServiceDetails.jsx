import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, CircleCheckBig, Clock, Handshake, MapPin, ShieldPlus, ShieldUser, Star, Timer, Zap } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import {motion} from 'framer-motion'


const serviceDetails = [
    {title: 'Duration', text: "minutes", icon: Clock},
    {title: 'Service Area', text: "All major cities", icon: MapPin},
    {title: 'Professional', text: "Verified service providers", icon: ShieldUser}
]

const serviceAdvantages = [
    {title: "Safety Promise", points: ["Proper safety tools & insulated equipment", "Zero damage guarantee", "Clean work area after service" ], icon: ShieldPlus },

    {title: "Service Time & Availability", points: ["PService Duration: 30 minutes – 2 hours", "Availability: 7 days a week", "Emergency Service: Available" ], icon: Timer },

    {title: "What You’ll Get", points: ["Professional inspection", "Transparent pricing", "Service warranty" ], icon: Handshake },
]

const ServiceDetails = () => {

    const { id } = useParams();
    const { navigate, services } = useAppContext();

    const [service, setService] = useState({});

    useEffect(()=>{
        setService(services.find(item => item._id === id));
    }, [id, services]);

  return service && (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden'>
        <div className='min-h-screen py-16 md:py-24'>
            
            <Link to={'/all-services'} className='flex items-center gap-1 text-gray-500 mb-4 hover:text-gray-700 transition-all duration-300'>
                <ArrowLeft className='size-4 md:size-5'/>
                <span className='text-xs md:text-sm font-medium'>Back to Services</span>
            </Link>

            <div className='md:flex max-md:space-y-4 gap-6'>
                
                <motion.div 
                    initial={{x: -50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                    className='flex-2 ring-2 ring-primary/10 rounded-xl shadow-lg shadow-primary/10'>
                    <div className='rounded-t-xl md:h-120'>
                        <img src={service.image} className='w-full h-full object-cover rounded-t-xl' />
                    </div>
                    <div className='sm:flex items-center justify-between p-4'>
                        <h1 className='relative w-fit title text-xl md:text-2xl xl:text-3xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text max-[400px]:text-lg'>
                            <motion.div 
                            initial={{x: 0, rotate: 30}}
                            whileInView={{x: "6000%"}}
                            viewport={{once: true}}
                            transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
                            className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
                            {service.service}
                        </h1>
                        <div className='flex items-center gap-2'>
                            <div className='flex items-center gap-0.5 '>
                                {[0, 1, 2, 3, 4].map((_, i) => (
                                    <Star className='size-4 md:size-5 text-primary fill-primary' key={i}/>
                                ))}
                            </div>
                            <span className='font-medium md:text-lg'>4.5</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                    className='flex-1 ring-2 ring-primary/10 rounded-xl p-4 md:p-8 shadow-lg shadow-primary/10 space-y-4 md:space-y-5'>

                    <h1 className='font-bold text-lg md:text-xl'>Pricing</h1>

                    <div className='flex items-center justify-between p-2 ring ring-primary/30 rounded-lg bg-primary/5'>
                        <div className='flex items-center gap-2'>
                            <div className='p-2 rounded-full bg-primary/10'>
                                <Zap className='text-primary size-5'/>
                            </div>
                            <div>
                                <p className='text-sm font-semibold'>Same Day Service</p>
                                <p className='text-xs font-medium text-gray-500'>Service today within hours</p>
                            </div>
                        </div>

                        <p className='font-bold'>₹ {service.price + 50}</p>
                    </div>

                    <div className='flex items-center justify-between p-2 ring ring-secondary/30 rounded-lg bg-secondary/5'>
                        <div className='flex items-center gap-2'>
                            <div className='p-2 rounded-full bg-secondary/10'>
                                <Calendar className='text-secondary size-5'/>
                            </div>
                            <div>
                                <p className='text-sm font-semibold'>Same Day Service</p>
                                <p className='text-xs font-medium text-gray-500'>Service today within hours</p>
                            </div>
                        </div>

                        <p className='font-bold'>₹ {service.price}</p>
                    </div>

                    <div className='bg-linear-to-l to-transparent via-primary/30 from-transparent h-0.5 w-full '></div>

                    <h1 className='font-bold text-lg md:text-xl'>Service Details</h1>

                    {serviceDetails.map((item, i) => (
                        <div key={i} className='flex items-center gap-2'>
                            <div className='bg-primary/10 p-2 rounded-full text-primary/80'>
                                <item.icon />
                            </div>
                            <div>
                                <p className='text-sm font-medium '>{item.title}</p>
                                <p className='text-xs text-gray-500'>{item.text}</p>
                            </div>
                        </div>
                    ))}

                    <button onClick={()=>navigate(`/cart/${service._id}`)} className={`w-full text-sm md:text-base rounded-lg p-2 font-medium text-white transition-all duration-300 bg-primary hover:bg-primary/80`}>Book Now</button>

                </motion.div>
            </div>

            <div className='md:flex flex-wrap gap-6 items-center w-fit mx-auto max-md:space-y-4 mt-10 md:mt-16'>
                {serviceAdvantages.map((item, i) => (
                    <motion.div 
                        initial={{y: 50, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: i * 0.1}}
                        key={i} className='space-y-2 shadow-lg shadow-primary/10  p-4 rounded-xl ring ring-primary/20 md:w-90'>
                        <div className='bg-primary/20 p-2 w-fit rounded-full mx-auto'>
                            <item.icon className='text-primary size-6 md:size-8'/>
                        </div>
                        <h1 className='text-center bg-linear-to-l to-primary from-secondary font-bold text-xl md:text-2xl bg-clip-text text-transparent'>{item.title}</h1>
                        <ul className='space-y-1 mx-auto w-fit'>
                            {item.points.map((point, j) => (
                                <li key={j} className='flex items-center gap-1'>
                                    <CircleCheckBig className='size-4 text-primary' />
                                    <span className='text-sm font-medium text-gray-500'>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ServiceDetails