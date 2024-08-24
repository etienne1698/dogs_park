import React from 'react'
import Description from '../components/Description'
import BgHeader from '../../src/assets/img/bg-description.png'

function Description1() {
    const testPark = {
        image: BgHeader,
        title: 'Central Park',
        dogs: '1000',
        location: '1.5',
        city: 'New York',
        visitors: '200-500',
        description: 'A large park in the heart of New York City, ideal for dog walks and relaxation.',
        rating: 4,
      };
  return (
    <div><Description parkinformations={testPark}/></div>
  )
}

export default Description1