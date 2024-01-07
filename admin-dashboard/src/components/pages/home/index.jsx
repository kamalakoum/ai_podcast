import React from "react";
import './index.css';

const Home = () => {
    const [topic, setTopic] = useState("");
    return (
        <div className="admin-home">
            <div className="navbar-container">
                <nav className="navbar">
                    <ul className="list-element">
                        <li className="element">
                            <a href="/add-topic">Add Topics</a>
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
            <form className='form-data' onSubmit={handleLogin}>
          <h1 className='title'>Log in</h1>
          <div className="center">
            <TextInput
              label='Email'
              placeholder='Enter your email'
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className='btn'>
              <CustomButton
                children={'Add Topic'}
                className="addTopics-btn"
                type="submit"
              />
            </div>
          </div>
        </form>
            </div>
           
        </div>
    );
};

export default Home;
