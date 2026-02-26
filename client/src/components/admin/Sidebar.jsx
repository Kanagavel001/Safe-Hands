import { IdCardLanyard, LayoutDashboardIcon, ListOrdered, User, Workflow, Wrench } from 'lucide-react';
import React from 'react'
import { NavLink } from 'react-router-dom';

function Sidebar() {

  const adminNavLinks = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon },
    { name: 'Services', path: '/admin/services', icon: Wrench },
    { name: 'Bookings', path: '/admin/bookings', icon: ListOrdered },
    { name: 'Workers', path: '/admin/workers', icon: IdCardLanyard },
  ];

  return (
    <div className='h-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-primary/50 text-sm'>

      <div className='w-full overflow-hidden'>
        { adminNavLinks.map((link, index) => (
          <NavLink key={index} to={link.path} end className={({ isActive }) => `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 md:pl-10 first:mt-6 text-gray-400 transition-all duration-300 ${isActive ? 'bg-primary/15 text-primary group' : "hover:bg-primary/5"}`}>
            {({ isActive }) => (
              <>
                <link.icon className='w-5 h-5' />
                <p className='max-md:hidden'>{link.name}</p>
                <span className={`md:hidden w-1.5 h-10 rounded-1 right-0 absolute ${isActive && "bg-primary"}`}></span>
                <span className={`max-md:hidden w-10 h-10 rotate-45 rounded-1 -right-8 absolute ${isActive && "bg-primary"}`}></span>
              </>
            )}
          </NavLink>
        ))}
      </div>

    </div>
  )
}

export default Sidebar
