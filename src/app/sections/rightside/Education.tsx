'use client'
import EducationCard from '@/app/components/molecules/EducationCard'
import React, { useEffect, useState } from 'react'
import { education } from '@/data/education/education'
import { Timeline } from 'rsuite';
function Education() {
    const experienceInView = 0
    // const [isHovered,setIsHovered]=useState(false)
    // function handleHover(){
    //     setIsHovered(prev=>!prev);
    // }
    // console.log(isHovered)
    // useEffect(()=>{

    //     window.addEventListener('mouseover',handleHover)
        
    //     return ()=>{
    //         window.removeEventListener('mouseover',handleHover)
    //     }
    // },[])
    const [selected, setSelected] = useState<number|undefined>();
    
  return (
    <section id='education' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' >
        <div className='mt-24'>
            {/* <h1 className='text-3xl'>
             education 
            </h1> */}
            
            <Timeline isItemActive={index=>index===experienceInView}>
                {/* education cards */}
                { education.map(item=>
                    <Timeline.Item key={item.id} >
                        <EducationCard data={item}/>
                    </Timeline.Item>
                )
            }
            </Timeline>
        </div>
        
    </section>
  )
}

export default Education