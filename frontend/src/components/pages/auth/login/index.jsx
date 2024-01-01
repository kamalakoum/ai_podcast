import React, { useState } from 'react';
import './index.css';
import TextInput from '../../../input';
import CustomButton from '../../../button';
import { Link } from 'react-router-dom';
import { request } from '../../../../helpers/request';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login with:", email, password);
    try {
      const user = { email, password };
      const response = await request('/login', 'POST', user);
      console.log(response);
       if (response.status === 'success') {
        localStorage.setItem('token', response.authorisation.token);
        localStorage.setItem('user_type_id', response.user.user_type_id);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='login-page'>
      <div className='right-side'></div>
      <div className='left-side'>
        <form className='form-data' onSubmit={handleLogin}>
          <h1 className='title'>Log in</h1>
          <div className="center">
            <TextInput
              label='Email'
              placeholder='Enter your email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextInput
              label='Password'
              placeholder='Enter your password'
              type='password'
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='btn'>
              <CustomButton
                children={'Log in'}
                className="login-btn"
                type="submit"
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
