import "./App.css";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const[isloggedIn, setIsLoggedIn]= useState(false);
  return (
    <div className="w-screen h-[100%] bg-richblack-900 flex flex-col ">
       <Navbar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}  />
       <Routes>
        <Route index element={<Home/>}/>
        <Route path = "/about"  element={<About/>}/>
        <Route path = "/contact"  element={<Contact/>}/>
        <Route path = "/login"  element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path = "/signup"  element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path = "/dashboard"  element={
          <PrivateRoute isloggedIn={isloggedIn}>
          <Dashboard />
        </PrivateRoute>
        }/>
       </Routes>
    </div>
  )
}

export default App;
