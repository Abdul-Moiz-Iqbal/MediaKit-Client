import React from "react";

//resources
import logo from "../../resources/brand/MediakitsLogo.png";
import DropdownMenu from "../CreateMediaKit.js/DropDownMenu";
import ToggleButton from "./ToggleButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-[#0B0927]  flex-1 py-4  ">
        <div className="w-[70%] mx-auto flex justify-between items-center">
            <Link to={'/'}>
      {/* <img src={'https://app.mediakits.com/static/media/mediakits-logo.d4febc67.svg'}  className="w-[157px] h-[30px]" /> */}
      </Link>
      <ToggleButton/>
      <DropdownMenu/>
     
      </div>
    </div>
  );
};

export default Header;
