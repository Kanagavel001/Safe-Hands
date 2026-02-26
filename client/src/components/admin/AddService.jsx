import React, { useEffect } from 'react'
import { useAppContext } from '../../context/AppContext'
import { Image, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast'
import { useState } from 'react';

const AddService = ({setAddService, addService}) => {

    const { servicesCategory, axios, isAdmin, fetchServices } = useAppContext();

    const [service, setService] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleCreateService = async (e) => {
        e.preventDefault();
        if(!isAdmin){
            return toast.error("Admin can only access");
        }
        const serviceData = {
            category,
            service,
            price,
        }

        const formData = new FormData();

        formData.append('serviceData', JSON.stringify(serviceData));
        formData.append('image', image);
        const { data } = await axios.post('/api/service/create', formData);

        if(data.success){
            setImage('');
            setService('');
            setPrice('');
            setCategory('');
            setAddService(false);
            toast.success(data.message);
        }else{
            toast.error(data.message);
        }
    }

    useEffect(()=>{
        fetchServices();
    }, [handleCreateService])

  return (
        <AnimatePresence>
            {addService && <motion.div
                initial={{scale: 0.5, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                exit={{scale: 0.5, opacity: 0}}
                transition={{duration: 1, ease: 'easeInOut', type: 'spring'}}
                className='w-full max-md:h-[85vh] md:h-full top-0 right-0 ring-2 ring-primary/10 shadow-primary/20 shadow-lg bg-bg rounded-2xl absolute flex items-center justify-center'>

                <X onClick={()=>setAddService(false)} className='absolute top-4 right-4 text-red-500 hover:scale-110 transition-all duration-300'/>
            
                <div>
                    <h1
                        className='relative title w-fit text-2xl md:text-3xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>
                          <motion.div
                            initial={{x: 0, rotate: 30}}
                            whileInView={{x: "4000%"}}
                            transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
                            className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
                            Add Service
                        </h1>
                    <form onSubmit={handleCreateService} className='space-y-4 max-[400px]:w-65 w-80 mx-auto mt-4 md:mt-6 ring-2 ring-primary/10 shadow-lg shadow-primary/20 rounded-xl p-6 max-[400px]:text-sm '>
                        <div className='space-y-2'>
                            <p className='text-gray-500 font-medium'>Service Name</p>
                            <input required value={service} onChange={(e)=>setService(e.target.value)} type="text" className='outline-none w-full ring ring-gray-500 rounded-lg px-2 py-1 focus:ring-primary' placeholder='type here...'/>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-gray-500 font-medium'>Worker Service</p>
                            <select required value={category} onChange={(e)=>setCategory(e.target.value)} className='outline-none ring ring-gray-500 rounded-lg px-2 py-1.5 focus:ring-primary w-full' >
                                <option value="">Select Category</option>
                                {servicesCategory.map((service, i) => (
                                    <option key={i} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-gray-500 font-medium'>Service Price</p>
                            <input required value={price} onChange={(e)=>setPrice(e.target.value)} type="number" className='outline-none w-full ring ring-gray-500 rounded-lg px-2 py-1 focus:ring-primary' placeholder='type here...'/>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-gray-500 font-medium'>Service Image</p>
                            <label className='outline-none w-full ring ring-gray-500 rounded-lg px-2 py-1 focus:ring-primary flex gap-5'>
                                <p className='text-gray-500 font-medium'>Select image from files</p>
                                <input accept="image/*" required type="file" onChange={(e)=>setImage(e.target.files[0])} className=' hidden' placeholder='type here...'/>
                                <Image className='text-gray-500'/>
                            </label>
                            {image ? <img src={URL.createObjectURL(image)} className='mt-2 h-16 rounded cursor-pointer w-fit mx-auto'/> : <Image className='size-16 text-gray-400 w-fit mx-auto mt-2'/>}
                        </div>
                        <button type='submit' className='bg-primary w-full rounded-lg py-1 font-medium cursor-pointer text-white hover:bg-primary/80 transition-all duration-300'>Add Service</button>
                    </form>
                </div>
            </motion.div>}
        </AnimatePresence>
  )
}

export default AddService