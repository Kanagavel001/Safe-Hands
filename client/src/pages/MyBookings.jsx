import { motion } from 'framer-motion'
import React from 'react'
import { dummyBookingsData } from '../assets/assets'
import { Wrench } from 'lucide-react';
import moment from "moment";

const MyBookings = () => {
  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden'>
        <div className='min-h-screen py-16 md:py-24'>

            <motion.h1 
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, type: 'spring', ease: 'easeOut'}}
                className=' relative title text-xl md:text-2xl xl:text-3xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text w-fit max-[400px]:text-lg'>
                <motion.div 
                initial={{x: 0, rotate: 30}}
                whileInView={{x: "4000%"}}
                viewport={{once: true}}
                transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
                className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
                My Bookings</motion.h1>
        
            <div className='md:flex items-center justify-between'>
                <motion.div
                    initial={{x: -50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, type: 'spring', ease: 'easeOut'}}
                    className='flex-2 space-y-4 ring-primary/10 shadow-lg shadow-primary/10 ring-2 rounded-xl p-4 h-140 overflow-y-scroll no-scrollbar mt-4 lg:w-4xl'>
                    {dummyBookingsData.map((booking) => (
                        <div className='p-2 ring-1 ring-primary/30 rounded-xl px-4' key={booking._id}>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-2 md:gap-4'>
                                    <div className='rounded-xl p-4 bg-primary/10 ring ring-primary/50'>
                                        <Wrench className='text-primary' />
                                    </div>
                                    <div className='space-y-1'>
                                        <p className='text-sm md:text-base font-medium' >{booking.service.service}</p>
                                        <p className='text-xs md:text-sm text-gray-500 font-medium' >{booking.service.category}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center space-y-2 w-20 '>
                                    <p className='font-medium text-sm sm:text-base'>₹ {booking.price}</p>
                                    {booking.status !== "Canceled" && <button disabled={booking.isPaid} className={`text-sm font-medium px-4 py-0.5 rounded-lg text-white ${booking.isPaid ? "bg-secondary/80" : "bg-primary/80 hover:bg-primary hover:scale-105"} transition-all duration-300`}>{booking.isPaid ? "Paid" : "Pay"}</button>}
                                    {booking.status === "Upcoming" && <button className={`py-0.5 text-sm font-medium px-4 rounded-lg text-white bg-red-600 hover:scale-105 hover:bg-red-600/80 transition-all duration-300`}>Cancel</button>}
                                </div>
                            </div>
                            <div className='flex items-center justify-between border-t border-primary/50 mt-2 pt-2'>
                                <p className='font-medium text-xs text-gray-500'>{booking.address}</p>
                                <p className='font-medium text-xs text-gray-500'>{moment(booking.date).format('DD MMM YYYY')}</p>
                                <p className={`font-medium text-xs ring px-2 py-0.5 rounded-md ${booking.status === 'Completed' ? "text-secondary ring-secondary" : booking.status === 'Canceled' ? "ring-orange-600 text-orange-600" : "text-primary ring-primary"} `}>{booking.status}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div 
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, type: 'spring', ease: 'easeOut'}}
                    className='w-fit mx-auto'>
                    <motion.img 
                        animate={{y: [0, 20, 0]}}
                        transition={{duration: 5, ease: 'easeInOut', repeat: Infinity}}
                        src="/my_bookings.png" className='md:w-100 md:h-100 object-cover' />
                </motion.div>
            </div>

        </div>
    </div>
  )
}

export default MyBookings