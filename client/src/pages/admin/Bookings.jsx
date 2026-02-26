import React, { useEffect, useState } from 'react'
import { dummyBookingsData } from '../../assets/assets'
import moment from 'moment'
import { motion } from 'framer-motion'

const bookingsType = ["All Bookings", "Upcoming", "Completed", "Canceled"];

const Bookings = () => {

  const [selectedBooking, setSelectedBooking] = useState('All Bookings');
  const [filteredBookings, setFilteredBookings] = useState([]);

  const filterBookings = async () => {
    if(selectedBooking === "All Bookings"){
      setFilteredBookings(dummyBookingsData);
    }else{
      setFilteredBookings(dummyBookingsData.filter(booking => booking.status === selectedBooking));
    }
  }

  useEffect(()=>{
    filterBookings();
  }, [selectedBooking]);

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
            transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
            className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
          Bookings
      </motion.h1>

      <div className='md:flex items-center justify-around'>
        <motion.div 
          initial={{x: -50, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
          className=' flex-1 max-w-4xl no-scrollbar mt-6 ring-2 ring-primary/10 rounded-xl shadow-lg shadow-primary/20 h-140 md:h-130 overflow-y-scroll'>
            <table className='border-collapse w-full rounded-xl'>
              <thead className='bg-primary text-white'>
                <tr>
                  <th className='pl-4 p-2'>User</th>
                  <th className='p-2 max-md:hidden'>Date & Address</th>
                  <th className='p-2'>Service & Amount</th>
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
                    <td className='p-2 text-black font-medium'>
                      <p className='max-md:text-xs text-gray-500'>{booking.service.service}</p>
                      <p>₹ {booking.price}</p>
                    </td>
                    <td className='p-2 max-md:hidden'>
                      <p className={`w-fit mx-auto px-4 py-0.5 rounded-md ring ${booking.isPaid ? "text-green-600 ring-green-600 " : "ring-red-600 text-red-600"}`}>{booking.isPaid ? "Paid" : "Pending"}</p>
                    </td>
                    <td className='p-2'>
                      <p className={`w-fit ring mx-auto px-4 py-1 rounded-md ${booking.status === "Canceled" ? "text-red-600" : booking.status === "Completed" ? "text-secondary" : "text-primary"}`}>{booking.status}</p>
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
          transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
          className='max-md:hidden space-y-2'>
          {bookingsType.map((booking, i) => (
            <p key={i} onClick={()=>setSelectedBooking(booking)} className={`ring text-primary text-center font-medium text-sm ring-primary px-4 py-1 rounded-lg transition-all duration-300 ${booking === selectedBooking ? "bg-primary text-white" : "hover:scale-105"}`}>{booking}</p>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Bookings