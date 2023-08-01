import React from 'react'

const Card = ({children, ...props}) => {
  return (
    <div className='flex flex-col bg-white bg-opacity-80 rounded-lg gap-5 shadow-lg shadow-[#00000049] w-full relative overflow-hidden z-10' {...props}>
      {children}
    </div>
  )
}

export default Card
