'use client'
import React, { useState } from 'react'
import NavLinks from '../components/molecules/NavLinks'
import SpotlightEffect from '../components/effects/SpotlightEffect';

function FixedSection() {

  return (
    <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ' >
        <div className='block items-center justify-items-center '>
            <h1 className='text-5xl font-bold'>
                My full name
            </h1>
            <div className='lg:py-6 max-w-lg' >
              <p className='text-xl text-slate-200'>
                Software Engineer (Full stack developer)
              </p>
            </div> 
            <NavLinks/>
        </div>

    </div>
  )
}

export default FixedSection