import React,{useState} from 'react'

const OfferTime = () => {

    const [time,setTime] = useState("")

    const date = new Date()
    const hh = date.getHours()
    const mm = date.getMinutes()
    const ss = date.getSeconds()

    setTimeout(()=>{
       setTime(hh+"H:"+mm+"M:"+ss+"S")
    },1000)

  return (
    <div className='w-full bg-blue-50 h-14 flex p-8 flex-col items-center justify-center'>
      <h1 className='text-gray-500 font-semibold text-lg '>Sale Ends In </h1>
      <span className= 'text-rose-400 font-bold text-2xl'>{time}</span>
    </div>
  )
}

export default OfferTime