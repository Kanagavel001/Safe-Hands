import React from 'react'
import Title from './Title'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'


const Testimonials = () => {

    const review = [
        {
            image: '/customer.png',
            name: 'Ravi K',
            comment: '“Excellent and reliable service!”',
            description: 'Safe Hands fixed my washing machine on the same day. The technician was professional, polite, and explained everything clearly.',
        },
        {
            image: '/customer.png',
            name: 'Anita S',
            comment: '“Very smooth booking process.”',
            description: 'From booking to service completion, everything was simple and transparent. No hidden charges and very friendly support.',
        },
        {
            image: '/customer.png',
            name: 'Mohammed R',
            comment: '“Professional and trustworthy.”',
            description: 'The electrician arrived on time and completed the work neatly. I felt safe having them work in my home.',
        },
        {
            image: '/customer.png',
            name: 'Priya M',
            comment: '“Highly recommended!”',
            description: 'Great service quality and quick response. Safe Hands has become my go-to platform for all home maintenance needs.',
        }
    ]

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden'>

        <div className='py-6 md:py-10'>

            <Title title={"Our Customers Say"}/>

            <div className='mx-auto w-fit mt-6 md:mt-10 max-md:space-y-6 md:grid grid-cols-2 gap-10'>
                {review.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{x: i % 2 === 0 ? -50 : 50, opacity: 0}}
                        whileInView={{x: 0, opacity: 1}}
                        viewport={{once: true}}
                        transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
                        className='space-y-2 w-80 ring ring-black/30 rounded-2xl p-4'>

                        <div className='flex items-center gap-4'>

                            <div className='w-10 h-10 rounded-full'>
                                <img src={item.image} className='w-full h-full rounded-full object-cover' alt="" />
                            </div>

                            <div>
                                <p className='font-medium'>{item.name}</p>
                                <div className='flex items-center gap-x-0.5'>
                                    {[0,1,2,3,4].map((_, i) => (
                                        <Star className='text-primary fill-primary size-4' key={i}/>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className='space-y-1'>
                            <p className='font-medium'>{item.comment}</p>
                            <p className='text-xs text-gray-500'>{item.description}</p>
                        </div>

                    </motion.div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials