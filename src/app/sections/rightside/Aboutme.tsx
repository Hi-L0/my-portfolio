import { data } from '@/data/data'
import React from 'react'

export default function Aboutme() {
  return (
    <section id='about' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'>
        <h1 className='text-3xl pb-3'>
            About me
        </h1>
        <p className='text-base'>
            {data.description}
        </p>
    </section>
  )
}
