import React from "react";
import "./index.css";
import CustomButton from "../../button";
import { useNavigate} from 'react-router-dom';

import Logo from "../../logo";

const LandingPage = () => {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        // 👇️ navigate to /contacts
        navigate('/register');
      };
    
      const navigateRegister = () => {
        // 👇️ navigate to /
        navigate('/register');
      };
    return (
      <div className="container">
        <div className="left">
          <CustomButton onClick={navigateToLogin} className="btn btn-left" >Sign up</CustomButton>
        </div>
        <div className="logo-container">
            <Logo className="logo" />
        </div>
        
        <div className="right">
          <CustomButton onClick={navigateRegister} className="btn btn-right"> Log in</CustomButton>
        </div>
      </div>
    );
  };


export default LandingPage;