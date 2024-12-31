import React from 'react'
import banner1 from './img/banner1.jpg';
import banner2 from './img/banner2.jpg';

function Banner() {
  return (
    <div>
        <img src={ banner1}alt="" className='p-4'/>
        <img src={banner2} alt="p-7"/>
      
    </div>
  )
}

export default Banner
