import React from "react";

const Home = () => {
    return (
        <div className="admin-home">
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="/add-topics">Add Topics</a>
                    </li>
                    <li>
                        <a href="/add-rss-feed">Add RSS Feed</a>
                    </li>
                </ul>
            </nav>
            {/* Other content of the Home component */}
        </div>
    );
};

export default Home;
