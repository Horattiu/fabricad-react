import React from "react";
import cncVid from "../assets/cncVid.mp4";
import "./video.css";

function Vid() {
  return (
    <div className="video-container">
      <video src={cncVid} autoPlay loop muted />
      <h1 className="content">
        {/* fabricatie de serie <br /> Mobila la comanda <br /> debitari CNC */}
      </h1>
    </div>
  );
}
export default Vid;
