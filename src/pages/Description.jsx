import React from 'react'
import IconText from '../components/IconText'
import iconCheck from '../../src/assets/img/check.png'

function Description() {
    const facilities = [ "Snack bar" ,"Shared Toilet"]
    
  return (

    <div>
        <div><img src=""/></div>
        <h2 className='font-bold'>Facilities</h2>
       {facilities.map((facility,index) => ( <IconText key={index} icon={iconCheck} txt={facility} className={"h-[12px]"}/>) )}   
    </div>
  )
}



export default Description