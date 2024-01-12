import React, { useState, useEffect } from "react";
import './index.css'
import CustomButton from "../../button";
import TextInput from "../../input";
import { request } from "../../../helpers/request";

const AddRssFeed = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
      const fetchTopics = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await request('/topics', 'GET', null, {
            'Authorization': `Bearer ${token}`,
          });
  
          if (response.topics) {
            setTopics(response.topics);
            console.log(response.topics);
          }
        } catch (error) {
          console.error('Error during fetching topics:', error);
        }
      };
  
      fetchTopics();
    }, []);
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
                    <h1 className='addtopic-title'>Add Rss Feed</h1>
                    <div className="center">
                        <select className="topics">

                        </select>
                        <TextInput
                        placeholder='Enter your RSS Feed'
                        type='text'
                        />
                        <div className='btn'>
                            <CustomButton
                                children={'Add RSS Feed'}
                                className="add-rssfeed-btn"
                                type="submit"
                            />
                        </div>
                        
                    </div>
                </form>
            </div>

        </div>
    );
}

export default AddRssFeed;