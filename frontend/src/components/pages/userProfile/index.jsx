import React, { useState, useEffect } from 'react';
import './index.css';
import TextInput from '../../input';
import CustomButton from '../../button';
import { Link } from 'react-router-dom';
import { request } from '../../../helpers/request';

const UserProfile = () => {

    const [first_name,setFirstName] = useState("");
    const [last_name,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const getUserDetails = async () => {
        try {
            const token = localStorage.getItem('token');
            console.log(token);
            console.log('Authorization'+ `Bearer ${token}`,)
            const response = await request('/userprofile', 'GET', null, {
                    'Authorization': `Bearer ${token}`,
            });
            console.log('Axios Config:', response.config);
            
            // Set the state with user data
            setFirstName(response.first_name);
            setLastName(response.last_name);
            setEmail(response.email);
            setPassword(response.password);
            console.log(response);
            // console.log(response.first_name);
        } catch (error) {
            console.error('Error during fetching user details:', error);
        }
    };
    
    // Call getUserDetails when the component mounts
    useEffect(() => {
        getUserDetails();
    }, []);
    
  
  return (
    <div className='register-page'>
      <div className='form-container'>
        <form className='form-data'>
          <h1 className='title'>User Profile</h1>
          <div className="center">
            <TextInput
              label='First Name'
              placeholder={first_name}
              type='text'
              name='first_name'
              value={first_name}
            //   onChange={handleInputChange}
              required
            />

            <TextInput
              label='Last Name'
              placeholder={last_name}
              type='text'
              name='last_name'
              value={last_name}
            //   onChange={handleInputChange}
            />

            <TextInput
              label='Email'
              placeholder={email}
              type='email'
              name='email'
              value={email}
            //   onChange={handleInputChange}
            />

            <TextInput
              label='Password'
              placeholder={password}
              type='password'
              name='password'
              value={password}
            //   onChange={}
            />

            <div className='btn'>
              <CustomButton
                children={'Update Profile'}
                className="update-btn"
                type="submit"
              />
              <p className='mark'>Want to logout? <Link to='/' className='link-to'>
                Log out
              </Link></p>
            </div>
          </div>
        </form>
      </div>
      <div className='right-reg'></div>
    </div>
  );
};

export default UserProfile;
