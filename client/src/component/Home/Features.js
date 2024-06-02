//reousrces
import paintBrushIcon from "../../resources/icons/Color-Outline fill.png";
import user from "../../resources/icons/USER.png";
import dots from "../../resources/icons/dots.png";
import dashbaordImage from "../../resources/icons/dashboard1.png";
import dashbaordImage2 from "../../resources/icons/Rectangle2.png";
import taragreene from "../../resources/imgs/taragreene.png";
import creator from "../../resources/icons/creator.png";
import youtube from "../../resources/icons/youtube.png";
import insta from "../../resources/icons/insta.png";
import twitch from "../../resources/icons/twitch.png";
import connect from "../../resources/icons/connect.png";
import pdf from "../../resources/icons/pdf.png";
import hoolink from "../../resources/icons/hooLink.png";
import share from "../../resources/icons/share.png";
import screenshot from "../../resources/icons/screenShot.png";
import update from "../../resources/icons/update.png";
import tick from "../../resources/icons/tick.png";
import analytics from "../../resources/icons/analytics.png";
import userProfile from "../../resources/imgs/User Profile.png";
import youtubeAnalytics from "../../resources/imgs/youtubeAnalytics.png";
import yuotubeLogo from "../../resources/imgs/logo-yotube.png";
import instaLogo from "../../resources/imgs/logo-instagram-1.png";
import facebookLogo from "../../resources/imgs/logo-facebook-1.png";
import twitterLogo from "../../resources/imgs/logo-twitter-1.png";
import spotifylogo from "../../resources/imgs/Spotify.png";
import googleanalyticsLogo from "../../resources/imgs/logo-googleanalytics-1.png";

//Ui
import DataAnalytics from "./DataAnalytics";
import FeatureHighlight from "./FeatureHighlight";

const Features = () => {
  const data = [
    {
      type: "Customization",
      title: "Control how brands see you online",
      icon: paintBrushIcon,
      features: [
        {
          icon: paintBrushIcon,
          text: "Customize colors and branding",
        },
        {
          icon: user,
          text: "Feature recent sponsors and press",
        },
        {
          icon: dots,
          text: "Add custom widgets",
        },
      ],
      description:
        '"Mediakits is easy to use and a great tool for creators looking to capture real time data. I love that it’s customizable, and keeps track of all of my content analytics across platforms."',
      creator: {
        img: taragreene,
        name: "taragreene",
        social: "Youtube Creator",
      },
    },
    {
      type: "Accurate Data",
      title: "Pitch brands with confidence",
      icon: analytics,
      features: [
        {
          icon: tick,
          text: "Always accurate data, verified by MediaKits",
        },
        {
          icon: update,
          text: "Updated automatically",
        },
        {
          icon: screenshot,
          text: "No more screenshots",
        },
      ],
      description:
        '"In the past I’ve had to edit my numbers whenever I reach out to brands. Now with Mediakits I don’t have to do all of the legwork and it’s awesome!"',
      creator: {
        img: taragreene,
        name: "taragreene",
        social: "Youtube Creator",
      },
    },
    {
      type: "Sharing",
      title: "Distributing your media kit is just one click away",
      icon: share,
      features: [
        {
          icon: share,
          text: "Share with the click of a button",
        },
        {
          icon: pdf,
          text: "Download your Media Kit as a PDF",
        },
        {
          icon: hoolink,
          text: "Add to your hoo.be link in bio tool",
        },
      ],
      description:
        '“Mediakits is a seamless way to show real time data to other artists and brands that I collaborate with"',
      creator: {
        img: taragreene,
        name: "taragreene",
        social: "Youtube Creator",
      },
    },
    {
      type: "connected everywhere",
      title: "Simple, secure API connections to top platforms",
      icon: connect,
      features: [
        {
          icon: insta,
          text: "Instagram",
        },
        {
          icon: youtube,
          text: "Youtube",
        },
        {
          icon: twitch,
          text: "Twitch & More",
        },
      ],
      description:
        "“I’ve closed over $8,000 in brand deals in under 3 weeks. When a brand contacts me, I just send them my link”",
      creator: {
        img: creator,
        name: "Jr Garage",
        social: "Youtube Cre    ator",
      },
    },
  ];
  return (
    <div className="py-24 bg-neutral-200">
      <div className=" px-24 flex justify-between ">
        <FeatureHighlight data={data[0]} />
        <div className="px-36 relative w-[50%]  flex justify-between">
          <img className="h-[70%]" src={dashbaordImage} />
          <div className=" flex items-end h-full">
            <img className=" h-[70%]  " src={dashbaordImage2} />
          </div>
        </div>
      </div>
      <div className="px-24 mt-32 w-full flex items-center justify-between">
        <DataAnalytics data />
        <FeatureHighlight data={data[1]} />
      </div>
      <div className="pl-24 mt-32 w-full flex items-center justify-between">
        <FeatureHighlight data={data[2]} />
        {/* <div className="ml-[5rem] bg-white"> */}
        <img src={userProfile} />
        {/* </div> */}
      </div>
      <div className="px-24 mt-32 w-full flex items-center justify-between">
        <img src={youtubeAnalytics} />
        <FeatureHighlight data={data[3]} />
      </div>
      <div className="px-24 mt-32">
        <h1 className="text-center text-5xl font-bold text-secondary ">
          Simple, secure API connections to<span className="text-primary"> top platforms</span>
        </h1>
        <div className="w-[88.3%] mt-28 mx-auto flex justify-between">
          <div className="flex flex-col justify-center items-center ">
            <img src={yuotubeLogo} className="mb-10 w-[179px] h-[41px]" />
            <img src={twitterLogo} className="w-[57px] h-[47px]" />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <img src={instaLogo} className="mb-10 w-[149px] h-[54px]" />
            <img src={spotifylogo} className="w-[134px] h-[40px]" />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <img src={facebookLogo} className="mb-10 w-[167px] h-[33px]" />
            <img src={googleanalyticsLogo} className="w-[167px] h-[38.31px]" />
          </div>
          
        </div>
        
      </div>
    </div>
  );
};

export default Features;
