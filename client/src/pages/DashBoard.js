import React, { useState } from "react";
import Header from "../component/DashBoard/Header";
import Hero from "../component/DashBoard/Hero";
import VerticalMenu from "../component/DashBoard/VerticalMenu";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../features/DashBoard/Header";

const DashBoard = () => {
//   const [editMode, setEditMode] = useState(true);
  const editMode = useSelector((state) => ( state.header.editMode));
    const dispatch = useDispatch();
  return (
    <div className="flex bg-red-50">
      <VerticalMenu isVisible={editMode} onClose={() => dispatch(setEditMode())} />
      <div className="w-full">
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default DashBoard;
