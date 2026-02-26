import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import AdminServiceCard from '../../components/admin/AdminServiceCard'
import { useAppContext } from '../../context/AppContext'
import { CirclePlus } from 'lucide-react'
import AddService from '../../components/admin/AddService'

const Services = () => {

  const {servicesCategory, services} = useAppContext();
  const [selectedService, setSelectedService] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);
  const [addService, setAddService] = useState(false);

  useEffect(()=>{
    if(services.length === 0){
      return setFilteredServices([])
    }
    if(selectedService === ''){
      return setFilteredServices(services);
    }else{
      setFilteredServices(services.filter(service => service.category === selectedService));
    }
  }, [selectedService, services]);

  return (
    <div className=' relative'>
      <div className={`md:flex items-center justify-between ${addService && "hidden"}`}>
          <div className='flex-1'>
            {/* All Services */}
            <div className='flex items-center justify-between'>
              <motion.h1
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                className='title relative w-fit text-2xl md:text-3xl xl:text-4xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>
                  <motion.div
                      initial={{x: 0, rotate: 30}}
                      whileInView={{x: "4000%"}}
                      viewport={{once: true}}
                      transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
                      className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>
                  {!selectedService ? "All Services" : selectedService }
              </motion.h1>
              <motion.div
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
              >
                <button onClick={()=>setAddService(true)} className='flex items-center gap-1 font-medium text-sm md:text-base text-white bg-primary px-4 py-1 rounded-lg hover:bg-primary/80 transition-all duration-300'>
                  <CirclePlus className='size-4 md:size-5'/>
                  Add Service
                </button>
              </motion.div>
            </div>
            <div className='h-140 md:h-130 no-scrollbar overflow-y-auto w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4 p-8 ring-2 ring-primary/10 shadow-lg shadow-primary/20 rounded-xl'>
                {filteredServices.map((service, i) => (
                    <motion.div
                        initial={{y: 50, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: Math.floor(i % 3) * 0.1}}
                        key={service._id}>
                        <AdminServiceCard service={service} />
                    </motion.div>
                ))}
            </div>
                  </div>
                  <motion.div 
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                    className='max-md:hidden space-y-2'>
            <div onClick={()=>setSelectedService('')} className={`text-sm  px-4 py-1 text-center ring ring-primary rounded-md  transition-all duration-300 ${selectedService === '' ? "bg-primary text-white" : "hover:scale-105 text-primary"}`}>
              All Services
            </div>
            {servicesCategory.map((service, i) => (
              <div key={i} onClick={()=>setSelectedService(service)} className={`text-sm  px-4 py-1 ring ring-primary rounded-md  transition-all duration-300 text-center ${selectedService === service ? "bg-primary text-white" : "hover:scale-105 text-primary"}`}>
                {service}
              </div>
            ))}
            </motion.div>
          </div>

        <AddService addService={addService} setAddService={setAddService}/>
      
    </div>
  )
}

export default Services