import React from 'react'
import '../style.css'


function Links({link,selected_id}:{link:linkType,selected_id:number | undefined}) {

  return (
    <div className='py-3 uppercase font-medium link'>
        <a 
          href={`#${link.title}`} 
          key={link.id}
          className={`flex text-sm tracking-widest ${selected_id===link.id  ? "active" : "flex text-slate-500 hover:text-slate-100"}`}
        >
          <span className={selected_id===link.id  ? "active-span"
          // "bg-slate-100 mt-3 mr-3 h-[1px] w-16  duration-150 ease-in-out"
            :
            ' mt-2 mr-3 h-[2px] w-8 bg-slate-500 hover:bg-slate-100'} id='point'></span>
            {link.title}
        </a>
    </div>
  )
}

export default Links