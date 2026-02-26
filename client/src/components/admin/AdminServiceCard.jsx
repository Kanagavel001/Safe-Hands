import { Check, Star, UploadCloud } from 'lucide-react'
import React, { useState } from 'react'
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const AdminServiceCard = ({service}) => {

    const { axios, fetchService } = useAppContext();

    const [editPrice, setEditPrice] = useState(false);
    const [price, setPrice] = useState(service.price)

    const handleChangePrice = async (id) => {
        const serviceData = {
            price, id
        }
        const {data} = await axios.put('/api/service/change-price', {serviceData});
        if(data.success){
            setEditPrice(false);
            toast.success(data.message);
            fetchService();
        }else{
            toast.error(data.message);
            setEditPrice(false);
        }
        
    }

  return (
    <div>
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
                {!editPrice ? 
                <button onClick={()=>setEditPrice(true)} className='font-medium text-sm bg-primary hover:bg-transparent hover:text-primary ring-2 w-full ring-primary py-1 px-1 md:px-4 rounded-lg text-white transition-all duration-300'>
                    Change Price
                </button>  
            :
                
                <div className='flex items-center justify-between gap-6'>
                    <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" className='outline-none ring ring-primary px-2 py-1 rounded-lg w-40' />
                    <button onClick={()=>handleChangePrice(service._id)} className='bg-primary/80 p-1 text-white rounded-lg ring ring-primary hover:bg-primary/50 transition-all duration-300 '>
                        <Check />
                    </button>
                </div>
            }
            </div>
        </div>
    </div>
    </div>
  )
}

export default AdminServiceCard