import React from "react";
import cncVid from "../assets/cncVid.mp4";
import "./video.css";

function Vid() {
  return (
    <div className="video-container">
      <video src={cncVid} autoPlay loop muted />
    </div>
  );
}
export default Vid;
