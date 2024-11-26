import Image from 'next/image'
import React from 'react'
import { IoOpenOutline } from 'react-icons/io5'

function ProjectCard({data, displayed, selected}:{data:projectsType, displayed:boolean, selected:number}) {
  return (
    <div>
        <div className={`group relative my-10 grid pb-3 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${displayed?'opacity-100':"opacity-40"}`}>
            <header className='sm:col-span-3 mb-2 mt-2 text-xs h-full'>
                <Image src='/pics/fakegen.png' alt='project-img' height={300} width={300}/>
            </header>
            <div className='absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg '></div>
            <div className='sm:col-span-5'>
                <div className=' hover:text-3xl'>
                    <a href={data.link} target='_blank' className={`flex justify-items-start justify-between text-slate-100 font-semibold hover:text-teal-400 ${!displayed ?  selected===data.id? 'text-teal-400':"":""} no-underline hover:no-underline`}>
                        <h1 className='text-2xl mb-3 '>
                            {data.title}
                        </h1>
                        {data.link &&  <IoOpenOutline size={23}/>}
                    </a>
                </div>
                <p className=''>
                    {data.description}  
                </p>
                {/* badge section */}
                
            
            </div>
        </div>
    </div>
  )
}

export default ProjectCard