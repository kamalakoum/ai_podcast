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
        // Navigate to the /user/profile page
        navigate('/user/profile');
      };
  

  return (
    <div className='home-page'>
      <header>
        <div className="navbar">
          <CustomButton
            children={'Profile'}
            className="home-btn"
            type="submit"
          />

          <CustomButton
            children={'Logout'}
            className="home-btn"
            type="button"  
            onClick={handleLogout} 
          />
        </div>
      </header>
      <div className="podcastify-content">
        <h1>Podcastify</h1>
        <div>
          <p>Transform Your RSS Feed into Personalized Podcasts</p>
        </div>
      </div>
    </div>
  );
};

export default Home;


// import React from "react";
// import './index.css';
// import CustomButton from "../../button";

// const Home = () => {

      
//     return (
//       <div className='home-page'>
//         <header>
//             <div className="navbar">
//                 <CustomButton
//                     children={'Profile'}
//                     className="home-btn"
//                     type="submit"
//                 />

//                 <CustomButton
//                     children={'Logout'}
//                     className="home-btn"
//                     type="submit"
//                  />
//             </div>
//         </header>
//         <div className="podcastify-content">
//             <h1>Podcastify</h1>
//             <div>
//                  <p>Transform Your RSS Feed into Personalized Podcasts</p>
//             </div>
//         </div>
       
//       </div>
//     );
//   };
  
//   export default Home;