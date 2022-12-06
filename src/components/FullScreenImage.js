import React from "react";
import "./fullscreen.css";

const FullScreenImage = ({ imageSrc, isOpen, setIsOpen }) => {
  return isOpen ? (
    <div className="modal  ">
      <div onClick={() => setIsOpen(false)} className="close-modal">

      </div>
      <img className="modal-content" src={imageSrc}></img>
    </div>
  ) : null;
};

export default FullScreenImage;
