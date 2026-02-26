import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import Navbar from '../../components/admin/Navbar'

const Layout = () => {
  return (
    <>
        <Navbar role={"Admin"} />
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 px-4 py-4 md:py-8 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default Layout