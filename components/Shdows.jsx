import React from 'react'
import Style from "@/style/main.module.css"
  
function Shdows({color1="red", color2 ="blue" ,intencity=100}) {

    const COLORS = 
    {
        red : "bg-red-500",
        green : "bg-green-500",
        blue : "bg-blue-500",
        yellow : "bg-yellow-500",
        purple : "bg-purple-500",
        pink : "bg-pink-500",
        gray : "bg-gray-500",
        orange : "bg-orange-500",
        teal : "bg-teal-500",
        cyan : "bg-cyan-500",
        lime : "bg-lime-500",
        indigo : "bg-indigo-500",
        emerald : "bg-emerald-500",
        rose : "bg-rose-500",
        slate : "bg-slate-500",
        sky : "bg-sky-500",
    }  

  return (
 <>
    <div className ={`${COLORS[color1]}    h-1/3 w-full`} style={{filter:`blur(${intencity}px)`}}></div>
    <div className ={`${COLORS[color2]}   h-1/3  w-full`} style={{filter:`blur(${intencity}px)`}}></div>
 </>
  )
}

export default Shdows