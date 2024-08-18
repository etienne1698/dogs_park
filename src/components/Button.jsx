import React from 'react'

export default function Button({txt}) {
  return (
    <button className='bg-primary text-white px-12 py-6 text-button rounded-full hover:bg-secondary hover:text-primary'>{txt}</button>
  )
}
