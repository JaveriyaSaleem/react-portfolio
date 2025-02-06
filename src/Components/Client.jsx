import React from 'react'
import Customer1 from '../assets/img/Customer1.png'
import Customer2 from '../assets/img/Customer 2.png'
import Customer3 from '../assets/img/Customer 3.png'

const Client = () => {
  return (
    <div className='md:p-20 bg-[#f5fcff] text-center md:text-left'>
      <h4 className='font-bold'>Client Feedback</h4>
      <h1 className='text-[45px] font-black'>Customer Testimonials</h1>
      <div className='flex justify-center items-center flex-col md:flex-row md:justify-between gap-4'>
        <div><img src={Customer1} alt="img" /></div>
        <div><img src={Customer2} alt="img" /></div>
        <div><img src={Customer3} alt="img" /></div>
      </div>
    </div>
  )
}

export default Client
