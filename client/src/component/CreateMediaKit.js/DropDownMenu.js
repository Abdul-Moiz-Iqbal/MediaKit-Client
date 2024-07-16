import React, { useState } from "react";
// react icons
import { GoGear } from "react-icons/go";
import { BiUser } from "react-icons/bi";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Circle Button */}
      <div
        className="h-[44px] w-[44px] text-[16px] tracking-wide font-extrabold font-serif shadow-[rgba(50,50,93,0.25)_0px_0.7px_1px_1px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex items-center justify-center rounded-full text-white bg-[#FC076F] cursor-pointer"
        onClick={toggleDropdown}
      >
        {"MI"}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute w-[250px] top-[50px] right-0   bg-white rounded-md  z-10">
          {/* Dropdown Items */}
          <div className="py-1 text-sm text-gray-700 cursor-pointer hover:bg-[#bfe0e2]">
            <div className="p-[20px] flex items-center space-x-2">
              <div className="h-[44px] w-[44px] text-[16px] tracking-wide font-extrabold font-serif shadow-[rgba(50,50,93,0.25)_0px_0.7px_1px_1px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] flex items-center justify-center rounded-full text-white bg-[#FC076F] cursor-pointer">
                {"MI"}
              </div>
              <span className="ml-[10px] font-semibold">moiz iqbal</span>
            </div>
          </div>
          <Link to={'/settings'}>
          <div className="p-[20px] flex  items-center  text-sm text-gray-700 cursor-pointer hover:bg-[#bfe0e2]">
            <GoGear className="text-lg font-bold "/>
            <span className=" ml-[10px] font-semibold">Settings</span>
          </div>
          </Link>
          <Link to={'/'}>
          <div className="p-[20px] flex  items-center  text-sm text-gray-700 cursor-pointer hover:bg-[#bfe0e2]">
          <BiUser className="text-lg font-bold "/>
            <span className=" ml-[10px] font-semibold">My MediaKits</span>
          </div>
          </Link>
          <Link>
          <div className="p-[20px] flex  items-center  text-sm text-gray-700 cursor-pointer hover:bg-[#bfe0e2]">
            <GoGear className="text-lg font-bold "/>
            <span className=" ml-[10px] font-semibold">Logout</span>
          </div>
          </Link>
          
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
