"use client"
import React, { useState } from 'react'
import Style from "@/style/main.module.css"
import img from '@/assets/gallary.png'
import Gallaryopner from './Gallaryopner'


function Gallary({ info }) {
    const [openerGallary, setOpenerGallary] = useState(false)




    return (
        <div className='box h-screen w-screen flex  p-10 z-10' >
            <div className={`${Style.glass} w-15 h-15 absolute bg-blue-200`}>
              <img src={img.src} alt="gallary" className='w-full h-full cursor-pointer' onClick={()=>setOpenerGallary(true)} />
              <p className='mt-1'>{info.app_name}</p>
            </div>

            <div className='h-screen w-screen flex justify-center items-center  '>
               {
                openerGallary ? <Gallaryopner  setOpenerGallary={setOpenerGallary}/> : null
               } 

            </div>
            
        </div>
    )
}

export default Gallary;
