import React, { useState, useEffect } from "react";
import './index.css'
import CustomButton from "../../button";
import TextInput from "../../input";
import { request } from "../../../helpers/request";

const AddRssFeed = () => {
    const [topics, setTopics] = useState([]);
    const [topic_id, setTopicId] = useState(null);
    const [source, setSource] = useState("");
    const [url, setURL] = useState("");

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

    const handleTopicChange = (event) => {
        const selectedTopicId = event.target.value;
        setTopicId(selectedTopicId);
    };

    const addRssFeed = async (e) => {
        e.preventDefault();
        try {
          const data = {topic_id, source, url};
          const token = localStorage.getItem('token');
          const response = await request('/addRssFeed', 'POST', data,{
            'Authorization': `Bearer ${token}`,});
          if (response.message === 'RssFeed created successfully') {
            setSource("");
            setURL("");
            setTopicId(null);
            setTimeout(() => {
              window.location.reload();
            }, 0);
          }
        } catch (error) {
          console.error('Error during adding rss-feed:', error);
        }
      };


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
                <form className='form-data' onSubmit={addRssFeed}>
                    <h1 className='addtopic-title'>Add Rss Feed</h1>
                    <div className="center">
                        <select className="topics" onChange={handleTopicChange}>
                          {topics.map(topic => (
                            <option key={topic.id} value={topic.id}>
                            {topic.topic_name}
                            </option>
                         ))}
                        </select>
                        <TextInput
                        placeholder='Enter URL for rss-feed'
                        type='text'
                        onChange={(e) => setURL(e.target.value)}
                        />
                        <TextInput
                        placeholder='Enter source'
                        type='text'
                        onChange={(e) => setSource(e.target.value)}
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