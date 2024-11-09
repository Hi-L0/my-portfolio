
import ExeprienceCard from '@/app/components/molecules/ExeprienceCard';
import React, { useState } from 'react'
import { Timeline } from 'rsuite';


function Experiences() {
  const testarray = ["dsjdsk","dsjdsk","dsjdsk"];
  const experienceInView = 0
  const [displayAll ,setDisplayAll]=useState(true)
    function handleHover(){
        // setSelected(id);
        setDisplayAll(false)
    }
  return (
    <div id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
       <div>
        {testarray.map((item,index)=>
          <div 
            key={index}
            onMouseEnter={(e)=>handleHover()} onMouseLeave={(e)=>{setDisplayAll(true)}}
          >
            <ExeprienceCard displayed={displayAll} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Experiences