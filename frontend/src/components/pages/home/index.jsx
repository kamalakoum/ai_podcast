import React from "react";
import './index.css';
import CustomButton from "../../button";
import { useNavigate } from "react-router-dom"; 
import { request } from '../../../helpers/request';

const Home = () => {
    const navigate = useNavigate(); 

    const handleLogout = async () => {
      try {
        const token = localStorage.getItem('token');
        await request('/logout', 'POST', null, {
          'Authorization': `Bearer ${token}`,
        });
  
        
        localStorage.removeItem('token');
  
        navigate('/');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    const handleProfileClick = () => {
        navigate('/user/profile');
      };
  

  return (
    <div className='home-page'>
      <header>
        <div className="navbar">
          <CustomButton
            children={'Profile'}
            className="home-btn"
            onClick={handleProfileClick} 
          />

          <CustomButton
            children={'Logout'}
            className="home-btn"
            onClick={handleLogout} 
          />
        </div>
      </header>
      <div className="podcastify-content">
        <h1>Podcastify</h1>
        <div>
          <p>Transform Your RSS Feed into Personalized Podcasts</p>
        </div>

        <div className="topics-container">
            <div>
                <p>Choose your topic: </p>
                <select>
                    <option value="topic1">Topic 1</option>
                    <option value="topic2">Topic 2</option>
                    <option value="topic3">Topic 3</option>
                </select>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;