import React from 'react'
import Card from './Card'
import Branding from "../../assets/img/Branding & Logo.png"
import strategy from "../../assets/img/Strategy & Direction.png"    
import uxui from "../../assets/img/UI & UX Design.png"
import webdev from "../../assets/img/Webflow Development.png"

const Skill = () => {
  return (
    <div className='px-4 py-10'>
      <h4 className='text-[16px]'>My Skills</h4>
      <h1 className='text-[44px]'>My Expertise</h1>
      <div className='flex justify-between gap-3'>
        <Card img={strategy} title={"Strategy & Direction"}/>
        <Card img={Branding} title={"Branding & Logo"}/>
        <Card img={uxui} title={"UI & UX Design"}/>
        <Card img={webdev} title={'Webflow Development'}/>
      </div>
    </div>
  )
}

export default Skill
