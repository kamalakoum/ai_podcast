import React, { useState } from 'react';
import './index.css';
import TextInput from '../../../input';
import CustomButton from '../../../button';
import { Link } from 'react-router-dom';
import { request } from '../../../../helpers/request';

const Register = () => {

  const [first_name,setFirstName] = useState("");
  const [last_name,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Register with:",first_name,last_name,email,password);
    try {
      const user = {first_name,last_name,email,password};
      const response = await request('/register', 'POST', user);

      console.log(response);

    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='register-page'>
      <div className='form-container'>
        <form className='form-data' onSubmit={handleRegister}>
          <h1 className='title'>Register</h1>
          <div className="center">
            <TextInput
              label='First Name'
              placeholder='Enter your first name'
              type='text'
              name='first_name'
              onChange={(e)=> setFirstName(e.target.value)}
              required
            />

            <TextInput
              label='Last Name'
              placeholder='Enter your last name'
              type='text'
              name='last_name'
              onChange={(e)=> setLastName(e.target.value)}
            />

            <TextInput
              label='Email'
              placeholder='Enter your email'
              type='email'
              name='email'
              onChange={(e)=>setEmail(e.target.value)}
            />

            <TextInput
              label='Password'
              placeholder='Enter your password'
              type='password'
              name='password'
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className='btn'>
              <CustomButton
                children={'Sign up'}
                className="signup-btn"
                type="submit"
              />
              <p className='mark'>Already have an account? <Link to='/login' className='link-to'>
                Log in
              </Link></p>
            </div>
          </div>
        </form>
      </div>
      <div className='right-reg'></div>
    </div>
  );
};

export default Register;