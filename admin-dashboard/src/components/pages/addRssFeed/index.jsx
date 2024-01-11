import React from "react";
import './index.css'
import CustomButton from "../../button";

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

            


        </div>
    );
}

export default AddRssFeed;