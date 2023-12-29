import React from 'react';
import './index.css';
import TextInput from '../../../input';
import CustomButton from '../../../button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login-page'>
      <div className='right-side'>
       
      </div>
      <div className='left-side'>
      <form className='form-data'>
          <h1 className='title'>Log in</h1>
          <div className="center">

          <TextInput
            label='Email'
            placeholder='Enter your email'
            type='email'
          />

          <TextInput
            label='Password'
            placeholder='Enter your password'
            type='password'
          />
          <div className='btn'>
            <CustomButton 
            children={'Log in'}
            className= "login-btn"
            />

            <p className='mark'>Do not have an account? <Link to='/register' className='link-to'>
                  Sign Up
                </Link></p>
          </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;