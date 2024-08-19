import cercleImage from '../assets/img/cercle.png';
import arrowReturn from '../assets/img/arrow_return.png';


function AuthHeader({txtHeader, title, txtIntro, centerIntro = true }) {
  return (

    <div className='flex flex-col'>
        
    <div className='flex w-full mb-8'>

        <div className='flex items-center'>
        <img src={cercleImage} className='absolute'/>
        <img src={arrowReturn} className='relative left-1.5'/>
        </div>


        <div className='w-full text-center -ml-6 text-[18px]'>{txtHeader}</div>

    </div>
    <div className='mb-8 text-center'>
    <div className='font-bold text-[24px] mb-2'>{title}</div>
    <div className={`text-[16px] ${centerIntro ? 'text-center' : 'text-left'} text-greyText`}>{txtIntro}</div>
    </div>
    </div>
  )
}

export default AuthHeader