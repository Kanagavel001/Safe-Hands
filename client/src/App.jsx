import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop '
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AllServices from './pages/AllServices'
import ServiceDetails from './pages/ServiceDetails'
import Cart from './pages/Cart'
import MyBookings from './pages/MyBookings'
import Login from './pages/Login'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import Bookings from './pages/admin/Bookings'
import Services from './pages/admin/Services'
import WorkerPage from './pages/admin/WorkerPage'
import Workers from './pages/admin/Workers'
import { Toaster } from 'react-hot-toast';

const App = () => {

  const isAdminPage = useLocation().pathname.startsWith('/admin');
  const isWorkerPage = useLocation().pathname.startsWith('/worker');
  const isLoginPage = useLocation().pathname.startsWith('/login');

  useEffect(()=>{

  }, [location])

  return (
    <>
      <ScrollToTop />
      <Toaster />
      {!isAdminPage && !isLoginPage && !isWorkerPage && <Navbar />}
      <Routes>
        <Route index path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart/:id' element={<Cart />}/>
        <Route path='/my-bookings' element={<MyBookings />}/>
        <Route path='/all-services' element={<AllServices />}/>
        <Route path='/service/:id' element={<ServiceDetails />}/>
        <Route path='worker/:id' element={<WorkerPage />}/>
        <Route path='/admin/*' element={<Layout />} >
          <Route index element={<Dashboard />}/>
          <Route path='bookings' element={<Bookings />}/>
          <Route path='services' element={<Services />}/>
          <Route path='workers' element={<Workers />}/>
        </Route>
      </Routes>
      {!isAdminPage && !isLoginPage && !isWorkerPage && <Footer />}
    </>
  )
}

export default App