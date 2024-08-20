import AuthHeader from '../components/AuthHeader';
import Button from '../components/Button';

function CodeInput({ i }) {
    return (
      <input 
        type="text" 
        placeholder={i + 1}
        className="border border-solid border-[#BABABA] rounded w-[40px] h-[40px] text-center placeholder-black"
      />
    );
  }

function EmailCheck() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 mt-10">
      <div className="max-w-md w-full">
    <AuthHeader txtHeader="Email Verification" title="Email Verification" txtIntro={<>Please enter the 4 digit code sent to <br/> your email Address</>}/>   
    <div className='flex justify-center space-x-4 mt-[100px]'>
        {Array(4).fill().map((_, i) => (
        <CodeInput key={i} i={i} />
        ))}
    </div>
    <Button txt="Verify" variant="base" className="flex justify-center mx-auto w-[218px] mt-[130px]"/>
    </div>
  </div>
  )
}

export default EmailCheck