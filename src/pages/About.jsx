import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>Us</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col  justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At [Tantray], we are dedicated to providing personalized, high-quality healthcare. Our experienced team is committed to your well-being, offering compassionate care in a comfortable environment.</p>
          <p>Our goal is to make every visit efficient and stress-free. We offer a range of medical services, ensuring comprehensive care for you and your family, with the latest technology and treatments.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Trust [Tantray] for your healthcare needs. We prioritize patient-centered care, focusing on your health goals and providing expert guidance for long-term wellness. Your health is our priority.</p>
        </div>
      </div>
      <div className='text-xl my-3'>
        <p>Why <span className=' text-gray-700 font-semibold'>Choose Us</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-10'>
        <div className='border px-30 md:px-16 py-8 sm:py-16 flex flex-col  gap-5 text-[15px] hover:bg-primary hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Effiency</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-30 md:px-16 py-8 sm:py-16 flex flex-col  gap-5 text-[15px] hover:bg-primary hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-30 md:px-16 py-8 sm:py-16 flex flex-col  gap-5 text-[15px] hover:bg-primary hover:text-white  transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>

  )
}

export default About
