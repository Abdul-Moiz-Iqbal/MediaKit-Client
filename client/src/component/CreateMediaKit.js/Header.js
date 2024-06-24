import React from "react";

//resources
import logo from "../../resources/brand/MediakitsLogo.png";
import DropdownMenu from "./DropDownMenu";

const Header = () => {
  return (
    <div className="bg-white flex  justify-between items-center flex-1 px-9 py-3 ">
      <img src={logo} />
      {/* <div  className="h-[44px] w-[44px] font-serif shadow-[rgba(50,50,93,0.25)_0px_0.7px_1px_1px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]  flex items-center justify-center rounded-full text-white bg-[#FC076F]">
        {"MI"}
      </div> */}
      <DropdownMenu/>
      {/* <div className="h-[44px] w-[44px] shadow-[0px_3px_2px_1px_#275633]  flex items-center justify-center rounded-full text-white bg-[#FC076F]">
        {"MI"}
      </div> */}
    </div>
  );
};

export default Header;
