import React from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/AppContext'
import { BookCheck, IdCardLanyard, Wallet, Wrench } from 'lucide-react';

const Dashboard = () => {

  const {dashboardData} = useAppContext();

  const dashboard = [
    {title: "Bookings", count: dashboardData.bookings, icon: BookCheck },
    {title: "Revenue", count: dashboardData.totalRevenue, icon: Wallet },
    {title: "Services", count: dashboardData.services, icon: Wrench },
    {title: "Workers", count: dashboardData.workers, icon: IdCardLanyard },
  ]

  return (
    <div>
      <motion.h1
        initial={{x: -50, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        viewport={{once: true}}
        transition={{duration: 0.8, ease: 'easeOut', type: 'spring'}}
        className='relative title w-fit text-2xl md:text-3xl xl:text-4xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>
          <motion.div
            initial={{x: 0, rotate: 30}}
            whileInView={{x: "4000%"}}
            viewport={{once: true}}
            transition={{duration: 2, ease: 'easeOut', type: 'spring'}}
            className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
            Dashboard
        </motion.h1>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-4 md:mt-8 w-fit mx-auto'>

          <motion.div 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, type: 'spring', ease: 'easeOut', delay: 0}}
            className='place-items-center w-50 h-50 ring-2 ring-orange-600/10 shadow-lg shadow-orange-600/20 rounded-xl bg-linear-to-bl to-orange-600 from-orange-600/30 text-white'>
            <div className='mt-8 p-4 ring-2 rounded-full ring-white'>
              <BookCheck className='size-10'/>
            </div>
            <p className='text-xl font-medium mt-4'>Bookings</p>
            <p className='text-2xl font-bold'>{dashboardData.bookings}</p>
          </motion.div>

          <motion.div 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, type: 'spring', ease: 'easeOut', delay: 0.1}}
            className='place-items-center w-50 h-50 ring-2 ring-green-600/10 shadow-lg shadow-green-600/20 rounded-xl bg-linear-to-bl to-green-600 from-green-600/30 text-white'>
            <div className='mt-8 p-4 ring-2 rounded-full ring-white'>
              <Wallet className='size-10'/>
            </div>
            <p className='text-xl font-medium mt-4'>Revenue</p>
            <p className='text-2xl font-bold'>₹ {dashboardData.totalRevenue}</p>
          </motion.div>

          <motion.div 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, type: 'spring', ease: 'easeOut', delay: 0.2}}
            className='place-items-center w-50 h-50 ring-2 ring-pink-600/10 shadow-lg shadow-pink-600/20 rounded-xl bg-linear-to-bl to-pink-600 from-pink-600/30 text-white'>
            <div className='mt-8 p-4 ring-2 rounded-full ring-white'>
              <Wrench className='size-10'/>
            </div>
            <p className='text-xl font-medium mt-4'>Services</p>
            <p className='text-2xl font-bold'>{dashboardData.services}</p>
          </motion.div>

          <motion.div 
            initial={{y: 50, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, type: 'spring', ease: 'easeOut', delay: 0.3}}
            className='place-items-center w-50 h-50 ring-2 ring-blue-600/10 shadow-lg shadow-blue-600/20 rounded-xl bg-linear-to-bl to-blue-600 from-blue-600/30 text-white'>
            <div className='mt-8 p-4 ring-2 rounded-full ring-white'>
              <IdCardLanyard className='size-10'/>
            </div>
            <p className='text-xl font-medium mt-4'>Workers</p>
            <p className='text-2xl font-bold'>{dashboardData.workers}</p>
          </motion.div>




        </div>

        
    </div>
  )
}

export default Dashboard