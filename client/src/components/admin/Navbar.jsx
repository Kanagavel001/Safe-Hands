import React from 'react'
import {LogOut} from 'lucide-react'
import { useAppContext } from '../../context/AppContext'

const Navbar = ({role, name}) => {

  const {logout, isUser} = useAppContext();

  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-1 md:py-2 border-b border-primary/50'>
          <div>
              <img src="/logo.png" className='w-30 md:w-35'/>
          </div>
          <h1 className='title w-fit text-2xl md:text-3xl xl:text-4xl font-bold text-transparent bg-linear-to-r from-primary to-secondary bg-clip-text'>{role}</h1>
        <div className='flex gap-2 md:gap-6 items-center'>
            <p className='font-medium text-sm md:text-base text-gray-500'>{name}</p>
            {isUser && <LogOut onClick={logout} className='text-red-600/60 hover:text-red-600 transition-all duration-300 hover:scale-105 size-5 md:size-6'/>}
        </div>
    </div>
  )
}

export default Navbar