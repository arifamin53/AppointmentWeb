import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gay-14 mt-40 my-10 text-sm'>
            {/* left section */}

            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus doloribus harum qui, architecto sit maxime consectetur corporis dicta quasi tenetur quos deleniti aperiam sunt iusto, eos sequi, molestiae error alias.</p>
            </div>
             {/* middle section */}

             <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                 {/* right section */}

            <div>
               <p className='text-xl font-medium mb-5'>Get In Touch</p> 
               <ul className='flex flex-col gap-2 text-gray-600'>
                <li>7889424853</li>
                <li>arifamin53@gmail.com</li>
               </ul>
           </div>
        </div>
        <div>
            {/* CopyRight Text */}
            <hr />
            <p className='py-5 text-sm text-center'>copyright-2024@ prescripto All-Right-Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer
