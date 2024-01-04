import React from "react";
import './index.css';
import CustomButton from "../../button";

const Home = () => {

      
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
                    type="submit"
                 />
            </div>
        </header>
       <h1>Podcastify</h1>
       <div>
        <p>Transform Your RSS Feed into Personalized Podcasts</p>
       </div>
      </div>
    );
  };
  
  export default Home;