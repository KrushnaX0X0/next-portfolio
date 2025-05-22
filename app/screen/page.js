import React from 'react'
import Navbar from '@/components/Navbar'
import Shdows from '@/components/Shdows'
import information from '../lib/data'
import Gallary from '@/components/Gallary'

function Page() {
  return (
    <div className="relative">
      <Navbar />

      <div className="w-80 h-80 absolute top-10 left-0">
        <Shdows color1="sky" color2="yellow" intencity={85} />
      </div>

      <div className="w-80 h-80 absolute bottom-0 right-0">
        <Shdows color1="sky" color2="yellow" intencity={90} />
      </div>

      <div>
       {
             information.map((info,index)=>(
                  info.app_name == "gallary" ? <Gallary key={index} info={info}/> : null
             ))
         }
      </div>
    </div>
  )
}

export default Page;
