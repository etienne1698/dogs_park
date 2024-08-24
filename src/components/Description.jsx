import React from 'react'
import IconText from './IconText'
import IconCheck from '../../src/assets/img/check.png'
import IconLocation from '../../src/assets/img/location.png'
import StarsNotation from './StarsNotation'

function Description({parkinformations}) {
  const { image, title, dogs, location, city, visitors, description, rating } = parkinformations;
    const facilities = [ "Snack bar" ,"Shared Toilet"]
    const fixedInformations = [
      { icon: IconLocation, textTemplate: (value) => `${value} km from Location` },
      { icon: IconLocation, textTemplate: (value) => `City: ${value}` },
      { icon: IconLocation, textTemplate: (value) => `Daily visitors: ${value}` },
    ];

    const variableValues = [location, city, visitors];
    
  return (

    <div className='font-poppins'>
        <div className='absolute w-full z-0'>
          <img src={image} className='w-full' alt="park image"/>
        </div>

      <div className='mx-2 px-5 py-[30px] bg-white rounded-t-[30px] relative z-10 top-[350px]'>

        <div className='grid gap-y-5'>
        
          <div className='grid gap-y-2'>
            <div className='flex justify-between items-end'>
              <h2 className='font-bold text-[20px]'>{title}</h2>
              <div className='my-2'> <StarsNotation rating={rating} /> </div>
            </div>
            <p>{dogs} <span className='text-[10px]'>/ Day</span></p>
            
          </div>
          
        
        <div className='flex justify-between text-[10px]'>
    <div className='grid gap-y-1'>
      {fixedInformations.map((info, index) => (
        <IconText
          key={index}
          icon={info.icon}
          txt={info.textTemplate(variableValues[index])}
          className={"h-[13px]"}
        />
      ))}
    </div>
    <div> 
      <a href="#link" className='text-[#8B3C76] underline'>View on Google Maps</a>
    </div>
  </div>
        </div>

        <div className='grid gap-y-6 border-t-[1px] border-solid border-[#7472E0] border-opacity-20 mt-[30px]'>
          <div className='grid gap-y-2 mt-[30px]'>
              <h2 className='font-bold text-[12px]'>Description</h2>
              <p className='text-[10px]'>{description}</p>
          </div>

          <div className='grid gap-y-2'>
                <h2 className='font-bold text-[12px]'>Facilities</h2>
                 <div className='text-[10px]'> 
                  {facilities.map((facility,index) => ( <IconText key={index} icon={IconCheck} txt={facility} className={"h-[12px]"}/>) )}  
                </div>
          </div> 
        </div>
      </div>
    </div>
  )
}



export default Description