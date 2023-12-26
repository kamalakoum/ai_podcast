import React from 'react';
import logoImage from '../../ai-podcast-logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" />
    </div>
  );
};

export default Logo;