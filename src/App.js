
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/layout/Footer';
import Login from './components/Auth/Login';
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";




function App() {
  return(
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgetpassword" element={<ForgotPassword/>} />
      <Route path='/resetpassword/:token' element={<ResetPassword/>} />
    </Routes>  
    <Footer />
  </BrowserRouter>  
  )
}

export default App;

// Admin admincourses

