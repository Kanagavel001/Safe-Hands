import React, { useEffect, useState } from 'react'
import { Calendar, MapPin, Star } from 'lucide-react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Cart = () => {

    const { id } = useParams();
    const { services, isUser, axios } = useAppContext();
    const [serviceDate, setServiceDate] = useState('');
    const [address, setAddress] = useState('');
    const [service, setService] = useState({});

    const handleBooking = async (e) => {
        e.preventDefault();
        if(!isUser){
            return toast.error('Login first after book the service');
        }

        if(!address || !serviceDate){
            return notyf.error('Required all fields');
        }

        const bookingData = {
            user: isUser.email,
            serviceId: service._id,
            address,
            date: serviceDate
        }

        const { data } = await axios.post('/api/booking/create', {bookingData});

        if(data.success){
            toast.success(data.message);
            window.location.href = data.url;
        }else{
            toast.error(data.message)
        }
    }

    useEffect(()=>{
        setService(services.find(service => service._id === id));
    }, [id, services]);

  return service && (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden'>

        <div className='min-h-screen py-16 md:py-24'>

            <motion.h1 
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.8, type: 'spring', ease: 'easeOut'}}
                className='w-fit relative title text-xl md:text-2xl xl:text-3xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>
                <motion.div 
                initial={{x: 0, rotate: 30}}
                whileInView={{x: "4000%"}}
                viewport={{once: true}}
                transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
                className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
                Book Service
            </motion.h1>

            <div className='md:flex items-center justify-between'>

                <div className=' md:w-2xl space-y-4 md:space-y-8 mt-2 md:mt-6'>
                
                    <motion.div
                        initial={{x: -50, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, type: 'spring', ease: 'easeOut'}}
                        className='flex items-center justify-between p-2 ring-1 ring-primary/30 rounded-xl '>
                        <div className='flex items-center gap-2'>
                            <div className='rounded-xl w-25 h-15'>
                                <img src={service.image} className='w-full h-full object-cover rounded-xl' />
                            </div>
                            <div className='space-y-2'>
                                <h1 className='text-sm font-medium '>{service.service}</h1>
                                <p className='text-xs text-gray-500'>{service.category}</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center space-y-2 w-20 '>
                            <div className='flex items-center gap-1'>
                                <Star className='size-4 md:size-5 text-primary fill-primary'/>
                                <p className='text-sm font-medium md:text-base'>4.5</p>
                            </div>
                            <p className='font-bold text-sm sm:text-base'>₹ {service.price}</p>
                        </div>
                    </motion.div>
                    <motion.form
                        onSubmit={handleBooking}
                        initial={{x: 50, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, type: 'spring', ease: 'easeOut'}}
                        className='space-y-4 ring-2 ring-primary/10 shadow-lg shadow-primary/10 rounded-xl p-4 w-80 md:h-100 mx-auto'>
                        <div className='space-y-2'>
                            <h1 className='font-semibold md:text-lg'>Booking Details</h1>
                            <div htmlFor="" className='space-y-2'>
                                <p className='font-medium text-sm'>Your City</p>
                                <div className='relative'>
                                    <input required value={address} onChange={(e)=>setAddress(e.target.value)} type="text" className='ring rounded-lg py-1 px-2 focus:ring-primary outline-none transition-all duration-300 w-full' placeholder='City, district' />
                                    <MapPin className=' absolute top-1 right-2 text-gray-500'/>
                                </div>
                            </div>
                            <div htmlFor="" className='space-y-2'>
                                <p className='font-medium text-sm'>Service Date</p>
                                <div className='relative w-full'>
                                    <DatePicker
                                        required
                                        minDate={new Date()}
                                        selected={serviceDate}
                                        onChange={(date) => setServiceDate(date)}
                                        placeholderText="Select a date"
                                        dateFormat="dd/MM/yyyy"
                                        className='ring rounded-lg py-1 px-2 focus:ring-primary outline-none transition-all duration-300 w-72'
                                    />
                                    <Calendar className='absolute top-1 right-2 text-gray-500'/>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <h1 className='font-semibold md:text-lg'>Price Summary</h1>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm font-medium'>Subtotal</p>
                                    <p className='font-medium text-sm'>₹ {service.price}</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm font-medium'>Service Fee</p>
                                    <p className='font-medium text-sm'>₹ 50</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <p className='text-sm font-medium'>Taxes</p>
                                    <p className='font-medium text-sm'>₹ 0</p>
                                </div>
                            </div>
                            <div>
                                <div className='flex items-center justify-between'>
                                    <p className='font-medium'>Total Payable</p>
                                    <p className='font-medium '>₹ {service.price + 50}</p>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className='w-full bg-primary py-1 rounded-lg text-white font-medium hover:bg-primary/80 transition-all duration-300'>Book Service</button>
                    </motion.form>
                </div>

                <motion.div 
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, type: 'spring', ease: 'easeOut'}}
                    className='max-md:mt-6'>
                    <motion.img 
                        animate={{y: [0, 20, 0]}}
                        transition={{duration: 5, ease: 'easeInOut', repeat: Infinity}}
                        src='/book_now.png' className='md:w-100 md:h1-00 object-cover' />
                </motion.div>
            </div>
        </div>
        
    </div>
  )
}

export default Cart