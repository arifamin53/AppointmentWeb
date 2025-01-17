import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../Redux/actions/action';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/ReactToastify.css"

const Appointment = () => {

  const dispatch=useDispatch()
  let navigate=useNavigate()
  const {docId}=useParams();
  const {doctors,currencySymbol}=useContext(AppContext)
  const [docInfo,setDocInfo]=useState(null)
  const [docSlot,setDocSlot]=useState([]);
  const[slotIndex,setSlotIndex]=useState(0);
  const [slotTime,setSlotTime]=useState('')
  const daysOfWeek=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

  const fetchDocInfo=async ()=>{
    const docInfo=doctors.find((doc)=>doc._id===docId)
    // docInfo.push(slotIndex)
    // // docInfo.append(slotTime)
    // // docInfo.append(daysOfWeek)
      setDocInfo(docInfo)
      
      
  }

  const getAvialableSlots=async()=>{
     setDocSlot([])

     //get current date
     let today=new Date()

     for(let i=0; i<7 ;i++){
      // date with index

      let currentDate=new Date(today)
      currentDate.setDate(today.getDate()+i);
      // settings  end time of the date with index
      let endTime=new Date();
      endTime.setDate(today.getDate()+i);
      endTime.setHours(21,0,0,0);


      // setting hours
      if(today.getDate()=== currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10?currentDate.getHours()+1:10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      }
      else{
        currentDate.setHours(10);
        currentDate.setMinutes(0)
      }
      let timeSlots=[]
      while(currentDate < endTime){
        let formatedTime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
          //add slot to array
          timeSlots.push({
            datetime:new Date(currentDate),
            time:formatedTime
          })

          // increment current time by 30 minutes
          currentDate.setMinutes(currentDate.getMinutes()+30)

      };
      setDocSlot(prev=>([...prev,timeSlots]))
     }
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])

  useEffect(()=>{
getAvialableSlots()
  },[docInfo])


  useEffect(()=>{
  
  },[docSlot])


  const send=(e)=>{
    
     dispatch(Add(e))
     toast.success('Appointment Successfull');
    }
  return docInfo && (
    <div>
      {/* Doctor Details */}

      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg mb-20 sm:mb-0' src={docInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
          <div className='flex items-center gap-2 text-sm text-gray-600 mt-1 '>
            <p>{docInfo.degree} {docInfo.speciality}</p>
            <button className='py-0.5 px-7 border text-xs rounded-full '>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900  mt-3'>About
               <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span>
          </p>
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className=''>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot.map((items,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white':'brder border-gray-200'}`} key={index}>
                <p className=''>{items[0] && daysOfWeek[items[0].datetime.getDay()]}</p>
                <p className=''>{items[0] && items[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {
            docSlot.length && docSlot[slotIndex].map((item,index)=>(
              <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime ? 'bg-primary text-white':'text-gray-400 border border-gray-200'} `} key={index}>
                {item.time.toLowerCase()}
              </p>

            ))
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-4' onClick={()=>send(docInfo)} >Book an Appointment</button>
      </div>
      <RelatedDoctors  docId={docId} speciality={docInfo.speciality}/>
  <ToastContainer/>
    </div>
  )
}

export default Appointment
