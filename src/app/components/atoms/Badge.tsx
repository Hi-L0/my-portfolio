import React from 'react'

type badgeProps={
  title:string;
}
function Badge(props:badgeProps) {
  return (
    <span className='py-3 text-center'>
        <p className='text-slate-600 bg-[#4AFFEB] w-16 py-1 rounded'>
          {props.title}
        </p>
    </span>
  )
}

export default Badge