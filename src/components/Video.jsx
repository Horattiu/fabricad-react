import React from "react";
import cncVid from "../assets/cncVid.mp4";
import "./video.css";

function Vid() {
  return (
    <div className="video-container">
      <video src={cncVid} autoPlay loop muted />
      <p>
        digital fabrication <br />
        CNC cutting
        <br />
        3D design
        <br />
        furniture
      </p>
    </div>
  );
}
export default Vid;
