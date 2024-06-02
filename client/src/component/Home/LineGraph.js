//resources
import genderIcon from "../../resources/icons/maleIcon.png";

//Ui
import Card from "../../Ui/Card";
import ProgressBar from "../ProgressBar";

const LineGraph = ({ title, data }) => {
  return (
    <Card styles="mt-4 ">
      <div className="flex  justify-between items-center">
        <h1 className="text-primary font-bold">{"Gender Distribution" || title} </h1>
        <img className="w-[14px] h-[14px] ml-10" src={genderIcon} />
      </div>

      {data.map((item) => (
        <div className="mt-3  flex justify-between items-center gap-5">
          <ProgressBar progress={item.progress} color={item.color} />
          <div className="text-primary text-sm font-bold">{item.percent}% </div>
        </div>
      ))}
      <div className="mt-4 flex justify-between ">
        {data.map((item) => (
          <div className="flex items-center">
            <div className={`w-[16px] h-[16px] rounded-full ${item.color} `}></div>
            <div className="ml-2 text-sm font-semibold">{item.type}</div>
          </div>
        ))}
      </div>
     
    </Card>
  );
};

export default LineGraph;
