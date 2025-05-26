import React, { useState } from 'react'
import Style from "@/style/main.module.css"
import { openAnimation, closeAnimation } from '@/app/lib/animationfun'
import Shdows from './Shdows'
import information from '@/app/lib/data'



function Gallaryopner({ setOpenerGallary }) {

  const [currentimg, setcurrentimg] = useState("")
  const [currentdesc, setcurrentdesc] = useState("")
  const [openimg, setopenimg] = useState(false)

  const handleClick = () => {
    setOpenerGallary(false)

  }


  openAnimation("box")

  return (
    <div className={`box h-0 w-0 absolute top-[48%] left-[52%] translate-y-[-50%] translate-x-[-50%]  ${Style.glass} `}>
      <div className='w-72 h-60 absolute bottom-0 right-0'>
        <Shdows color1='red' color2='purple' intencity={100} />
      </div>
      <div className='float-right cursor-pointer text-3xl bg-rose-400' onClick={() => handleClick()}><i className="ri-close-fill"></i></div>
      <div className="  h-full w-full  overflow-y-scroll scrollbar-hide gap-4 ">
        {information.map((block, index) =>
          block.photo.map((item, i) => (
            <div key={`${index}-${i}`} className={`${Style.glass}w-50 h-30 inline-block rounded m-2 shadow-gray-600 shadow-lg cursor-pointer`}>
              <img
                src={item.url.src}
                alt={item.description}
                className="w-full h-full object-cover rounded overflow-hidden  "
                onClick={() => {
                  setcurrentimg(item.url.src)
                  setcurrentdesc(item.description)
                  setopenimg(true)
                }}
              />
            </div>
          ))
        )}
      </div>
            {
                 openimg && <OpenOneImage currentimg={currentimg} setopenimg={setopenimg}/>
           }

    </div>
  )
}

export default Gallaryopner


const OpenOneImage = ({ currentimg ,setopenimg}) => {
  openAnimation("box")
  return (
    <>
      <div className={`box h-0 w-0 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  ${Style.glass} `}>
        { <img src={currentimg} alt="Selected" className="w-full h-full object-cover rounded overflow-hidden" /> }
      </div>

      <div className=' cursor-pointer text-3xl bg-red-400 absolute  top-0 right-0 p-0' onClick={() =>setopenimg(false)}><i className="ri-close-fill"></i></div>

    </>

  )
}

