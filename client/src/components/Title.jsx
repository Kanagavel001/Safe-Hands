import { motion } from 'framer-motion'
import React from 'react'

const Title = ({title}) => {
  return (
    <div className='text-center w-fit mx-auto'>
        <h1 className='title text-3xl md:text-4xl xl:text-5xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text relative w-full'>
          <motion.div 
            initial={{x: 0, rotate: 30}}
            whileInView={{x: "8000%"}}
            viewport={{once: true}}
            transition={{duration: 3, ease: 'easeOut', type: 'spring'}}
            className='w-1 inset-0 md:w-2 h-7 md:h-12 bg-bg absolute'></motion.div>{title}</h1>
        <motion.div
          initial={{scaleX: 0}}
          whileInView={{scaleX: 1}}
          transition={{duration: 1, ease: 'easeOut'}}
          viewport={{once: true}}
          className='h-0.5 md:h-1 w-1/2 bg-linear-to-r from-primary to-secondary mt-1 md:mt-2 mx-auto rounded-full'></motion.div>
    </div>
  )
}

export default Title