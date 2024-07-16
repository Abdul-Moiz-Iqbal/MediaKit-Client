import React, { useState } from "react";
import { MdClose, MdModeEdit } from "react-icons/md";
import { FaChevronUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setEditMode } from "../../features/DashBoard/Header";

const Hero = () => {
  //Redux
  //useSelector
  const { backgroundImage, backgroundImages } = useSelector(
    (state) => state.hero
  );
  const backgroundVideo = useSelector((state) => state.hero.backgroundVideo);
  const profileImageSlice = useSelector((state) => state.hero.profileImage);
  const styles = useSelector((state) => state.hero.styles);
  const editMode = useSelector((state) => state.header.editMode);
  //useDispatch
  const dispatch = useDispatch();

  //useState
  // const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("moiz");
  const [tags, setTags] = useState([
    "Youtuber",
    "Influencer",
    "Gamer",
    "Streamer",
  ]);
  const [newTag, setNewTag] = useState("");
  const [about, setAbout] = useState("I am a digital Influencer");
  const [showContactMenu, setShowContactMenu] = useState(false);
  const [ctaEnabled, setCtaEnabled] = useState(true);
  const [buttonText, setButtonText] = useState("Contact me");
  const [destinationType, setDestinationType] = useState("email");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const addTag = () => {
    if (newTag) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const removeTag = (index) => {
    const newTags = tags.filter((_, tagIndex) => tagIndex !== index);
    setTags(newTags);
  };

  const toggleEditMode = () => dispatch(setEditMode());

  const toggleContactMenu = () => setShowContactMenu(!showContactMenu);

  const handleCtaChange = (value) => setCtaEnabled(value === "yes");

  const handleDestinationTypeChange = (type) => setDestinationType(type);

  const renderBackground = () => {
    if (backgroundVideo) {
      return (
      
   
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden bg-[radial-gradient(ellipse_at_200%_60%,rgba(244,133,23,1)_0%,rgba(186,7,252,1)_0%,rgba(252,7,111,1)_0%,rgba(11,10,37,1)_49%)]">
      <div className="absolute top-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-b from-[#0b0927] to-transparent"></div>
      <iframe
        className="absolute top-[-20%] left-[-75%] w-[250%] h-[175%] opacity-20 object-cover pointer-events-none"
        // src="https://www.youtube.com/embed/sanswTlz4ZY?autoplay=1&controls=0&showinfo=0&rel=0&mute=1&disablekb=1&loop=1&playlist=sanswTlz4ZY"
        src={`https://www.youtube.com/embed/${backgroundVideo}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&disablekb=1&loop=1 `}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
      );
    }
    if (backgroundImage) {
      return (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      );
    }
    if (backgroundImages.length > 0) {
      return (
        <div className="absolute inset-0 w-full h-full">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image})`,
                position: index === 0 ? "absolute" : "relative",
              }}
            ></div>
          ))}
        </div>
      );
    }
    return (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          background:
            "radial-gradient(ellipse at 200% 43%, rgba(244, 133, 23, 1) 0%, rgba(186, 7, 252, 1) 0%, rgba(252, 7, 111, 1) 0%, rgba(11, 10, 37, 1) 49%)",
        }}
      ></div>
    );
  };

  return (
    <div className="w-full  pb-10  md:pb-0 md:h-[80vh] pt-20  bg-black  text-white relative overflow-hidden"
    //  style={{
    //       background:
    //         "radial-gradient(ellipse at 200% 43%, rgba(244, 133, 23, 1) 0%, rgba(186, 7, 252, 1) 0%, rgba(252, 7, 111, 1) 0%, rgba(11, 10, 37, 1) 49%)",
    //     }}
        >
      {renderBackground()}
      <div className="w-[70%] mx-auto  overflow-hidden flex gap-8 relative z-10">
        <div className="w-[50%]">
          <div className=" w-fit ">
            {editMode ? (
              <div className="flex flex-col">
                <input
                  type="text"
                  className="text-lg w-[100%] md:text-[54px] flex-1 font-semibold bg-transparent border-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="mb-5 border-b-2 border-b-DashPrimary w-full h-[1px]"></div>
              </div>
            ) : (
              <div className="text-[54px] font-semibold">{name}</div>
            )}
          </div>

          <div className="flex flex-wrap gap-[10px]">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center">
                {editMode ? (
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      className="rounded-[10px] px-[10px] py-[5px] bg-transparent border border-white outline-none"
                      value={tag}
                      onChange={(e) => handleTagChange(index, e.target.value)}
                    />
                    <button
                      onClick={() => removeTag(index)}
                      className="text-red-500 ml-2"
                    >
                      <MdClose />
                    </button>
                  </div>
                ) : (
                  <div
                    className="rounded-[10px] px-[10px] py-[5px]"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                  >
                    {tag}
                  </div>
                )}
              </div>
            ))}
            {editMode && (
              <div className="flex items-center">
                <input
                  type="text"
                  className="rounded-[10px] px-[10px] py-[5px] bg-transparent border border-white outline-none"
                  placeholder="Add tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                />
                <button onClick={addTag} className="text-green-500 ml-2">
                  +
                </button>
              </div>
            )}
          </div>

          <div>
            <h1 className="mt-5 mb-2 text-[24px] font-semibold">About</h1>
            {editMode ? (
              <textarea
                className="text-[14px] bg-transparent border-b-2 border-white outline-none w-full"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            ) : (
              <p className="text-[14px]">{about}</p>
            )}
          </div>

          <button className="w-fit mt-5 rounded-full bg-DashPrimary px-10 py-4 uppercase text-[18px] font-bold relative">
            {buttonText}
            {editMode && (
              <button
                onClick={toggleContactMenu}
                className="absolute top-[-10px] right-[-10px] bg-white text-[#0B0927] rounded-full p-1 shadow-md"
              >
                <MdModeEdit />
              </button>
            )}
          </button>
          {showContactMenu && (
            <div className="absolute md:ml-56 bottom-0 w-[300px] p-4 bg-[#1c1c1c] rounded-lg shadow-lg text-white z-10">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Edit CTA</h2>
                <button className="text-white" onClick={toggleContactMenu}>
                  <FaChevronUp />
                </button>
              </div>
              <div className="mb-2">
                <label className="block mb-1">Enable CTA</label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="cta"
                      value="yes"
                      onChange={(e) => handleCtaChange(e.target.value)}
                      checked={ctaEnabled}
                      className="mr-2"
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="cta"
                      value="no"
                      onChange={(e) => handleCtaChange(e.target.value)}
                      checked={!ctaEnabled}
                      className="mr-2"
                    />
                    No
                  </label>
                </div>
              </div>
              {ctaEnabled && (
                <div className="mb-2">
                  <label className="block mb-1">Button Text</label>
                  <input
                    type="text"
                    className="w-full p-2 rounded border-none outline-none text-black"
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                  />
                </div>
              )}
              {ctaEnabled && (
                <>
                  <div className="mb-2">
                    <label className="block mb-1">Destination</label>
                    <div className="flex items-center gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="destinationType"
                          value="email"
                          onChange={() => handleDestinationTypeChange("email")}
                          checked={destinationType === "email"}
                          className="mr-2"
                        />
                        Email
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="destinationType"
                          value="website"
                          onChange={() =>
                            handleDestinationTypeChange("website")
                          }
                          checked={destinationType === "website"}
                          className="mr-2"
                        />
                        Website
                      </label>
                    </div>
                  </div>
                  {destinationType === "email" && (
                    <div className="mb-2">
                      <label className="block mb-1">Email Address</label>
                      <input
                        type="email"
                        className="w-full p-2 rounded border-none outline-none text-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  )}
                  {destinationType === "website" && (
                    <div className="mb-2">
                      <label className="block mb-1">Website URL</label>
                      <input
                        type="url"
                        className="w-full p-2 rounded border-none outline-none text-black"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
        <div className="w-[350px] h-[200px]">
          {profileImageSlice && (
            <div className="relative rounded-[10px] w-[350px] h-[200px] overflow-hidden">
              <img
                src={profileImageSlice}
                style={{
                  transform: `scale(${styles.scale / 50}) translate(${
                    (styles.horizontalOrientation - 50) * 2
                  }%, ${(styles.verticalOrientation - 50) * 2}%)`,
                  transition: "transform 0.3s ease",
                  objectFit: "cover", // Ensures the image covers the container
                }}
                className="rounded-[10px] w-full h-full"
                alt="Zoomable"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
