import React from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import Icons from '../Icons';

function SignUp() {
  return (
    <div className="mx-page grid gap-3">
      <TextField label="Full name" placeholder="Georges" />
      <TextField label="Email" placeholder="exemple@mail.fr" />
      <TextField
        label="password"
        type="password"
        oeil="oeil"
        placeholder="*******"
      />
      <div>
        <input type="checkbox" id="scales" name="scales" className="mr-2" />
        <label for="scales">I agree with terms & conditions</label>
      </div>
      <Button txt="Sign Up" variant="tertiary" className="mx-auto w-[218px] mt-5"/>

      Or continue with
      <Icons icon={<img src='favicon.png' />} url=""/>
    </div>
  );
}

export default SignUp