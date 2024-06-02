import React from "react";
import Card from "../../Ui/Card";
import LineGraph from "./LineGraph";
import DonutChart from "./DonatChart";

//resources
import locationIcon from "../../resources/icons/locationIcon.png";

const DataAnalytics = () => {
  const ageData = [
    {
      progress: 50,
      percent: "50",
      type: "under 18",
      color: "bg-secondaryOrange",
    },
    { progress: 30, percent: "30", type: "25-34", color: "bg-primary" },
    {
      progress: 20,
      percent: "20",
      type: "over 35",
      color: "bg-secondaryYellow",
    },
  ];
  const GenderData = [
    { progress: 58, percent: "58", type: "Men", color: "bg-secondaryOrange" },
    { progress: 42, percent: "42", type: "Women", color: "bg-primary" },
  ];

  const CountryData = [
    {
      country: "US",
      percentage: 50,
      color: "#FC076F",
      bg: "bg-secondaryOrange",
    },
    { country: "Others", percentage: 30, color: "#4CF131", bg: "bg-primary" },

    {
      country: "Canada",
      percentage: 5,
      color: "#C908DE",
      bg: "bg-secondaryYellow",
    },
    {
      country: "UK",
      percentage: 15,
      color: "#F48517",
      bg: "bg-secondaryGreen",
    },
  ];
  return (
    <div className="w-fit">
      <LineGraph data={GenderData} />
      <LineGraph data={ageData} />
      <Card styles="mt-4 w-full ">
        <div className="flex  justify-between items-center">
          <h1 className="text-primary font-bold">{"Top Countries"} </h1>
          <img className="w-[24px] h-[24px] ml-10" src={locationIcon} />
        </div>

        <div className="mt-4  flex justify-between ">
          <DonutChart data={CountryData} />
          <div>
            {CountryData.map((item) => (
              <div className="flex items-center">
                <div
                  className={`w-[16px] h-[16px] rounded-full ${item.bg} `}
                ></div>
                <div className="ml-2 text-sm font-semibold">{item.country}</div>
              </div>
            ))}
          </div>
          <div>
          {CountryData.map((item) => (
            <div className="text-sm font-semibold">
              {item.percentage}%{" "}
            </div>
          ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DataAnalytics;
