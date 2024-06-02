import React from "react";
import Features from "./Features";

const FeatureHighlight = ({ data }) => {
  const { type, title, icon, features, description, creator } = data;
  console.log(icon);
  return (
    <div className="w-[45%]">
      <div className="w-fit  flex items-center ">
        <h2 className="mr-5 text-xl font-bold uppercase text-primary">
          {type || "Customization"}
        </h2>
        <div className="rounded-full bg-primary">
          <img className="p-3" src={icon}/>
        </div>
      </div>
      <h1 className="mt-5 text-4xl font-bold">
        {title || "Control how brands see you online"}
      </h1>
      {features.map((item, index) => (
        <div className="mt-3 w-fit  flex items-center ">
          <img
            className={` `}
            src={item.icon}
          />
          <h2 className={`ml-2 font-bold uppercase  text-primary`}>
            {item.text}
            {console.log(item)}
          </h2>
        </div>
      ))}

      <h1 className="mt-6 font-bold">{description}</h1>
      <div className="mt-5 flex">
        <img src={creator.img} />
        <div className="ml-3  flex flex-col justify-center ">
          <div className="text-secondary font-semibold">{creator.name}</div>
          <div className="text-primary">{creator.social}</div>
        </div>
      </div>
    </div>
  );
};

export default FeatureHighlight;
