'use client'
import EducationCard from '@/app/components/molecules/EducationCard'
import React, { useEffect, useState } from 'react'
import { education } from '@/data/education/education'
function Education() {
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
    const [displayAll ,setDisplayAll]=useState(true)
    function handleHover(){
        // setSelected(id);
        setDisplayAll(false)
    }
  return (
    <section id='education' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' >
        <div className='mt-24'>
            {/* <h1 className='text-3xl'>
             education 
            </h1> */}
            
            <div>
                {/* education cards */}
                { education.map(item=>
                    <div key={item.id} onMouseEnter={(e)=>handleHover()} onMouseLeave={(e)=>{setDisplayAll(true)}}>
                        <EducationCard data={item} displayed={displayAll}/>
                    </div>
                )
            }
            </div>
        </div>
        
    </section>
  )
}

export default Education