import React from 'react'
import Badge from '../atoms/Badge'
import { IoOpenOutline } from 'react-icons/io5'

function ExeprienceCard({data,displayed, selected}:{data:experienceType,displayed:boolean, selected:number}) {
   
  return (
    <div>
        <div className={`group relative my-10 grid pb-3 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${displayed?'opacity-100':"opacity-40"}`}>
            <header className='sm:col-span-2 mb-2 mt-2 text-xs '>
                {data.start_date} - {data.end_date}
            </header>
            <div className='absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg '></div>
            <div className='sm:col-span-6'>
                <div className=' hover:text-3xl'>
                    <a href={data.post.project_url} target='_blank' className={`flex justify-items-start justify-between text-slate-100 font-semibold hover:text-teal-400 ${!displayed ?  selected===data.id? 'text-teal-400':"":""} no-underline hover:no-underline`}>
                        <h1 className='text-2xl mb-3 '>
                            {data.post.title} - {data.company}
                        </h1>
                        {data.post.project_url != "#" && 
                            <div className='text-2xl mx-1'>
                                <IoOpenOutline size={25}/>
                            </div> 
                        }
                    </a>
                </div>
                <p>
                    {data.post.description}    
                </p>
                {/* badge section */}
                <div className='my-2 grid lg:grid-cols-5 grid-cols-4 gap-4'>
                {/* <Badge/><Badge/><Badge/><Badge/><Badge/> */}
                        { data.post.tech_used && data.post.tech_used.map(
                            item=> <Badge title={item}/>
                        )
                            
                        }
                    {/* <p className='text-[#4AFFEB]'>
                    </p> */}
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default ExeprienceCard