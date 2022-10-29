import React from "react";
import "./fullscreen.css";

const FullScreenImage = ({ imageSrc, isOpen, setIsOpen }) => {
  return isOpen ? (
    <div className="modal  ">
      <img className="modal-content" src={imageSrc}></img>
      <div onClick={() => setIsOpen(false)} className="close-modal">
        +
      </div>
    </div>
  ) : null;
};

export default FullScreenImage;
