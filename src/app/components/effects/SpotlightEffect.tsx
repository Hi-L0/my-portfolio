// 'use client'
import React from 'react'

type positionType={
    x:number,
    y:number,
}
function SpotlightEffect({position}:{position:positionType}) {
    
    return (
        <div
        className="fixed pointer-events-none  z-10 -inset-0 h-screen opacity-5 transition duration-300"
        style={{
          opacity:1,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(74,267,235,.50),rgba(74,167,235,.20),rgba(74,167,235,.06), transparent 50%)`,
          // radial-gradient(
          //   farthest-corner circle at 51% 50%,
          //   #00dfff 0%, 25%, #8c00ea 100%
          // );
        }}
      />

  )
}

export default SpotlightEffect