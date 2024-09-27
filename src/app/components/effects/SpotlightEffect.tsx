// 'use client'
import React from 'react'

type positionType={
    x:number,
    y:number,
}
function SpotlightEffect({position}:{position:positionType}) {
    
    return (
        <div
        className="fixed pointer-events-none  z-10 -inset-0 h-screen opacity-100 transition duration-300"
        style={{
          opacity:1,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(74,267,235,.15),rgba(74,167,235,.1),rgba(74,167,235,.06), transparent 50%)`,
        }}
      />

  )
}

export default SpotlightEffect