import React, { useEffect, useState } from 'react'
import ServiceCard from '../components/ServiceCard'
import { useAppContext } from '../context/AppContext'
import { motion } from 'framer-motion'
import Title from '../components/Title'

const AllServices = () => {

    const { servicesCategory, services } = useAppContext();

    const [selectedService, setSelectedService] = useState('');
    const [showFilter, setShowFilter] = useState(false);
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(()=>{
        if (!services || services.length === 0) {
            setFilteredServices([]);
            return;
        }

        if (selectedService === "") {
        setFilteredServices(services);
            } else {
                setFilteredServices(
                services.filter(service => service.category === selectedService)
            );
        }
    }, [selectedService, services]);

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden'>

        <div className='min-h-screen py-16 md:py-24 md:flex'>

            <div className='flex-1 md:mt-14 mb-4 mx-auto'>
                {/* Filter */}
                <div className='ring-2 ring-primary/10 shadow-lg shadow-primary/10 p-2 px-4 md:p-4 rounded-3xl mx-auto w-65'>
                    <div className='flex items-center justify-between'>
                        <h1 className='title text-lg md:text-xl font-bold  text-center md:mb-2'>Filter</h1>
                        <p onClick={()=>setShowFilter(!showFilter)} className='md:hidden text-xs text-gray-500'>{showFilter ? "Hide" : "Show"}</p>
                    </div>
                    <div className={`flex flex-col max-md:text-sm space-y-1 ${!showFilter && "max-md:hidden" }`}>
                        <label className='space-x-1' style={{display: "block"}}>
                            <input type="checkbox" checked={selectedService === ''} onChange={()=>setSelectedService('')} />
                            <span>All Services</span>
                        </label>
                        {servicesCategory.map((service, i) => (
                            <label className='space-x-1' key={i} style={{display: "block"}}>
                                <input type="checkbox" checked={service === selectedService} onChange={()=>setSelectedService(service)} />
                                <span>{service}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            <div className='flex-4 h-screen overflow-y-scroll pb-6 no-scrollbar'>
                {/* All Services */}
                <Title title={!selectedService ? "All Services" : selectedService }/>
                 

                <div className='w-fit mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8 mt-4'>
                    {filteredServices.map((service, i) => (
                        <motion.div 
                            initial={{y: 50, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{duration: 1, ease: 'easeOut', type: 'spring', delay: Math.floor(i % 3) * 0.1}}
                            key={service._id}>
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllServices