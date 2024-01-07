import React from "react";

const AddTopics = () => {
    return (
        <div>
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="list-element">
                        <li className="element">
                            <a href="/add-topics">Add RSS Feed</a>
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

            </div>

        </div>
    );
}

export default AddTopics;