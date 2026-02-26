import { Lock, Mail, User } from 'lucide-react'
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Login = () => {

    const { axios, navigate, setIsUser, setIsAdmin } = useAppContext();

    const [isLogin, setIsLogin] = useState(true);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {name, email, password};

        const { data } = await axios.post(`/api/user/${isLogin ? "login" : "register"}`, {userData});

        if(data.success){
            setIsUser(data.user);
            setIsAdmin(data.isAdmin);
            navigate('/');
            toast.success(data.message);
        }else{
            toast.error(data.message);
        }
    }

  return (
    <div className='min-w-screen h-screen mx-auto overflow-hidden flex justify-center items-center'>
        
        <motion.form 
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 1, ease: 'easeOut', type: 'spring'}}
            viewport={{once: true}}
            onSubmit={handleSubmit} className='ring-2 ring-primary/5 shadow-lg shadow-primary/20 rounded-xl p-6 space-y-4'>

            <h1 className='title font-bold text-2xl md:text-3xl bg-linear-to-l to-primary from-secondary mx-auto w-fit bg-clip-text text-transparent'>{isLogin ? "Login" : "Sign Up"}</h1>

            {!isLogin && <div className='space-y-1'>
                <p className='font-medium text-gray-600 text-sm'>Name</p>
                <div className=' relative'>
                    <input 
                        required
                        type="text" 
                        onChange={(e)=>setName(e.target.value)} 
                        value={name} 
                        className='outline-none border-b-2 border-gray-400 focus:border-primary pl-10 px-2 py-1 transition-all duration-300 text-sm md:w-80' 
                        placeholder='type here...' 
                    />
                    <User className=' absolute left-2 top-1 text-gray-500 size-5'/>
                </div>
            </div>}

            <div className='space-y-1'>
                <p className='font-medium text-gray-600 text-sm'>Email</p>
                <div className=' relative'>
                    <input 
                        required
                        type="email" 
                        onChange={(e)=>setEmail(e.target.value)} 
                        value={email}
                        className='outline-none border-b-2 border-gray-400 focus:border-primary pl-10 px-2 py-1 transition-all duration-300 text-sm md:w-80' 
                        placeholder='example@gmail.com' 
                    />
                    <Mail className=' absolute left-2 top-1 text-gray-500 size-5'/>
                </div>
            </div>

            <div className='space-y-1'>
                <p className='font-medium text-gray-600 text-sm'>Password</p>
                <div className=' relative'>
                    <input 
                        required
                        onChange={(e)=>setPassword(e.target.value)} 
                        value={password}
                        type="password" 
                        className='outline-none border-b-2 border-gray-400 focus:border-primary pl-10 px-2 py-1 transition-all duration-300 text-sm md:w-80' 
                        placeholder='******' 
                    />
                    <Lock className=' absolute left-2 top-1 text-gray-500 size-5'/>
                </div>
            </div>

            <button type='submit' className='w-full bg-linear-to-l to-primary from-secondary rounded-md py-1 md:py-2 mt-4 text-white font-medium hover:to-primary/80 hover:from-secondary/80 transition-colors duration-300'>{isLogin ? "Login" : "Sign Up"}</button>

            <div className='flex items-center justify-between'>
                <p className='text-xs text-gray-400'>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
                <button onClick={()=>setIsLogin(!isLogin)} className='font-medium text-xs text-primary/80 hover:text-primary transition-all duration-300 cursor-pointer hover:scale-105'>{isLogin ? "SignUp" : "Login"}</button>
            </div>
        </motion.form>
        
    </div>
  )
}

export default Login