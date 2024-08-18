import React from 'react'
import Button from './Button'

export default function Onboarding() {
  return (
    <div className='flex flex-col justify-center items-center m-6'>
        <img></img>
        <h1 className='text-h1 text-center mb-2'>Find a Dog Park near you!</h1>
        <p className='mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <Button txt="Let's go"/>
     </div>
  )
}
