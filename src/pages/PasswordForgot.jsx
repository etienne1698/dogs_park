import TextField from '../components/TextField'
import Button from '../components/Button'
import AuthHeader from '../components/AuthHeader';

function PasswordForgot() {
  return (
    <div className="mx-pageX grid gap-3 my-pageY">
    <AuthHeader txtHeader="Forgot Password" title="Forgot Password" txtIntro={(
    <>
      Enter the email address associated with<br />
      your account.
    </>
  )} centerIntro={false}/>
    <div className='mb-[200px]'>
    <TextField label="Email" placeholder="exemple@mail.fr" id="mail"/>
    </div>
    
    <Button txt="Proceed" variant="base" className="mx-auto w-[218px] mt-6"/>
  
  </div>
  )
}

export default PasswordForgot