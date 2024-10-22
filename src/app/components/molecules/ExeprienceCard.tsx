import React from 'react'
import Badge from '../atoms/Badge'

function ExeprienceCard() {
  return (
    <div>
        <div className={`group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4  `}>
            <header className='sm:col-span-2 mb-2 mt-1 text-sm '>
                2020 - 0202
            </header>
            <div className='absolute -inset-x-4 -inset-y-4 -z-10 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block   '></div>
            <div className='sm:col-span-6'>
                <h1 className='text-2xl mb-3'>
                    post-title
                </h1>
                    {/* description */}
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