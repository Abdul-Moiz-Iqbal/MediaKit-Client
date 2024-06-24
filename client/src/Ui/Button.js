import React from "react";
import { Button } from "flowbite-react";

const ButtonUi = ({ style, text, onclick, disabled }) => {
  return (
    <div
      onClick={onclick}
      disabled={disabled}
      className={`w-fit py-2 px-7 text-primary border rounded-full border-primary ${style}`}
    >
      {text} 
    </div>
  );
};

export default ButtonUi;
