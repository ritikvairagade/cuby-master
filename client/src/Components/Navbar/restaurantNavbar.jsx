import React, { useState } from "react";
import {FaUserAlt} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io"
import {RiSearchLine} from "react-icons/ri"
import {AiOutlineArrowLeft} from "react-icons/ai"

// components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";


const MobileNav = ({SignIn, SignUp}) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
     return (
       <div className="flex w-full items-center justify-between lg:hidden">
           <AiOutlineArrowLeft/>
         <div className="w-28">
                   <img src="https://i.ibb.co/7G5YkWS/M-logo.png" alt="logo" className="w-full h-full" />     
              </div>

              <div className="flex items-center gap-3">
              <button className="bg-cuby-400 text-white py-2 px-3 rounded-full">Use App</button> 
              <span
                onClick={() => setIsDropDownOpen((prev) => !prev)}
                className="border p-2 border-gray-300 text-cuby-400 rounded-full"
              >
                <FaUserAlt onClick={() => setIsDropDownOpen((prev) => !prev)} />
              </span>
              {isDropDownOpen && (
                <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
                  <button onClick={SignIn}>Sign In</button>
                  <button onClick={SignUp}>Sign Up</button>
                </div>
              )}
            </div>  
       </div>
     );
};

const LargeNav = ({ SignIn, SignUp }) => {

  return (
    <>
    <div className=" hidden lg:inline container px-40 mx-auto">
    <div className="hidden gap-4 w-full items-center  justify-around  lg:flex ">
    <div className="w-28">
    <img src="https://i.ibb.co/7G5YkWS/M-logo.png" alt="logo" className="w-full h-full" />     
    </div>

     <div className="w-3/4 bg-white shadow-md  p-3 flex items-center gap-3 border border-gray-200 rounded">
       <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
         <span className="text-cuby-400"><HiLocationMarker/></span>
         <input type="text" placeholder="Ballarpur" className="focus:outline-none" />
         <IoMdArrowDropdown />
       </div>
       <div className="flex w-full items-center gap-2">
         <RiSearchLine/>
         <input type="text" placeholder="Search for Restaurant, cuisine or a dish" className="w-full focus:outline-none"/>
       </div>
     </div>
  
     <div className="ml-20 flex gap-4 ">
        <button
          onClick={SignIn}
          className="text-gray-500 text-xl hover:text-gray-800"
        >
          Login
        </button>
        <button
          onClick={SignUp}
          className="text-gray-500 text-xl hover:text-gray-800"
        >
          Signup
        </button>
     </div>

    </div>
    
    </div>
    </>

  )


};


 const Navbar = () => {
  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const openSignInmodal = () => setOpenSignin(true);
  const openSignUpmodal = () => setOpenSignup(true);

    return (
        <>
           {" "}
           <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
           <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />
           <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
            <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />
            <LargeNav SignIn={openSignInmodal} SignUp={openSignUpmodal} />  
          
          </nav> 
        </>
    )
};


export default Navbar;