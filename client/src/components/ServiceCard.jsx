import React from 'react'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const ServiceCard = ({service}) => {

  return (
    <div className='w-60 ring-2 ring-primary/20 shadow-lg shadow-primary/20 rounded-2xl'>
        <div className='w-60 h-40 rounded-t-2xl'>
            <img src={service.image} className='w-full h-full object-cover rounded-t-2xl' />
        </div>
        <div className='space-y-2 pb-4 p-2'>
            <h1 className='font-medium text-sm md:text-base text-center truncate'>{service.service}</h1>
            <div className='flex items-center justify-between'>
                <p className='font-semibold text-sm md:text-base'>₹ {service.price}</p>
                <p className='flex items-center gap-1'><Star className='size-4 md:size-5 text-primary fill-primary' /> <span className='font-medium text-sm'>4.5</span></p>
            </div>
            <div className='flex text-center items-center gap-4 justify-between'>
                <Link to={`/service/${service._id}`} className='font-medium text-sm bg-primary hover:bg-transparent hover:text-primary ring-2 w-full ring-primary py-1 px-1 md:px-4 rounded-lg text-white transition-all duration-300'>
                    Details
                </Link>
                <Link to={`/cart/${service._id}`} className={` text-center font-medium text-sm ring-2 w-full hover:text-white bg-transparent py-1 px-1 md:px-4 rounded-lg transition-all duration-300 hover:bg-primary ring-primary text-primary `}>
                    Book Now
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ServiceCard