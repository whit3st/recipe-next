import React from 'react'

export default function Button({name,onClick, style}) {
  return (
    <button style={{...style}} className='border border-[#091C1E] w-[130px] hover:invert text-black bg-white font-bold rounded-sm px-3 py-1 transition-all' onClick={onClick}>{name}</button>
  )
}
