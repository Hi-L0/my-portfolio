
import ExeprienceCard from '@/app/components/molecules/ExeprienceCard';
import { experiences } from '@/data/experience/experience';
import React, { useEffect, useState } from 'react'
import { Timeline } from 'rsuite';


function Experiences() {
  const testarray = ["dsjdsk","dsjdsk","dsjdsk"];
  const experienceInView = 0
  const [selected, setSelected]=useState(0)
  const [displayAll ,setDisplayAll]=useState(true)
    function handleHover(id:number){
        setSelected(id);
        setDisplayAll(false)
    }
    // useEffect(()=>{

    //       window.addEventListener('mouseover',handleHover)
          
    //       return ()=>{
    //           window.removeEventListener('mouseover',handleHover)
    //       }
    //   },[])
  return (
    <div id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
       <div>
        {experiences.map((item,index)=>
          <div 
            key={index}
            onMouseEnter={(e)=>handleHover(item.id)} onMouseLeave={(e)=>{setDisplayAll(true)}}
          >
            <ExeprienceCard data={item} selected={selected} displayed={displayAll} />
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Experiences