import React from 'react'

export default function Button({name,onClick}) {
  return (
    <button className='border border-[#091C1E] w-[130px] hover:invert text-black bg-white font-medium rounded-sm px-3 py-1' onClick={onClick}>{name}</button>
  )
}
