import React from 'react'

type badgeProps={
  title:string;
}
function Badge(props:badgeProps) {
  return (
    <span className={` rounded text-center w-20 bg-[#4AFFEB] max-w-lg ${props.title.split(" ").length >1 ? "py-0" :"py-1" }`}>
        <p className='text-slate-600  w-20  rounded'>
          {props.title}
        </p>
    </span>
  )
}

export default Badge