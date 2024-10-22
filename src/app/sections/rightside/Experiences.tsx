
import ExeprienceCard from '@/app/components/molecules/ExeprienceCard';
import React from 'react'
import { Timeline } from 'rsuite';


function Experiences() {
  const testarray = ["dsjdsk","dsjdsk","dsjdsk"];
  const experienceInView = 0
  
  return (
    <div id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
       <Timeline isItemActive={index=>index===experienceInView}>
        {testarray.map(item=>
          <Timeline.Item key={item}><ExeprienceCard/></Timeline.Item>
          )
        }
      </Timeline>
    </div>
  )
}

export default Experiences