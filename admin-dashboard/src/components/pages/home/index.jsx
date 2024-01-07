import React from "react";
import './index.css';

const Home = () => {
    return (
        <div className="admin-home">
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="list-element">
                        <li className="element">
                            <a href="/add-topics">Add Topics</a>
                        </li>
                        <li className="element">
                            <a href="/add-rss-feed">Add RSS Feed</a>
                        </li>
                        <li className="element">
                            <a href="/">Logout</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="logo-container">
            </div>
           
        </div>
    );
};

export default Home;
