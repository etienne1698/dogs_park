import TextField from '../components/TextField'
import Button from '../components/Button'
import AuthHeader from '../components/AuthHeader';

function PasswordForgot() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 mt-10">
      <div className="max-w-md w-full">
    <AuthHeader txtHeader="Forgot Password" title="Forgot Password" txtIntro={(
    <>
      Enter the email address associated with<br />
      your account.
    </>
  )} centerIntro={false}/>
    <div className='mb-[200px]'>
    <TextField label="Email" placeholder="exemple@mail.fr" id="mail"/>
    </div>
    
    <Button txt="Proceed" variant="base" className="flex justify-center mx-auto w-[218px] mt-6"/>
    
    </div>
  </div>
  )
}

export default PasswordForgot