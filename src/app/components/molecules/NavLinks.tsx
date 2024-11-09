'use client'
import React, { useEffect, useState } from 'react'
import Links from '../atoms/Links'
import { links } from '@/data/links/links'
import { useScrollContext } from '@/app/contexts/scrollProvider';

function NavLinks() {
    const [active, setActive] = useState<number | undefined>();
    const { setActiveSection } = useScrollContext();
    const { activeSection } = useScrollContext();
    function handleClick(e: any, id: number){ 
        // e.stopPropagation()
        setActive(id);
        setActiveSection(id);
        
    }
    
    useEffect(() => {
        // Scroll to the section on page load if there's a hash in the URL
        if (window.location.hash) {
            const section_name = window.location.hash.slice(1);
            const section=links.find(item=>item.title===section_name);
            setActive(section?.id)
            if(section){
                // const section_id=_link.id
                setActiveSection(section.id)
            }
        }else{
            setActive(1)
        }
      }, []);
  return (
    <div className='my-7'>
        {/* NavLinks */}
        <ul>
            {
                links.map((item,index)=>
                    <div key={index}  className=''
                        onClick={(e) => handleClick(e, item.id)}>
                        <Links link={item} selected_id={activeSection}></Links>
                    </div>
                )
            }
        </ul>
    </div>
  )
}

export default NavLinks