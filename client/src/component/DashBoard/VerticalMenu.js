import React, { useState ,useEffect} from "react";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineLink } from "react-icons/hi2";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlinePicture, AiOutlineVideoCamera } from "react-icons/ai";

import { useDispatch,useSelector } from "react-redux";
import {
  setProfileImageSlice,
  setBackgroundImage,
  setBackgroundImages,
  setBackgroundVideo,
  setImageStyles,
} from "../../features/DashBoard/Images";

const Logo = () => (
  <img
    src="https://app.mediakits.com/static/media/mediakits-logo-small.6c729d10.svg"
    alt="Logo"
    className="w-[40px]"
  />
);

const VerticalMenu = ({ isVisible }) => {
    
  // redux
  const dispatch = useDispatch();
  const videoId = useSelector((state) => state.hero.backgroundVideo)
  

  //react states
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [displayInfoOpen, setDisplayInfoOpen] = useState(false);
  const [profileImageOpen, setProfileImageOpen] = useState(false);
  const [backgroundOpen, setBackgroundOpen] = useState(false);
  const [customUrl, setCustomUrl] = useState("");
  const [uploadedImage1, setUploadedImage1] = useState(null);
  const [uploadedImage2, setUploadedImage2] = useState(null);
  const [uploadedImage3, setUploadedImage3] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [backgroundType, setBackgroundType] = useState("none");

  const [uploadedImage, setUploadedImage] = useState(null);
  const [scale, setScale] = useState(50);
  const [horizontalOrientation, setHorizontalOrientation] = useState(50);
  const [verticalOrientation, setVerticalOrientation] = useState(50);

    useEffect(() => {
        const extractVideoId = (url) => {
          const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
          const match = url.match(regex);
          return match ? match[1] : null;
        };
    
        const extractedVideoId = extractVideoId(videoUrl);
        dispatch(setBackgroundVideo(extractedVideoId));
      }, [videoUrl, dispatch]);
  
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);
  const toggleDisplayInfo = () => setDisplayInfoOpen(!displayInfoOpen);
  const toggleProfileImage = () => setProfileImageOpen(!profileImageOpen);
  const toggleBackground = () => setBackgroundOpen(!backgroundOpen);

  const handleProfileImageChange = (e) => {
    
    dispatch(setProfileImageSlice(e));
 
  };

  const handleBackgroundImageChange = (e) => {
    // const file = URL.createObjectURL(e.target.files[0]);
    dispatch(setBackgroundImage(e));
    dispatch(setBackgroundVideo("")); // Ensure video is cleared
  };

  const handleBackgroundImagesChange = (e) => {
    // const files = Array.from(e.target.files).map((file) =>
    //   URL.createObjectURL(file)
    // );
    dispatch(setBackgroundImages(e));
    dispatch(setBackgroundVideo("")); // Ensure video is cleared
  };

  const handleBackgroundVideoChange = (e) => {
    // const file = URL.createObjectURL(e.target.files[0]);
    dispatch(setBackgroundVideo(e));
    dispatch(setBackgroundImage("")); // Ensure images are cleared
    dispatch(setBackgroundImages([])); // Ensure images are cleared
  };

  const imageStyle = {
    transform: `scale(${scale / 50}) translate(${
      (horizontalOrientation - 50) * 2
    }%, ${(verticalOrientation - 50) * 2}%)`,
    transition: "transform 0.3s ease",
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const resetSliders = () => {
    setScale(50);
    setHorizontalOrientation(50);
    setVerticalOrientation(50);
  };

  const onSaveHandler = () => {
    handleProfileImageChange(uploadedImage);
    dispatch(
      setImageStyles({
        scale,
        verticalOrientation,
        horizontalOrientation,
      })
    );
  };

  const renderBackgroundOptions = () => {
    switch (backgroundType) {
      case "image":
        return (
          <div className="flex gap-4 mt-4">
            <div
              className="w-20 h-20 bg-[#0B0927] border-2 border-dashed border-white flex justify-center items-center relative"
              style={{
                background:
                  backgroundType === "image" ? "bg-Dashred" : "#0B0927",
              }}
            >
              {uploadedImage1 && (
                <img
                  src={uploadedImage1}
                  alt="Uploaded 1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {!uploadedImage1 && <div className="text-white">1</div>}
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => handleImageUpload(e, 1)}
              />
            </div>
            <div
              className="w-20 h-20 bg-[#0B0927] border-2 border-dashed border-white flex justify-center items-center relative"
              style={{
                background:
                  backgroundType === "image" ? "var(--bg-Dashred)" : "#0B0927",
              }}
            >
              {uploadedImage2 && (
                <img
                  src={uploadedImage2}
                  alt="Uploaded 2"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {!uploadedImage2 && <div className="text-white">2</div>}
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => handleImageUpload(e, 2)}
              />
            </div>
            <div
              className="w-20 h-20 bg-[#0B0927] border-2 border-dashed border-white flex justify-center items-center relative"
              style={{
                background:
                  backgroundType === "image" ? "var(--bg-Dashred)" : "#0B0927",
              }}
            >
              {uploadedImage3 && (
                <img
                  src={uploadedImage3}
                  alt="Uploaded 3"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
              {!uploadedImage3 && <div className="text-white">3</div>}
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => handleImageUpload(e, 3)}
              />
            </div>
          </div>
        );
      case "video":
        console.log(videoId)
        return (
          <div className="flex flex-col mt-4">
            {videoId ? (
              <div className="w-full rounded overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div className="w-full h-32 bg-[#0B0927] flex justify-center items-center border border-gray-500 rounded-lg">
                <AiOutlineVideoCamera className="text-white text-6xl" />
              </div>
            )}
            <input
              type="text"
              className="mt-4 p-2 bg-[#111c2e] border-b border-gray-500 outline-none text-white rounded-lg"
              placeholder="YouTube Video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {isVisible && (
        <div className="fixed px-5 left-0 top-0 w-[60px] h-[100vh] bg-[#0B0927] flex flex-col items-center pt-10 z-20">
          <div className="mb-8">
            <Logo />
          </div>
          <button onClick={toggleUserMenu} className="text-white mb-8">
            <LuUser2 size={24} />
          </button>
          <button className="text-white mb-8">
            <HiOutlineLink size={24} />
          </button>
        </div>
      )}
      {userMenuOpen || isVisible && (
        <div
          className="fixed h-[100vh] left-[60px] top-0 w-[317px] bg-[#0B0927] flex flex-col px-5 pt-5 z-20 overflow-y-auto"
          style={{
            background:
              "linear-gradient(90deg, rgb(17, 31, 59), rgba(11, 9, 39) 100%)",
          }}
        >
          <button
            onClick={toggleDisplayInfo}
            className="flex items-center gap-2 mb-5 text-white"
          >
            {displayInfoOpen ? <FiMinus /> : <FiPlus />}
            <span>Display Information</span>
          </button>
          {displayInfoOpen && (
            <div className="mb-5">
              <label className="text-white block mb-2">Custom URL</label>
              <input
                type="text"
                className="w-full p-2 bg-[#111c2e] border-b border-gray-500 outline-none text-white rounded-lg"
                placeholder="app.mediaKits.com/:CustomUrl"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
              />
            </div>
          )}
          <div className="w-full h-[1px] bg-slate-500"></div>

          <button
            onClick={toggleProfileImage}
            className="mt-5 flex items-center gap-2 mb-5 text-white"
          >
            {profileImageOpen ? <FiMinus /> : <FiPlus />}
            <span>Profile Image</span>
          </button>
          {profileImageOpen && (
            <div className="mb-5">
              <div className="mb-4">
                <label className="text-white block mb-2">Upload Image</label>
                <div className="flex items-center justify-center h-32 w-full bg-[#111c2e] border border-gray-500 rounded-lg overflow-hidden">
                  {uploadedImage ? (
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="h-full w-full object-contain"
                      style={imageStyle}
                    />
                  ) : (
                    <AiOutlinePicture className="text-6xl text-gray-400" />
                  )}
                </div>
                <input
                  type="file"
                  className="w-full mt-2 p-2 bg-transparent outline-none text-white"
                  onChange={handleImageUpload}
                />
              </div>
              <label className="text-white block mb-2 flex justify-between items-center">
                Scale <span>{scale}%</span>
              </label>
              <input
                type="range"
                className="w-full appearance-none h-2 rounded-full bg-[#222640] focus:outline-none focus:ring-2 focus:ring-indigo-600"
                min="0"
                max="100"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
              />
              <label className="text-white block mb-2 mt-4 flex justify-between items-center">
                Horizontal Orientation <span>{horizontalOrientation}%</span>
              </label>
              <input
                type="range"
                className="w-full appearance-none h-2 rounded-full bg-[#222640] focus:outline-none focus:ring-2 focus:ring-indigo-600"
                min="0"
                max="100"
                value={horizontalOrientation}
                onChange={(e) => setHorizontalOrientation(e.target.value)}
              />
              <label className="text-white block mb-2 mt-4 flex justify-between items-center">
                Vertical Orientation <span>{verticalOrientation}%</span>
              </label>
              <input
                type="range"
                className="w-full appearance-none h-2 rounded-full bg-[#222640] focus:outline-none focus:ring-2 focus:ring-indigo-600"
                min="0"
                max="100"
                value={verticalOrientation}
                onChange={(e) => setVerticalOrientation(e.target.value)}
              />
              <div className="flex justify-between">
                <button
                  onClick={resetSliders}
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                >
                  Reset to 50%
                </button>
                <button
                  className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  onClick={onSaveHandler}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          <div className="w-full h-[1px] bg-slate-500"></div>

          <button
            onClick={toggleBackground}
            className="mt-5 flex items-center gap-2 mb-5 text-white"
          >
            {backgroundOpen ? <FiMinus /> : <FiPlus />}
            <span>Background</span>
          </button>
          {backgroundOpen && (
            <div className="mb-5">
              <div className="flex justify-center items-center gap-4 mt-4">
                {/* <button
                  onClick={() => setBackgroundType("image")}
                  className={`  bg-[#0B0927]  border-white flex justify-center items-center relative ${
                    backgroundType === "image" ? "bg-Dashred" : ""
                  }`}
                >
                  <AiOutlinePicture className="text-white text-3xl" />
                </button> */}
                <button
                  onClick={() => setBackgroundType("video")}
                  className={` bg-[#0B0927] border-white flex justify-center items-center relative ${
                    backgroundType === "video" ? "bg-Dashred" : ""
                  }`}
                >
                  <AiOutlineVideoCamera className="text-white text-3xl" />
                </button>
                <button
                  onClick={() => setBackgroundType("none")}
                  className={` bg-[#0B0927]  flex justify-center items-center relative ${
                    backgroundType === "none" ? "bg-Dashred" : ""
                  }`}
                >
                  <div className="text-white">None</div>
                </button>
              </div>
              {renderBackgroundOptions()}
            </div>
          )}
          <div className="w-full h-[1px] bg-slate-500"></div>
        </div>
      )}
    </>
  );
};

export default VerticalMenu;
