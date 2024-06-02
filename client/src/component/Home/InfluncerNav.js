import React from "react";
import Button from "../../Ui/Button";

const InfluncerNav = () => {
  const influncers = [
    "Creators",
    "Artist",
    "Influncers",
    "Athlets",
    "Bloggers",
    "Podasters",
  ];
  return <div className="w-full py-8 rounded-3xl bg-black opacity-70  flex justify-center gap-4">
    {influncers.map((item) => (
        <Button text={item} style={'border-2'}/>
    ))}
  </div>;
};

export default InfluncerNav;
