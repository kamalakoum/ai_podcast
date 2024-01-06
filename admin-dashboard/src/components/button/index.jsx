import React from "react";
import "./index.css";
const CustomButton = ({ onClick, children, className = null }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default CustomButton;