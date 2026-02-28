import React, { useEffect, useState } from 'react'
import { LogOut, MenuIcon, User, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {

    const { navigate, navLinks, isUser, logout, isAdmin } = useAppContext();

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const [ isScrolled, setIsScrolled ] = useState(false);

    useEffect(()=>{
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-transparent flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 py-1 sm:py-2 z-50 transition-all duration-500 ${isScrolled ? "backdrop-blur-2xl shadow py-2 md:py-3" : "bg-primary py-3 md:py-4"}`}>
        
        <div>
          <img onClick={()=>navigate('/')} src="/logo.png" className='w-30 md:w-35 cursor-pointer' alt="" />
        </div>

        <div className='flex space-x-12 items-center max-md:hidden bg-primary/5 px-10 py-3 rounded-full backdrop-blur-lg ring ring-primary/50'>
          {navLinks.map((item, i) => (
            <Link to={item.path} key={i} className='font-medium flex space-x-2  transition-all duration-300 text-primary hover:text-primary/60 ' >
              <p>{item.title}</p>
            </Link>
          ))}
        </div>

        <div className='flex items-center space-x-4'>

          <Link to={isUser ? "my-bookings" : "login"} className='max-md:hidden bg-primary/5 px-4 md:px-6 py-1 md:py-2 rounded-full font-medium text-primary hover:ring ring-primary hover:text-primary text-sm md:text-base transition-all duration-300'>{isUser ? "My Bookings" : "Login"}</Link>

          {isUser && <div className='max-md:hidden flex items-center gap-2 font-medium bg-primary/5 rounded-full px-4 py-2'>
            <User className='bg-primary p-0.5 text-white rounded-full'/>
            <p className='text-primary'>{isUser.name}</p>
          </div>}

          {isUser && <button onClick={logout} className='max-md:hidden bg-red-600/5 p-2 rounded-full transition-all duration-300 hover:ring ring-red-600'>
            <LogOut className='text-red-600/60 hover:text-red-600 transition-all duration-300 hover:scale-105 size-5 md:size-6'/>
          </button>}

          <button onClick={()=>setIsMenuOpen(true)} className={`md:hidden`}>
            <MenuIcon className='text-primary/80 size-6' strokeWidth={3}/>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence >
          {isMenuOpen && <motion.div 
            initial={{x: "100%", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            exit={{x: "100%", opacity: 0}}
            transition={{duration: 0.5, ease: 'easeInOut' }}
            className={`md:hidden fixed p-10 top-0 right-0 bg-black backdrop-blur-md h-[100vh]`}>
            <div>

              <div className='flex flex-col space-y-4 font-medium items-center py-4'>
                {navLinks.map((item, i)=>(
                  <button
                    onClick={()=>{setIsMenuOpen(false); navigate(item.path)}}  key={i} className='text-white px-4 py-1 rounded-lg '>
                    {item.title}
                  </button>
                ))}
                {isUser && <button onClick={() => {navigate('/my-bookings'); setIsMenuOpen(false)}} className='ring ring-white px-6 py-1 rounded-full font-medium text-white hover:ring text-sm  transition-all duration-300'>My Bookings</button>}
                
              </div>

              {isUser ? <div className='absolute bottom-5 mx-auto w-fit left-0 right-0 flex items-center'>
                
                <div className='flex items-center gap-2 font-medium  rounded-full px-4 py-2'>
                  <User className='bg-white p-1 rounded-full'/>
                  <p className='text-white text-sm'>{isUser.name}</p>
                </div>

                <button onClick={()=>{logout(); setIsMenuOpen(false)}} className='ring-red-600 rounded-full ring p-2'>
                  <LogOut className='size-4 text-red-600' />
                </button>
              </div> : <Link to='/login' className='absolute bottom-5 mx-auto w-fit bg-white px-6 py-2 rounded-full font-medium text-black'>login</Link>}
            </div>

            <button
              onClick={()=>setIsMenuOpen(false)} 
              className={`absolute  text-white top-4 right-4`}>
              <X strokeWidth={4} className='size-6'/>
            </button>
          </motion.div>}
        </AnimatePresence>

    </nav>
  )
}

export default Navbar