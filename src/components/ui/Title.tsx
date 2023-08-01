import React from 'react'

const Title = ({children, custom}) => {
  return <h1 className={'text-3xl md:text-4xl font-bold text-center ' + custom}>{children}</h1>;
}

export default Title
