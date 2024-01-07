import React,{useState} from "react";
import TextInput from "../../input";
import CustomButton from "../../button";
import './index.css';
import { request } from '../../../helpers/request';

const AddTopics = () => {
    const [topic_name, setTopic] = useState("");

    const addTopic = async (e) => {
        e.preventDefault();
        try {
          const topic = {topic_name};
          const token = localStorage.getItem('token');
          const response = await request('/add/topic', 'POST', topic,{
            'Authorization': `Bearer ${token}`,});
          if (response.message === 'Topic created successfully') {
            setTopic("");
            setTimeout(() => {
              window.location.reload();
            }, 0);
          }
        } catch (error) {
          console.error('Error during adding topic:', error);
        }
    }
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
                <form className='form-data' onSubmit={addTopic}>
                    <h1 className='addtopic-title'>Add Topic</h1>
                    <div className="center">
                        <TextInput
                        placeholder='Enter your topic'
                        type='text'
                        onChange={(e) => setTopic(e.target.value)}
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
}

export default AddTopics;