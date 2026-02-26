import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Footer = () => {

    const { servicesCategory } = useAppContext();

    const quickLinks = [
        "Home", "About Us", "Services", "How It Works", "Testimonials"
    ]


    const contact = [
        {icon: Phone, text: "+91 12345 67890"},
        {icon: Mail, text: "support@safehands.com"},
        {icon: MapPin, text: "Service available in your city"},
    ]

    const contactIcons = [
        Facebook, Twitter, Instagram, Youtube
    ]

  return (
    <div className='px-4 md:px-16 lg:px-24 xl:px-32 mx-auto max-w-screen overflow-hidden py-4 md:py-6 border-t border-primary bg-primary/3'>

        <div className='max-md:space-y-6 grid md:grid-cols-2 lg:grid-cols-4 mx-auto w-fit md:space-x-4'>

            <div className='space-y-4'>
                <div className='space-y-2'>
                    <div>
                        <img src='/logo.png' className='w-35 md:w-45' alt="" />
                    </div>
                    <p className='text-xs text-gray-500'>Safe Hands is a trusted home service platform connecting homeowners with verified professionals for safe, reliable, and high-quality household services.</p>
                </div>

                <div className='flex items-center gap-2'>
                    {contactIcons.map((Icon, i) => (
                        <Icon className='hover:-translate-y-1 transition-all duration-300 text-primary hover:text-primary/50' key={i}/>
                    ))}
                </div>
            </div>

            <div className='space-y-2'>
                <h1 className='w-fit font-bold title text-transparent bg-linear-to-l to-primary from-secondary bg-clip-text text-xl md:text-2xl'>Quick Links</h1>
                <div className='space-y-1 font-medium'>
                    {quickLinks.map((link, i) => (
                        <Link className='text-sm text-gray-500 hover:text-gray-800 block transition-all duration-300 w-fit' key={i}>{link}</Link>
                    ))}
                </div>
            </div>

            <div className='space-y-2'>
                <h1 className='w-fit font-bold title text-transparent bg-linear-to-l to-primary from-secondary bg-clip-text text-xl md:text-2xl'>Our Services</h1>
                <div className='space-y-1 font-medium'>
                    {servicesCategory.map((link, i) => (
                        <Link className='text-sm text-gray-500 hover:text-gray-800 block transition-all duration-300 w-fit' key={i}>{link}</Link>
                    ))}
                </div>
            </div>

            <div className='space-y-2'>
                <h1 className='w-fit font-bold title text-transparent bg-linear-to-l to-primary from-secondary bg-clip-text text-xl md:text-2xl'>Contact Us</h1>
                <div className='space-y-4 font-medium'>
                    {contact.map((item, i) => (
                        <div className='flex items-center gap-2' key={i}>
                            <div className='p-1 ring-primary ring-2 rounded-full text-primary'><item.icon className='size-5 md:size-6'/></div>
                            <p className='text-sm text-gray-500 hover:text-gray-800 block transition-all duration-300 w-fit'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>


        </div>

        <div className='mt-4 md:mt-6 text-center text-gray-500 text-xs md:text-sm'>
            <p>© {new Date().getFullYear()} Safe Hands. All rights reserved.</p>
        </div>
        
    </div>
  )
}

export default Footer