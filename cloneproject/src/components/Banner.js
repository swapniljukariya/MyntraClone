import React from 'react'

import banner2 from './img/banner2.jpg';

function Banner() {
  return (
    <div>
        <img src="https://github.com/RimRaider639/Myntra/blob/master/img/index_img_1.png?raw=true"alt="" className='ml-2 h-full w-[99vw] '/>
        <img src={banner2}  className='w-[100vw]'/>
      
    </div>
  )
}

export default Banner
