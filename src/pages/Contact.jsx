import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Contact <span className='text-gray-700 font-semibold'>Us</span></p>
      </div>
      <div className='flex flex-col my-10 justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>192124 Sangam Marhama <br /> Near Markazi Jamia Masjid Marhama</p>
          <p className='text-gray-500'>@91-7889424853 <br /> arifamin53@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Creates at Prescripted</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black  hover:text-white hover:rounded-lg transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
