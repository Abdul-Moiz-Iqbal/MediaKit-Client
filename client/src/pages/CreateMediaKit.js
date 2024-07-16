import React from "react";
import Header from "../component/CreateMediaKit.js/Header";
import MediaKits from "../component/CreateMediaKit.js/MediaKits";

const CreateMediaKit = () => {
  return (
    <div className='flex flex-col min-h-screen bg-[#f2f9f9]'>
    
    <div className='flex-grow pb-14'>
    <Header />
      <MediaKits />
    </div>
  </div>
  );
};

export default CreateMediaKit;
