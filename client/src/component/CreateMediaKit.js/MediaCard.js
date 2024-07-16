import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Button from "../../Ui/Button.js";
import { Link } from "react-router-dom";

export const MediaCard = ({ name = "user", followers = 0 }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (option) => {
    console.log(`${option} clicked for ${name}`);
    setDropdownOpen(false); // Close dropdown after clicking an option
  };

  return (
    <div className="flex-shrink-0 w-[235px] h-[350px] relative shadow-card-Elevation shadow-card-Shadow px-6 p-8 rounded-3xl bg-white">
      {/* menu */}
      <HiDotsVertical
        onClick={toggleDropdown}
        className="text-red-500 text-xl absolute right-4 top-5 cursor-pointer"
      />
      {dropdownOpen && (
        <div className="absolute right-0 mt-8  bg-white border rounded-lg shadow-lg z-10">
          <ul className="text-sm text-gray-700">
            <Link to={'/dashboard'}>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick("View")}
            >
              View
            </li>
            </Link>
            <Link to={'/dashboard'}>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleOptionClick("Edit")}
            >
              Edit
            </li>
            </Link>
            
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-600"
              onClick={() => handleOptionClick("Delete")}
            >
              Delete
            </li>
          </ul>
        </div>
      )}
      {/* Circular Name */}
      <div className="w-fit mx-auto relative p-[2px] rounded-full bg-gradient-to-r from-fuchsia-600 to-pink-600">
        <div className="w-[90px] h-[90px] flex items-center justify-center bg-white rounded-full">
          <span className="font-serif text-[#666] uppercase text-[50px]">
            {name.charAt(0)}
          </span>
        </div>
      </div>
      {/* Name */}
      <div className="mt-5 text-center">{name}</div>
      <div className="mt-8 flex justify-center items-center">
        <img
          className="w-[30px] h-[25px]"
          src="https://app.mediakits.com/static/media/mediakits-logo-small.6c729d10.svg"
        />
        <div className="ml-1">{followers}</div>
      </div>
      {/* View Media Kit btn */}
      <Link to={"/dashboard"}>
        <Button
          style="mx-auto mt-7 py-1 px-6 bg-DashPrimary border-none uppercase text-[0.7rem] text-white"
          text="View MediaKit"
        />
      </Link>
      <Link to={'/dashboard'}>
      <button className="mt-4 w-full flex justify-center items-center font-serif text-DashPrimary text-[10px] uppercase cursor-pointer">
        Edit
      </button>
      </Link>
    </div>
  );
};
