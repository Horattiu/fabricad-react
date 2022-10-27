// import React from "react";
import React from "react";
import "./fullscreen.css";

const FullScreenImage = ({ imageSrc, isOpen, setIsOpen }) => {
  return isOpen ? (
    <div
      onClick={() => setIsOpen(false)}
      className="fullScreenImageContainer backgroundd"
    >
      <img src={imageSrc}></img>
    </div>
  ) : null;
};

export default FullScreenImage;
