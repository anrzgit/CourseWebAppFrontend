
import {BrowserRouter, Routes, Route,  } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/layout/Header';
import Headers from './components/layout/Headers';
import Courses from './components/Courses/Courses';
import Footer from './components/layout/Footer';
import Login from './components/Auth/Login';
import Register from "./components/Auth/Register";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Contact from "./components/Contact/Contact";
import Request from "./components/Request/Request";
import About from "./components/About/About";
import NotFound from "./components/layout/NotFound";
import Subscribe from "./components/Payments/Subscribe";
import PaymentSuccess from "./components/Payments/PaymentSuccess";
import PaymentFail from "./components/Payments/PaymentFail";
import CoursePage from "./components/CoursePage/CoursePage";
import Profile from "./components/Profile/Profile";
import ChangePassword from "./components/Profile/ChangePassword";
import UpdateProfile from "./components/Profile/UpdateProfile";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import CreateCourse from "./components/Admin/CreateCourse/CreateCourse";
import { useDispatch, useSelector } from "react-redux";
import toast,{ Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { loadUser } from "./redux/actions/user";
import  ProtectedRoute  from "./mine/protectedRoute.js"
import Loader from "./components/layout/Loader";
import AdminCourses from "./components/Admin/AdminCourses/AdminCourses";
import Users from "./components/Admin/Users/Users";







function App() {
  //remove right click
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // });

  const {isAuthenticated,user,message, error , loading} = useSelector(state => state.user);
  

  const dispatch = useDispatch();  
  useEffect(()=>{
    if(error){
      toast.error(error);
      dispatch({type: 'clearError'});
    }
    if(message){
      toast.success(message);
      dispatch({type: 'clearMessage'});
    }
  },[dispatch, error, message])  

    useEffect(()=>{
      dispatch(loadUser());
    },[dispatch])
    
    return(
    <BrowserRouter>
    {loading ? <Loader/> : (
      <>
       <Headers isAuthenticated={isAuthenticated} user={user} />
       {/* <Header isAuthenticated={isAuthenticated} user={user} /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<ProtectedRoute>
        <Courses />
      </ProtectedRoute>} />
      <Route path="/course/:id" element={<CoursePage user={user}/>} />
      <Route path="/contact" element={<Contact/> } />
      <Route path="/request" element={<Request/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<ProtectedRoute>
        <Profile user={user} />
      </ProtectedRoute>} />
      <Route path="/changepassword" element={<ChangePassword/>} />
      <Route path="/updateprofile" element={<UpdateProfile user={user} />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/forgetpassword" element={<ForgotPassword />} />
      <Route path='/resetpassword/:token' element={<ResetPassword/>} />
      <Route path="/subscribe" element={<Subscribe user={user} />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess/>} />
      <Route path="/paymentfail" element={<PaymentFail/>} />
      <Route path="*" element={<NotFound/>} />
      {/* Admin routes */}
      <Route path="/admin/dashboard" element={<Dashboard/>} />
      <Route path="/admin/createcourse" element={<CreateCourse/>} />
      <Route path="/admin/courses" element={<AdminCourses/>} />
      <Route path="/admin/users" element={<Users/>} />
    </Routes>  
    <Footer />
    <Toaster/>
      </>
    )}
    </BrowserRouter>  
  )
}

export default App;

// Admin admincourses

