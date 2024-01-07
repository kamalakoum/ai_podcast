import logo from './logo.svg';
import './App.css';
import Login from './components/pages/login';
import Home from './components/pages/home';
import AddTopics from './components/pages/addTopic';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/addTopic' element={<AddTopics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
