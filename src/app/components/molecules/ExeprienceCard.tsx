import React from 'react'
import Badge from '../atoms/Badge'

function ExeprienceCard({displayed}:{displayed:boolean}) {
  return (
    <div>
        <div className={`group relative my-10 grid pb-3 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 ${displayed?'opacity-100':"opacity-40"}`}>
            <header className='sm:col-span-2 mb-2 mt-1 text-sm '>
                20202 0202
            </header>
            <div className='absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/30 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg '></div>
            <div className='sm:col-span-6'>
                <h1 className='text-2xl mb-3'>
                    post
                </h1>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque deleniti voluptates laudantium obcaecati dignissimos, est ab molestiae blanditiis quis recusandae ad, consequuntur non et deserunt dolor ea labore sed mollitia!
                </p>
                {/* badge section */}
                <div className='my-2 flex justify-start gap-3'>
                {/* <Badge/><Badge/><Badge/><Badge/><Badge/> */}
                        <Badge title='test'/>
                    {/* <p className='text-[#4AFFEB]'>
                    </p> */}
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default ExeprienceCard