import React from 'react'


const Card = (props) => {
  return (
    

<div className='border p-6 w-sm rounded-2xl'>
    <div className='flex justify-center md:justify-start'>
        <img src={props.img} alt="" />
    </div>
    <h1 className='font-bold'>{props.title}</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

</div>

  )
}

export default Card
