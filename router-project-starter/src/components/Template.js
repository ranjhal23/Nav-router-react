import React from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";
import frame from "../assets/frame.png";
function Template(props){
  const setIsLoggedIn = props.setIsLoggedIn;
    return(
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-12 justify-between text-richblack-100">
            <div className="w-11/12 max-w-[450px] flex flex-col">
                <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{props.title}</h1>
                <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
                    <span className="text-richblack-100">{props.description1}</span>
                    <span className="text-blue-100 italic">{props.description2}</span>
                </p>
                {props.formType=="signup"?(<SignUpForm setIsLoggedIn={setIsLoggedIn}/>):(<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}
                <div className="flex w-full items-center gap-x-2 my-4">
                  <div className="h-[1px] bg-richblack-700 w-full"></div>
                        <p className="uppercase text-richblack-700 font-medium leading-[1.375rem]">
                          or
                         </p>
                   <div className="h-[1px] bg-richblack-700 w-full"></div>
                 </div>
                </div>
                <button className="flex rounded-md items-center ml-[-700px] w-[450px] h-10 justify-center border border-richblack-700 font-medium text-richblack-100 px-[12px] py-[8px] gap-x-2 mt-[52%]">
                 <FcGoogle />
                 <p>Sign in with Google</p>
                 </button>
                 <div className="relative w-11/12 max-w-[450px]">
                 <img src={frame} alt="pattern" width={558} height={504} loading="lazy" />
                 <img
                  src={props.image}
                  alt="student"
                  width={558}
                  height={504}
                  loading="lazy"
                  className="absolute -top-4 right-4 "
                  />
      </div>
        </div>
    )
}
export default Template;