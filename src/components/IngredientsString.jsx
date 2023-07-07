import React from 'react'

export default function IngredientsString({ingredients}) {
    const data = String(ingredients).split('|')
  return (
    <ol>
      <h2 className='text-xl font-bold'>Ingredients:</h2>
      {data.map((item, index) => (
        <li key={index}>-{item}</li>
      ))}
    </ol>
  )
}
