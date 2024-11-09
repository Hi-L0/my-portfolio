import React, { useState } from 'react'
import NavLinks from '../components/molecules/NavLinks'
import SpotlightEffect from '../components/effects/SpotlightEffect';
import { useScrollContext } from '../contexts/scrollProvider';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Footer from '../components/molecules/Footer';



function FixedSection(props:personalInfoType) {
  // const {activeSection} = useScrollContext();
  // console.log(activeSection)
  return (
    <div className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 ' >
        <div className='block '>
            <h1 className='text-5xl font-bold'>
                {props.name}
            </h1>
            <div className='lg:py-6 max-w-lg' >
              <p className='text-xl text-slate-200'>
                {props.job_title} (Full stack developer)
              </p>
            </div> 
            <NavLinks/>
        </div>
        <div>
          <Footer/>
        </div>

    </div>
  )
}

export default FixedSection