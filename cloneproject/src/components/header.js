import React from 'react'
import PropTypes from 'prop-types'
import logo from './img/logo.png'
import lens from './img/lens.png'
import out from './img/logout.png'
import account from './img/account.png';

function header(props) {
  return (
    <>
    <div className='flex h-28  text-sm font-bold text-gray-800 items-center p-4  gap-6 shadow-lg bg-white '>
      <img src={logo} alt='logo' className='w-24 h-14 ml-6'/>
      <h1 className='ml-4'>MEN</h1>
      <h1  className='ml-8'>WOMEN</h1>
      <h1 className='ml-8'>KIDS</h1>
      <h1 className='ml-8'>HOME & LIVING</h1>
      <h1 className='ml-8'>BEAUTY</h1>
      <h1 className='ml-8'>STUDIO</h1>

      <div className='border border-gray-100 flex items-center justify-center bg-gray-100 w-96 h-10 ml-96'>
        <img src={lens} alt ="lens" className='h-3 w-3 mt-4'/>
        <input onChange={(e)=> props.setSearch(e.target.value)} className="bg-gray-100 text-gray-900 font-normal  outline-none
        text-sm rounded-sm  block w-full p-2.5 ml-3 " placeholder="Search for products" required/>
      </div>
      <div className='ml-6 text-xs'>
      <img src ={account} alt=" out" className='w-4 h-4 ml-2'/>
      <h1>Logout</h1>
      </div>
      <div className='ml-6 text-xs'>
        <img src={out} alt ="" className='w-4 h-4 ml-2'/>
        <h1>Login</h1>
      </div>
      
      
     

      
    </div>
  </>
  )
}



export default header

