import logo from './logo.svg';
import './App.css';
import TextInput from './components/input';
import CustomButton from './components/button';
import Logo from './components/logo';
import LandingPage from './components/pages/landing';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Register from './components/pages/auth/register/register';


function App() {
  return (
    <>
    <TextInput/>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter> */}

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
