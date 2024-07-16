// src/components/CircularToggleButton.js
import React, { useState } from "react";

import { MdRemoveRedEye } from "react-icons/md";
import { FaPen } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../../features/DashBoard/Header";

const CircularToggleButton = () => {
  const [isOn, setIsOn] = useState(false);
  const dispatch = useDispatch();
  // const editMode = useSelector( (state) => (state.header.editMode))
  const editModeHandler = () => {
    
    dispatch(setEditMode());
    setIsOn(!isOn);
    
  };

  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer bg-black border-2 border-DashPrimary`}
      onClick={editModeHandler}
    >
      <div
        className={` w-6 h-6 flex justify-center items-center rounded-full shadow-md transform transition-transform bg-DashPrimary ${
          isOn ? "translate-x-[1.3rem] " : ""
        } `}
      >
        {isOn ? (
          <FaPen  className="text-white text-xs" />
        ) : (
          <MdRemoveRedEye  className="text-white" />
        )}
      </div>
    </div>
  );
};

export default CircularToggleButton;

// src/components/CircularToggleButton.js
// import React, { useState } from 'react';

// const CircularToggleButton = () => {
//   const [isOn, setIsOn] = useState(false);

//   return (
//     <div
//       className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer border-2 ${
//         isOn ? 'bg-green-500 border-green-700' : 'bg-gray-300 border-gray-500'
//       }`}
//       onClick={() => setIsOn(!isOn)}
//     >
//       <div
//         className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
//           isOn ? 'translate-x-6 border-green-700' : 'border-gray-500'
//         }`}
//         style={{ border: '2px solid', borderColor: isOn ? 'green' : 'gray' }}
//       />
//     </div>
//   );
// };

// export default CircularToggleButton;
