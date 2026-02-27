import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Workers = () => {

    const { servicesCategory, axios, workers, navigate, isAdmin } = useAppContext();
    const [name, setName] = useState('');
    const [service, setService] = useState('');
    const [salary, setSalary] = useState('');

    const handleAddWorker = async (e) => {
        e.preventDefault();

        if(!isAdmin){
            return toast.error("Admin can only access");
        }

        const workerData = {
            name, service, salary
        }

        const { data } = await axios.post('/api/worker/add', {workerData});

        if(data.success){
            toast.success(data.message);
            setName('');
            setService('');
            setSalary('');
        }else{
            toast.error(data.message);
        }
    }

  return (
    <div className='xl:flex justify-around space-y-6'>
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
                Workers
            </motion.h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit max-md:mx-auto gap-6  overflow-y-scroll h-130 pt-6 pb-10 px-10  mt-2 ring-2 ring-primary/10 rounded-xl shadow-lg shadow-primary/20 no-scrollbar'>
                {workers.map((worker, i) => (
                    <motion.div 
                        onClick={()=>navigate(`/worker/${worker._id}`)}
                        initial={{y: 50, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: Math.floor(i % 3) * 0.1}}
                        key={worker._id} className='ring-2 ring-primary/10 shadow-lg shadow-primary/10 w-50 h-60 p-4 rounded-xl space-y-4 cursor-pointer'>
                        <div className='h-30 mx-auto w-fit'>
                            <img src="/worker_image.png" className='w-full h-full object-cover' />
                        </div>
                        <div className='space-y-2 text-center'>
                            <p className='text-sm font-medium text-gray-500'>{worker.name}</p>
                            <p className='text-sm font-medium'>{worker.service}</p>
                            <p className='font-medium'>₹ {worker.salary}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div>

            <motion.h1
            initial={{x: 50, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: 'easeOut', type: 'spring'}}
            className='relative title w-fit text-xl md:text-2xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>
              <motion.div
                initial={{x: 0, rotate: 30}}
                whileInView={{x: "4000%"}}
                viewport={{once: true}}
                transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
                className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
                Add Worker
            </motion.h1>

            <motion.form 
                onSubmit={handleAddWorker}
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                className='space-y-4 max-[400px]:w-65 w-80 mx-auto mt-4 md:mt-6 ring-2 ring-primary/10 shadow-lg shadow-primary/20 rounded-xl p-6 max-[400px]:text-sm '>

                <div className='space-y-2'>
                    <p className='text-gray-500 font-medium'>Worker Name</p>
                    <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" className='outline-none w-full ring ring-gray-500 rounded-lg px-2 py-1 focus:ring-primary' placeholder='type here...'/>
                </div>

                <div className='space-y-2'>
                    <p className='text-gray-500 font-medium'>Worker Service</p>
                    <select required value={service} onChange={(e)=>setService(e.target.value)} className='outline-none ring ring-gray-500 rounded-lg px-2 py-1.5 focus:ring-primary w-full' >
                        <option value="">Select Category</option>
                        {servicesCategory.map((service, i) => (
                            <option key={i} value={service}>{service}</option>
                        ))}
                    </select>
                </div>

                <div className='space-y-2'>
                    <p className='text-gray-500 font-medium'>Worker Salary</p>
                    <input required value={salary} onChange={(e)=>setSalary(e.target.value)} type="number" className='outline-none w-full ring ring-gray-500 rounded-lg px-2 py-1 focus:ring-primary' placeholder='₹ type here...'/>
                </div>

                <button type='submit' className='mt-2 bg-primary w-full rounded-lg py-1 font-medium cursor-pointer text-white hover:bg-primary/80 transition-all duration-300'>Add Worker</button>

            </motion.form>

        </div>
    </div>
  )
}

export default Workers