import AuthHeader from '../components/AuthHeader';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Icons from '../components/Icons';
import fbIcon from '../assets/img/fb_icon.png';
import googleIcon from '../assets/img/google_icon.png'
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="mx-pageX grid gap-3 my-pageY">
    <AuthHeader txtHeader="Sign In" title="Welcome back" txtIntro="Please enter your account here"/>
    <TextField label="Email" placeholder="exemple@mail.fr" id="mail" />
    <TextField
      label="password"
      type="password"
      oeil="oeil"
      placeholder="*******"
    />
    <div className='flex justify-end'>
        <Link to ="/signin" className='underline'>Forgot Password?</Link>
    </div>
    <Button txt="Sign Up" variant="base" className="mx-auto w-[218px] mt-6"/>
    <div className='flex flex-col items-center justify-center'>
    Or continue with
    <div className='flex mt-8 justify-around w-1/3 mb-5'>
    <Icons icon={<img src={fbIcon} />} url=""/>
    <Icons icon={<img src={googleIcon} />} url=""/>
    
    </div>
    <div className='flex space-x-2'><span>Already have Account?</span><Link to ="/signin" className='text-orangeLink'>Sign In</Link></div>
    </div>
  </div>
  )
}

export default SignIn