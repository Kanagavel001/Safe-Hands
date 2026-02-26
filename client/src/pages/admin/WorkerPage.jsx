import React, { useEffect, useState } from 'react'
import { dummyBookingsData, dummyWorkersData } from '../../assets/assets'
import moment from 'moment'
import { motion } from 'framer-motion'
import Navbar from '../../components/admin/Navbar'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'

const WorkerPage = () => {

    const { id } = useParams();

    const { workers } = useAppContext();

  const [filteredBookings, setFilteredBookings] = useState([]);
  const [worker, setWorker] = useState({});

  useEffect(()=>{
    setWorker(workers.find(worker => worker._id === id))
  }, [workers, id]);

  useEffect(()=>{
    if(worker){
        setFilteredBookings(dummyBookingsData.filter(booking => worker.service === booking.category && booking.status !== "Canceled"));
    }
  }, [worker]);

  return worker && (
    <div>
        <Navbar role={"Worker"} name={worker.name}/>
        <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto w-full overflow-hidden py-4 md:py-8'>
            
            <motion.h1
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, ease: 'easeOut', type: 'spring'}}
                className='title relative w-fit text-2xl md:text-3xl xl:text-4xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>
                  <motion.div 
                    initial={{x: 0, rotate: 30}}
                    whileInView={{x: "6000%"}}
                    viewport={{once: true}}
                    transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
                    className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
                  {worker.service}
            </motion.h1>

            <div className='md:flex items-center justify-between max-md:space-y-4'>
              <motion.div
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                className='flex-1 max-w-4xl no-scrollbar mt-2 md:mt-6 ring-2 ring-primary/10 rounded-xl shadow-lg shadow-primary/20 h-140 md:h-130 overflow-y-scroll'>
                  <table className='border-collapse w-full rounded-xl'>
                    <thead className='bg-primary text-white'>
                      <tr>
                        <th className='pl-4 p-2'>User</th>
                        <th className='p-2 max-md:hidden'>Date & Address</th>
                        <th className='p-2'>Service</th>
                        <th className='p-2 max-md:hidden'>Payment</th>
                        <th className='p-2'>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBookings.map((booking) => (
                        <tr className='text-center font-medium text-sm text-gray-500 border-b border-primary/50' key={booking._id}>
                          <td className='p-2'>{booking.user.name}</td>
                          <td className='p-2 max-md:hidden'>
                            <p>{moment(booking.date).format('DD MMM YYYY')}</p>
                            <p>{booking.address}</p>
                          </td>
                          <td className='p-2'>{booking.service.service}</td>
                          <td className='p-2 max-md:hidden'>
                            <p className={`w-fit mx-auto px-4 py-0.5 rounded-md ring ${booking.isPaid ? "text-green-600 ring-green-600 " : "ring-red-600 text-red-600"}`}>{booking.isPaid ? "Paid" : "Pending"}</p>
                          </td>
                          <td className='p-2'>
                            <p className={`text-white w-fit mx-auto px-4 py-1 rounded-md transition-all duration-300 ${booking.status === "Canceled" ? "bg-red-600" : booking.status === "Completed" ? "bg-secondary" : "bg-primary hover:scale-105 hover:bg-primary/80"}`}>{booking.status === "Upcoming" ? "Complete" : booking.status}</p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </motion.div>

              <motion.div
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, type: 'spring', ease: 'easeOut'}}
                className='max-md:mt-6'
              >
                <motion.img 
                  animate={{y: [0, 20, 0]}}
                  transition={{duration: 5, ease: 'easeInOut', repeat: Infinity}}
                  src="/worker.png" className='md:w-100 md:h1-00 object-cover' />
              </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WorkerPage