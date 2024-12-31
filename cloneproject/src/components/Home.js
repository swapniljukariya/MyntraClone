import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import clothes from './img/clothes.jpg'
import shoes from './img/shoes.jpg'
import  furniture from './img/furniture.jpg'
import others from './img/others.jpg'

function Home() {

    const [product , setProducut]= useState([]);

    const getProducts= async()=>{
        try{
            await fetch('https://api.escuelajs.co/api/v1/product')
            .then(response=> response.json())
            .then(data=>setProducut(data));
        }catch(err){
        console.log(err);
        }
    }
    useEffect(()=>{
        getProducts();

    },[])
  return (
    <div className='p-10 flex justify-between'>
        <Link to="/products" state={{category:"Clothes",product:product}}><div style={{backgroundImage:`url(${clothes})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Clothes</h1>
        <h1 className='text-xl font-bold'>40-50% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>

   
     <Link to="/products" state={{category:"Shoes",product:product}}><div style={{backgroundImage:`url(${shoes})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Shoes</h1>
        <h1 className='text-xl font-bold'>50-70% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>
     <Link to="/products" state={{category:"Furniture",product:product}}><div style={{backgroundImage:`url(${furniture})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Furniture</h1>
        <h1 className='text-xl font-bold'>45-60% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>

     <Link to="/products" state={{category:"Miscellaneous",product:product}}><div style={{backgroundImage:`url(${others})`,backgroundRepeat:"no-repeat",backgroundSize:"300px 300px"}}
     className='h-72 w-48 p-2 pt-48'>
      <div className='bg-pink-700 text-orange-100 flex flex-col items-center justify-center'>
        <h1 className='text-lg'>Others</h1>
        <h1 className='text-xl font-bold'>55-70% OFF</h1>
        <h1 className='text-lg'>Shop Now</h1>
      </div>
     </div>
     </Link>





      
    </div>
  )
}

export default Home
