import React from 'react'
import Navbar from '@/components/Navbar'
import Shdows from '@/components/Shdows'

function page() {
  return (
    <div>
        <div className="h-screen w-screen overflow-hidden">
        <Navbar/>
        </div>
        <div className="w-80 h-80 absolute top-10 left-0 ">
            <Shdows color1="blue" color2="yellow" intencity={85} />
        </div>

         <div className="w-80 h-80 absolute bottom-0 right-0 ">
            <Shdows color1="sky" color2="indigo" intencity={100} />
        </div>

    


    </div>
  )
}

export default page