import AuthHeader from '../components/AuthHeader';
import TextField from '../components/TextField';
import Button from '../components/Button';

function PasswordReset() {
  return (
    <div className="mx-pageX grid gap-3 my-pageY">
    <AuthHeader txtHeader="Reset Password" title="Reset Password" txtIntro={<>Your new password must be different from<br/>
previously used password.</>}/>
   
    <TextField
      label="New Password"
      type="password"
      oeil="oeil"
      placeholder="*******"
    />
    <TextField
      label="Confirm Password"
      type="password"
      oeil="oeil"
      placeholder="*******"
    />
    
    <Button txt="Update Password" variant="base" className="mx-auto w-[231px] mt-[100px]"/>
    
  </div>
  )
}

export default PasswordReset