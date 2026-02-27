import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate();
    const [isUser, setIsUser] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [services, setServices] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [workers, setWorkers] = useState([]);
    const [dashboardData, setDashboardData] = useState({});
    
    const navLinks = [
        {title: "Home", path: '/' },
        {title: "Services", path: '/all-services'},
        {title: "Admin", path: '/admin'},
    ]

    const servicesCategory = [
        "Appliance Repair", "Electrical Services", "Plumbing Services", "Cabinet Installation", "Cleaning & Maintenance"
    ]

    const fetchUser = async () => {
        const { data } = await axios.get('/api/user/is-auth');
        if(data.success){
            setIsUser(data.user);
            setIsAdmin(data.isAdmin);
        }
    }

    const logout = async () => {
        const { data } = await axios.get('/api/user/logout');
        if(data.success){
            toast.success(data.message);
            setIsUser(null);
            setIsAdmin(null)
            navigate('/');
        }else{
            toast.error(data.message);
        }
    }

    const fetchServices = async () => {
        const { data } = await axios.get('/api/service/get-all');
        if(data.success){
            setServices(data.services);
        }
    }

    const fetchBookings = async () => {
        const {data} = await axios.get('/api/booking/get-all');
        if(data.success){
            setBookings(data.bookings);
        }
    }

    const fetchWorkers = async () => {
        const { data } = await axios.get('/api/worker/get-all');
        if(data.success){
            setWorkers(data.workers);
        }
    }

    const fetchDashboardData = async () => {
        const { data } = await axios.get('/api/booking/dashboard')
        if(data.success){
            setDashboardData(data.dashboardData);
        }
    }

    useEffect(() => {
        fetchUser();
        fetchServices();
        fetchBookings();
        fetchWorkers();
        fetchDashboardData();
    }, []);
 
    const value = { axios, navigate, navLinks, servicesCategory, isUser, isAdmin, setIsUser, setIsAdmin, services, workers, logout, fetchServices, bookings, fetchBookings, dashboardData }

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);