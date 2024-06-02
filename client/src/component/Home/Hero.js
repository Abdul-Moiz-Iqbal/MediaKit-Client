//resources
import social from "../../resources/imgs/social-media-3d.png";
import paintBrushIcon from "../../resources/icons/Color-Outline fill.png";
import graphIcon from "../../resources/icons/Graph.svg.png";
import shareIcon from "../../resources/icons/Share-Outline.svg.png";

//Ui
import Button from "../../Ui/Button";

const Hero = () => {
  return (
    <div className="py-32 font-Poppins bg-neutral-200">
      {/* first section of heros  */}
      <div className="w-[85%] mx-auto flex justify-between">
        <div className="w-[45%]">
          <h1 className="text-secondary text-6xl leading-tight font-bold">
            The digital resume for{" "}
            <span className="text-primary">Influencers</span>
          </h1>
          <h3 className="w-[85%] mt-5 text-lg font-medium">
            Elevate your brand with our all-in-one management system for
            creators, including customizable{" "}
            <span className="text-primary">mediaKits</span> with transparent
            data and adaptive social links, tailored to fit your brand's
            identity
          </h3>
          <Button
            text={"Lets's Go! "}
            style={"mt-5 bg-primary text-white w-fit"}
          />
        </div>
        <img className="mt-[-3rem] " src={social} />
      </div>
      {/* //second section of hero   */}
      <div className="w-[85%] pt-32 mx-auto flex justify-between">
        <div className="w-[28%] ">
          <div className="w-fit  flex items-center ">
            <img className="p-3 rounded-full bg-primary" src={paintBrushIcon} />
            <h2 className="ml-5 font-bold uppercase text-primary">Mediakits</h2>
          </div>
          <h1 className=" mt-5  text-secondary">
            Mediakits is expanding to include new functionality and additional
            features you can’t get anywhere else!
          </h1>
          <Button text={"Read More"} style={"mt-5 text-primary"} />
        </div>
        <div className="w-[28%] ">
          <div className="w-fit  flex items-center ">
            <img className="p-3 rounded-full bg-primary" src={paintBrushIcon} />
            <h2 className="ml-5 font-bold uppercase text-primary">Links</h2>
          </div>
          <h1 className=" mt-5  text-secondary">
            Showcase multiple links on your social, customize to fit your brand,
            and embed videos to stand out!
          </h1>
          <Button text={"Read More"} style={"mt-5 text-primary"} />
        </div>
        <div className="w-[28%] ">
          <div className="w-fit  flex items-center ">
            <img className="p-3 rounded-full bg-primary" src={paintBrushIcon} />
            <h2 className="ml-5 font-bold uppercase text-primary">NEW APP COMING SOON</h2>
          </div>
          <h1 className=" mt-5  text-secondary">
            Coming Soon! An all-in-one management system just for creators like
            you!
          </h1>
          <Button text={"Read More"} style={"mt-5 text-primary"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
