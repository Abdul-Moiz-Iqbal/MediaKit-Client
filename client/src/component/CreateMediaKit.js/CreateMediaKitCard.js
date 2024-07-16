import React from "react";
//react icons
import { AiOutlinePlus } from "react-icons/ai";

const CreateMediaKitCard = () => {
  return (
    <div className="w-[235px] h-[350px] shadow-card-Elevation shadow-card-Shadow w-fit px-5 rounded-3xl bg-[#e2e9f3]">
      <div className="h-full flex flex-col justify-center items-center">
        <div className='w-[70px] h-[70px] flex justify-center items-center rounded-full bg-white'>
          <AiOutlinePlus className='text-2xl '/>
        </div>
        <div className='mt-5'>create a new mediaKit</div>
      </div>
    </div>
  );
};

export default CreateMediaKitCard;
