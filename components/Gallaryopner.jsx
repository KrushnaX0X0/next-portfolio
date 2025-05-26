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
                className="w-full h-full object-cover rounded overflow-hidden "
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
  
     const [redHeart, setRedHeart] = useState(true)
     const [infoOpner,setinfoOpner] = useState(false)

  openAnimation("box")
  return (
    <>
      <div className={`box h-0 w-0 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]  ${Style.glass} `}>
        { <img src={currentimg} alt="Selected" className="w-full h-full object-cover rounded overflow-hidden p-5" /> }
      </div>
      <div className=' cursor-pointer text-3xl bg-red-400 absolute  top-0 right-0 p-0' onClick={() =>setopenimg(false)}><i className="ri-close-fill"></i></div>
          <div className={`h-12 ${Style.glass} absolute w-full bottom-0 right-0 flex items-center justify-end gap-4 text-white`}>
                    <span className='ml-4 text-[22px] '><i className=" cursor-pointer text-gray-800 ri-delete-bin-6-line"></i></span>
                    <span className='ml-4 text-[22px] text-black' onClick={()=>setinfoOpner(true)}><i className=" cursor-pointer ri-information-line"></i></span>
                    {
                        redHeart ? 
                        <span className='ml-4 text-[22px] text-black ' onClick={()=>{setRedHeart(false)}}><i className=" cursor-pointer ri-heart-line" ></i></span> :
                        <span className='ml-4 text-[22px] text-black' onClick={()=>{setRedHeart(true)}}><i className=" cursor-pointer ri-heart-fill text-red-600" ></i></span>

                    }

              <div className='h-full w-full '>
                {
                  infoOpner && 
                  <div className='h-30 w-40 bg-amber-300 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] p-2'>

                    </div>
                }
              </div>


               </div>
    </>

  )
} 

