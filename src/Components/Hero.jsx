import React from 'react'
import heroGuy from '../assets/img/Hero Guy.png'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 items-center gap-10  ps-6 bg-[#f5fcff]'>
    <div className='flex flex-col gap-3'>
      <h4 className='text-[16px] font-extrabold'>Hey, I am John</h4>
      <h1 className='text-[44px] font-black w-5/6'>I create <span className='primary-color'> product design  </span> and brand experience</h1>
      <p className='w-4/5 pb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      <div className=''>
        <button className='hover:cursor-pointer px-5 py-3 bg-[#5e3bee] text-white rounded-sm text-[14px]'>Get in Touch</button>
        </div>
    </div>
    <div className='flex justify-end'>
<img src={heroGuy} alt="Guy" className='w-[600px]'/>
    </div>
    </div>
  )
}

export default Hero
