import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useDispatch, useSelector } from 'react-redux';
import {  Dlt } from '../Redux/actions/action';
import { ToastContainer,toast } from 'react-toastify';

const MyAppoinment = () => {
  // const {doctors}=useContext(AppContext)
   const getData=useSelector((state)=>state.cartReducer.carts);
    console.log(getData)
    const dispatch=useDispatch()
    const data=(id)=>{
      console.log(id)
       dispatch((Dlt(id)))
       toast.error('Appointment Deleted')
    }
  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
    {
      getData.map((item,index)=>(
          <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
               <div>
                <img className='w-32 bg-indigo-50' src={item.image} alt="" />
               </div>
               <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.name}</p>
                <p>{item.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.address.line1}</p>
                <p className='text-xs'>{item.address.line2}</p>
                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>21,Dec,2024 | 1:30 Pm</p>
               </div>
               
               <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                <button onClick={()=>data(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded  hover:bg-red-600 hover:text-white transition-all duration-300' >Cancel Appointment</button>
               </div>
          </div>
      ))
    }
      </div>
    
      <ToastContainer/>
    </div>
  )
}

export default MyAppoinment
