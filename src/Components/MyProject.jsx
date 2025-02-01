import React from 'react'
import Card1 from "../assets/img/Card Project 1.png"
import Card2 from "../assets/img/Card Project 2.png"
import Card3 from "../assets/img/Card Project 3.png"

const MyProject = () => {
  return (
    <div className='px-10 pt-10 pb-20 '>
      <h1 className='text-[45px] text-center'>My Project</h1>
      <div className='flex justify-center items-center'>
        <div>
        <img src={Card1} alt="img"  />
        </div>
        <div>
       
        <img src={Card2} alt="img"  />
        </div>
        <div>
        <img src={Card3} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default MyProject
