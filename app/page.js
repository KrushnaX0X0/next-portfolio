"use client";

import React, { use, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import Powerbtn from "@/components/Powerbtn";
import Shdows from "@/components/Shdows";
import { useRouter } from "next/navigation"


function Page() {
  const boxref = useRef("null");
  useGSAP(() => {}, { scope: [boxref,] });

  const router = useRouter();

  const handleClick = () => {
    console.log("clicked");
    gsap.to(".box", {
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.1,
      rotation: "180 deg",
      onComplete: () => {
        router.push("/screen");
      }
    })

  };

  return (
    <div >
      <Powerbtn onClick={handleClick} />

   

      <div className="w-[1200px] h-[1200px] absolute top-0 right-0 box" ref={boxref} >
        <Shdows color1="sky" color2="yellow" />
      </div>
    </div>
  );
}

export default Page;
