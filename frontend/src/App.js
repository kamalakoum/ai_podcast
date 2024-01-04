import logo from './logo.svg';
import './App.css';
import TextInput from './components/input';
import CustomButton from './components/button';
import Logo from './components/logo';
import LandingPage from './components/pages/landing';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './components/pages/auth/register';
import Login from './components/pages/auth/login';
import UserProfile from './components/pages/userProfile';
import Home from './components/pages/home';


function App() {
  return (
    <>
    {/* <Home />. */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/user/profile' element={<UserProfile />}/>
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>

      {/* <LandingPage/> */}
      {/* <TextInput type="email" placeholder="Enter Email"/>
      <CustomButton className="blue">
        Sign in
      </CustomButton>
      <Logo /> */}
    </>
  );
}

export default App;
