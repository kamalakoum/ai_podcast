import React from "react";
import "./index.css";
const TextInput = ({ label = "Label",placeholder, onChange, type = "text" }) => {
  return (
    <div className="input-wrapper">
        <div >
            <label className="label-input">{label}:</label>
        </div>
      <input
        type={type}
        className="modern-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;