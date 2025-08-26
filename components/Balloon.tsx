"use client";
import React from 'react'

const Balloon = () => {
  return (
    <div className='absolute left-1/2 -translate-x-1/2  animate-balloon' >
        {/* Balloon */}
        <div className='bg-pink-400 border-2 border-pink-400 h-32 w-32 rounded-full opacity-80 text-white font-semibold p-2 flex items-center justify-center'>
        <span className='text-center'>Farru lubs you ❤️</span> 
        </div>
        {/* Knot */}
        <div className="w-0 h-0 absolute left-1/2 -translate-x-1/2  border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-pink-400 opacity-80"></div>
        {/* Rope */}
        <div className='h-24 absolute left-1/2 -translate-x-1/2 border-l-2 border-l-zinc-700'></div>
    </div>
  )
}

export default Balloon