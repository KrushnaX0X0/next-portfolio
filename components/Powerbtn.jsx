import React from 'react'
import 'remixicon/fonts/remixicon.css'



function Powerbtn({onClick}) {
  return (
    <div className='flex flex-col  justify-center items-center h-screen w-screen gap-4 absolute z-[100]'>
        <div><i className="ri-shut-down-line text-5xl cursor-pointer" onClick={onClick}></i></div>
        
        <div className=' text-2xl text-black mt-2'>Click To Start</div>
      

      

    </div>
  )
}

export default Powerbtn