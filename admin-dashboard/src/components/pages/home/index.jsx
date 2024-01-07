import React from "react";
import './index.css';

const Home = () => {
    return (
        <div className="admin-home">
            <nav className="navbar">
                <ul className="list-element">
                    <li className="element">
                        <a href="/add-topics">Add Topics</a>
                    </li>
                    <li className="element">
                        <a href="/add-rss-feed">Add RSS Feed</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
