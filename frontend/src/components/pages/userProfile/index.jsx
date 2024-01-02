import React, { useState, useEffect } from 'react';
import './index.css';
import TextInput from '../../../input';
import CustomButton from '../../../button';
import { Link } from 'react-router-dom';
import { request } from '../../../../helpers/request';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  // Fetch user data from the API when the component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await request('/api/user/profile'); // Adjust the API endpoint accordingly
        const { data } = response;
        setUserData(data); // Assuming your API response has properties like first_name, last_name, email, and password
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleUserProfile = async (e) => {
    e.preventDefault();

    // Send a request to update the user profile
    try {
      const response = await request('/api/user/profile', {
        method: 'PUT',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle the response (success or error) as needed
      console.log('User profile updated successfully:', response);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='register-page'>
      <div className='form-container'>
        <form className='form-data' onSubmit={handleUserProfile}>
          <h1 className='title'>User Profile</h1>
          <div className="center">
            <TextInput
              label='First Name'
              placeholder='Enter your first name'
              type='text'
              name='first_name'
              value={userData.first_name}
              onChange={handleInputChange}
              required
            />

            <TextInput
              label='Last Name'
              placeholder='Enter your last name'
              type='text'
              name='last_name'
              value={userData.last_name}
              onChange={handleInputChange}
            />

            <TextInput
              label='Email'
              placeholder='Enter your email'
              type='email'
              name='email'
              value={userData.email}
              onChange={handleInputChange}
            />

            <TextInput
              label='Password'
              placeholder='Enter your password'
              type='password'
              name='password'
              value={userData.password}
              onChange={handleInputChange}
            />

            <div className='btn'>
              <CustomButton
                children={'Update Profile'}
                className="signup-btn"
                type="submit"
              />
              <p className='mark'>Want to logout? <Link to='/logout' className='link-to'>
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
