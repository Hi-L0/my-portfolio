import ProjectCard from '@/app/components/molecules/ProjectCard'
import { projects } from '@/data/projects/projects'
import React, { useState } from 'react'

function Projects() {
    const [selected, setSelected]=useState(0)
  const [displayAll ,setDisplayAll]=useState(true)
    function handleHover(id:number){
        setSelected(id);
        setDisplayAll(false)
    }
  return (
    <div id='projects' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 scroll-mb-96 '>
        <h1 className='text-3xl pb-3'>
            Projects
        </h1>
        <div>
            {
                projects.map(item=>
                    <div 
                    key={item.id}
                    onMouseEnter={(e)=>handleHover(item.id)} onMouseLeave={(e)=>{setDisplayAll(true)}}
                  >
                    <ProjectCard data={item} displayed={displayAll} selected={selected}/>
                    </div>)
            }
        </div>
    </div>
  )
}

export default Projects