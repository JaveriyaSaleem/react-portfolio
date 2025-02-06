import React from 'react'
import AboutMeImg from "../assets/img/About Me.png"

const AboutMe = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-10 py-20'>
      <h1 className='text-[45px] text-black md:hidden text-center'>About Me</h1>
      <div className='w-full flex items-center justify-center'><img src={AboutMeImg} alt="" className='w-[300px] md:w-[500px]'/></div>
      <div className='text-center md:text-left'>
      <h1 className='text-[45px] text-black hidden md:block'>About Me</h1>
      <div className='flex flex-col gap-5'>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque. </p>
<p>
Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.</p>
</div>
      </div>
    </div>
  )
}

export default AboutMe
