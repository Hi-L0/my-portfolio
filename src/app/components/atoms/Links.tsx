import React from 'react'
import '../style.css'
import { useScrollContext } from '@/app/contexts/scrollProvider';

function Links({link,selected_id}:{link:linkType,selected_id:number | undefined}) {
  const style={
    content:'',
  }
  
  return (
    <div className='py-2'>
        <a 
          href={`#${link.title}`} 
          key={link.id}
          className={selected_id===link.id  ? "active" : "flex text-slate-500 hover:text-slate-100"}
        >
          <span className={selected_id===link.id  ? "active-span"
          // "bg-slate-100 mt-3 mr-3 h-[1px] w-16  duration-150 ease-in-out"
            :
            'items-center justify-items-center mt-3 mr-3 h-[1px] w-6 bg-slate-500 hover:bg-slate-100'} id='point'></span>
            {link.title}
        </a>
    </div>
  )
}

export default Links