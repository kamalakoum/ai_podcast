import React from "react";
import './index.css'
import CustomButton from "../../button";
import TextInput from "../../input";

const AddRssFeed = () => {
    return (
        <div>
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="list-element">
                        <li className="element">
                            <a href="/add-topic">Add Topics</a>
                        </li>
                        <li className="element">
                            <a href="/home">Home</a>
                        </li>
                        <li className="element">
                            <a href="/">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>

            
            <div className="center-form">
                <form className='form-data' >
                    <h1 className='addtopic-title'>Add Topic</h1>
                    
                </form>
            </div>

        </div>
    );
}

export default AddRssFeed;