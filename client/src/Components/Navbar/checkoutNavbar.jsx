import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <nav className=" p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
        <div className="container px-4 md:px-20 mx-auto">
          <div className="flex w-full items-center justify-between ">
            <AiOutlineArrowLeft />
            <div className="w-28">
              <img
                src="https://i.ibb.co/7G5YkWS/M-logo.png"
                alt="logo"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="border flex items-center gap-2 p-2 border-gray-300 text-cuby-400 rounded-full">
                <FaUserAlt />
              </span>
              Ritik
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;