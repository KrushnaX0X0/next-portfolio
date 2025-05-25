import React from 'react'
import Style from "@/style/main.module.css"
import { openAnimation, closeAnimation } from '@/app/lib/animationfun'
import Shdows from './Shdows'
import information from '@/app/lib/data'


function Gallaryopner({ setOpenerGallary }) {
  const handleClick = () => {
    setOpenerGallary(false)

  }


  openAnimation("box")

  return (
    <div className={`box h-0 w-0 absolute top-[48%] left-[52%] translate-y-[-50%] translate-x-[-50%]  ${Style.glass} bg-red-700`}>
      <div className='w-72 h-60 absolute bottom-0 right-0'>
        <Shdows color1='red' color2='purple' intencity={100} />
      </div>
      <div className='float-right cursor-pointer text-3xl bg-rose-400' onClick={() => handleClick()}><i className="ri-close-fill"></i></div>


      <div className="flex flex-wrap gap-4  h-screen w-screen ">
        {information.map((block, index) =>
          block.photo.map((item, i) => (
            <div key={`${index}-${i}`} className="w-50 h-30 rounded overflow-hidden shadow-lg ">
              <img
                src={item.url.src}
                alt={item.description}
                className="w-full h-full object-cover rounded shadow "
              />
              <p className="text-white text-sm mt-2">{item.description}</p>
            </div>
          ))
        )}
      </div>

    </div>
  )
}

export default Gallaryopner
