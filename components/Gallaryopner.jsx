import React from 'react'
import Style from "@/style/main.module.css"

function Gallaryopner({setOpenerGallary}) {
  const handleClick = () => {
    setOpenerGallary(false)
  }
  return (
    
    <div className={`${Style.glass} h-[90vh] w-[95vw] absolute top-7 `}>

        <span className='absolute right-0 top-0 '><i className="ri-close-fill text-2xl p-1 cursor-pointer" onClick={handleClick}></i></span>
    </div>


  )
}

export default Gallaryopner