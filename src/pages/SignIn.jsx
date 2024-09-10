import AuthHeader from '../components/AuthHeader';
import TextField from '../components/TextField';
import Button from '../components/Button';
import Icons from '../components/Icons';
import fbIcon from '../assets/img/fb_icon.png';
import googleIcon from '../assets/img/google_icon.png'
import { Link } from 'react-router-dom';

function SignIn() {
  return (
    <div className="flex flex-col items-center min-h-screen px-4 mt-10">
    <div className="max-w-md w-full">
        <AuthHeader txtHeader="Sign In" title="Welcome back" txtIntro="Please enter your account here"/>

        <TextField label="Email" placeholder="exemple@mail.fr" id="mail"/>
        <TextField
          label="Password"
          type="password"
          oeil="oeil"
          placeholder="*******"
        />

        <div className='flex justify-end mb-4'>
            <Link to="/signin" className='underline'>Forgot Password?</Link>
        </div>

        <Button txt="Sign In" variant="base" className=" flex justify-center mx-auto w-[218px] mt-6"/>
        

        <div className='flex flex-col items-center mt-8'>
            <span>Or continue with</span>
            <div className='flex mt-4 justify-around w-2/3 md:w-1/3 mb-5'>
                <Icons icon={<img src={fbIcon} />} url=""/>
                <Icons icon={<img src={googleIcon} />} url=""/>
            </div>
            <div className='flex space-x-2 mt-4'>
                <span>Already have an Account?</span>
                <Link to="/signup" className='text-orangeLink'>Sign Up</Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default SignIn