'use client'
import Image from "next/image";
import Aboutme from "./sections/rightside/Aboutme";
import MovingSection from "./sections/MovingSection";
import FixedSection from "./sections/FixedSection";
import { useEffect, useRef, useState } from "react";
import SpotlightEffect from "./components/effects/SpotlightEffect";
import { ScrollProvider, useScrollContext } from "./contexts/scrollProvider";



export default function Home() {
  const {activeSection} = useScrollContext()
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e:any) => {
    const scrollOffsetY = window.scrollY;
    const scrollOffsetX = window.scrollX;
    setPosition({
      x: e.clientX  , // Horizontal position of the cursor
      y: e.clientY , // Vertical position of the cursor
    });
    // console.log(position)
  };
  
  return (
    
    <div >
            <SpotlightEffect position={position}/>
        <div onMouseMove={handleMouseMove} className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            
              <FixedSection/>

            
            <div className=" pt-24 lg:w-1/2 lg:py-5 md:min-h-screen md:scroll-smooth">
              <MovingSection/>
            </div>
          </div>
        </div>


    </div>

  );
}
