import React, { useState } from 'react';
import TextInput from '../../input';
import CustomButton from '../../button';
import { request } from '../../../helpers/request';
import './index.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const response = await request('/adminlogin', 'POST', user);
      if (response.status === 'success') {
        setEmail("");
        setPassword("");
        localStorage.setItem('token', response.authorisation.token);
        setTimeout(() => {
          window.location.reload();
        }, 0);
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
