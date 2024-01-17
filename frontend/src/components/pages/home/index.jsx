import React, {useEffect ,useState} from "react";
import './index.css';
import CustomButton from "../../button";
import { useNavigate } from "react-router-dom"; 
import { request } from '../../../helpers/request';

const Home = () => {
    const navigate = useNavigate(); 
    const [topics, setTopics] = useState([]);
    const [user_topic , setUserTopic] = useState("");

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

    const handleLogout = async () => {
      try {
        const token = localStorage.getItem('token');
        await request('/logout', 'POST', null, {
          'Authorization': `Bearer ${token}`,
        });
  
        
        localStorage.removeItem('token');
  
        navigate('/');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    };

    const handleProfileClick = () => {
        navigate('/user/profile');
      };

    const handleUserTopic = (e) => {
      const user_topic = e.target.value;
      setUserTopic(user_topic);
      console.log(user_topic);
    }
  

  return (
    <div className='home-page'>
      <header>
        <div className="navbar">
          <CustomButton
            children={'Profile'}
            className="home-btn"
            onClick={handleProfileClick} 
          />

          <CustomButton
            children={'Logout'}
            className="home-btn"
            onClick={handleLogout} 
          />
        </div>
      </header>
      <div className="podcastify-content">
        <h1>Podcastify</h1>
        <div>
          <p>Transform Your RSS Feed into Personalized Podcasts</p>
        </div>

        <div className="topics-container">
            <div className="content-container">
                <div className="choose-topics"><p>Choose your topic: </p></div>
                <div>
                <select className="custom-selector" onChange={handleUserTopic}>
                    {topics.map(topic => (
                            <option key={topic.id} value={topic.id}>
                            {topic.topic_name}
                            </option>
                         ))}
                </select>
                </div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;