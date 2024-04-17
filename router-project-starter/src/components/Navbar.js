import React from "react"; 
import logo from "../assets/Logo.svg"
import {Link} from "react-router-dom";
import {toast} from "react-hot-toast";
function Navbar(props){
    let isloggedIn=props.isloggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
    return (
        <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-4">
            <Link to="/">
                <img src={logo} alt="logo" loading="lazy" width={160} height={32}/>
            </Link>
            <nav>
               <ul className="flex gap-x-6 text-richblack-25">
                 <li>
                    <Link to="/">Home</Link>
                 </li>
                 <li>
                    <Link to="/about">About</Link>
                 </li>
                 <li>
                    <Link to="/contact">Contact</Link>
                 </li>
                </ul> 
            </nav>
            <div className="flex items-center gap-x-4 text-richblack-100">
                {  !isloggedIn &&
                    <Link to="/login">
                    <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Login</button>
                    </Link>
                }
                {  !isloggedIn &&
                   <Link to="/signup">
                   <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">SignUp</button>
                   </Link>
                }
                {  isloggedIn &&
                   <Link to="/">
                   <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"
                     onClick={()=>{
                     setIsLoggedIn(false);
                     toast.success("Logged Out");
                   }} >Logout</button>
                   </Link>
                }
                {   isloggedIn &&
                   <Link to="/dashboard">
                   <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Dashboard</button>
                   </Link>
                }   
            </div>
        </div>
    )
}
export default Navbar;