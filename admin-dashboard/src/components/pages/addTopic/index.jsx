import React,{useState} from "react";
import TextInput from "../../input";
import CustomButton from "../../button";
import './index.css';

const AddTopics = () => {
    const [topic, setTopic] = useState("");

    const addTopic = () => {
        console.log("hello");
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
                    <h1 className='title'>Log in</h1>
                    <div className="center">
                        <TextInput
                        label='Topic'
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