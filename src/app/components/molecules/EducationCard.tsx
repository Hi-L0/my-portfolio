import React from 'react'
import Badge from '../atoms/Badge'

function EducationCard({data,displayed}:{data:educationType,displayed:boolean}) {
  return (
    <div>
        <div className={`group relative my-10 grid pb-3 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${displayed?'opacity-100':"opacity-40"}`}>
            <header className='sm:col-span-2 mb-2 mt-1 text-sm '>
                {data.date}
            </header>
            <div className='absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg '></div>
            <div className='sm:col-span-6'>
                <h1 className='text-2xl mb-3'>
                    {data.degree.title}
                </h1>
                {/* <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque deleniti voluptates laudantium obcaecati dignissimos, est ab molestiae blanditiis quis recusandae ad, consequuntur non et deserunt dolor ea labore sed mollitia!
                </p> */}
                {/* badge section */}
                <div className='my-2 flex justify-start gap-3'>
                {/* <Badge/><Badge/><Badge/><Badge/><Badge/> */}
                    <p className='text-[#4AFFEB]'>
                        {data.degree.uni} - {data.location}
                    </p>
                </div>
            
            </div>
        </div>
        {/* <div className='group relative my-10 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
            <header className='sm:col-span-2 mb-2 mt-1 text-sm'>
                time -time -annee
            </header>
            <div className='sm:col-span-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque deleniti voluptates laudantium obcaecati dignissimos, est ab molestiae blanditiis quis recusandae ad, consequuntur non et deserunt dolor ea labore sed mollitia!
            </div>
        </div>
        <div className='group relative my-10 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
            <header className='sm:col-span-2 mb-2 mt-1 text-sm'>
                time -time -annee
            </header>
            <div className='sm:col-span-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque deleniti voluptates laudantium obcaecati dignissimos, est ab molestiae blanditiis quis recusandae ad, consequuntur non et deserunt dolor ea labore sed mollitia!
            </div>
        </div>
        <div className='group relative my-10 grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
            <header className='sm:col-span-2 mb-2 mt-1 text-sm'>
                time -time -annee
            </header>
            <div className='sm:col-span-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque deleniti voluptates laudantium obcaecati dignissimos, est ab molestiae blanditiis quis recusandae ad, consequuntur non et deserunt dolor ea labore sed mollitia!
            </div>
        </div>
        <div className='group relative my-10  grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
            <header className='sm:col-span-2 mb-2 mt-1 text-sm'>
                time -time -annee
            </header>
            <div className='sm:col-span-6'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque deleniti voluptates laudantium obcaecati dignissimos, est ab molestiae blanditiis quis recusandae ad, consequuntur non et deserunt dolor ea labore sed mollitia!
            </div>
        </div> */}
    </div>
  )
}

export default EducationCard