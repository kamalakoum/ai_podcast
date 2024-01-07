import logo from './logo.svg';
import './App.css';
import Login from './components/pages/login';
import Home from './components/pages/home';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
