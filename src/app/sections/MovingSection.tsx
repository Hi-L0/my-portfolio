'use client'
import React, { useEffect, useRef, useState } from 'react'
import Aboutme from './rightside/Aboutme'
import Education from './rightside/Education'
import { useScrollContext } from '../contexts/scrollProvider';
import Projects from './rightside/Projects';
import Experiences from './rightside/Experiences';
import ResumeBtn from '../components/atoms/btns/ResumeBtn';
import { data } from '@/data/data';

function MovingSection() {
    // const { activeSection } = useScrollContext();
    const { setActiveSection,activeSection } = useScrollContext();
    const section1Ref = useRef<HTMLElement | null>(null);
    const section2Ref = useRef<HTMLElement | null>(null);
    const section3Ref = useRef<HTMLElement | null>(null);
    const section4Ref = useRef<HTMLElement | null>(null);
    // console.log(activeSection)
    
    // const [incr,setIncr]=useState(0)
    
    useEffect(()=>{
        const handleScroll = () => {
            const section1Top = section1Ref.current?.offsetTop || 0;
            const section2Top = section2Ref.current?.offsetTop || 0;
            const section3Top = section3Ref.current?.offsetTop || 0;
            const section4Top = section4Ref.current?.offsetTop || 0;
      
            const scrollPosition = window.scrollY + window.innerHeight / 4;
            // console.log(scrollPosition);
            if (scrollPosition>= section4Top){
              setActiveSection(4)
            }
            else if (scrollPosition>= section3Top) {
              setActiveSection(3);
            } else if (scrollPosition>= section2Top) {
              setActiveSection(2);
            } else {
              setActiveSection(1);
            }
            // console.log(activeSection)
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [setActiveSection]);
        

    useEffect(() => {
        // Scroll to the section on page load if there's a hash in the URL
        if (window.location.hash) {
            const section = document.querySelector(window.location.hash);
        //   var section_name:string=window.location.hash.slice(1)
        //   console.log(section_name)
        //   const _link=links.find(item=>section_name=item.title)
        //   console.log(_link)
        //   if(_link){
        //       const section_id=_link.id
        //       setActiveSection(section_id)
        //   }
            // console.log(section)
            if (section) {
              section.scrollIntoView({ behavior: 'smooth', block:'center' });
            
            }
        }
    }, []);
    
  return (
    <div className='pt-24 lg:py-24'> 
        <section ref={section1Ref} className='-mt-4'>
            <Aboutme/>
        </section>
        <section ref={section2Ref}>
            <Education/>
        </section>
        <section ref={section3Ref} >
           <Experiences/>     
        </section>
        <section ref={section4Ref} >
           <Projects/>     
        </section>
        <section id='myresume' className='mt-72 bottom-0 right-0 '>
          <div className='flex lg:justify-end items-start lg:text-right'>
            <div className='-mb-14'>
              <ResumeBtn/>
            </div>
          </div>
        </section>
    </div>
  )
}

export default MovingSection