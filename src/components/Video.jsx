import React from "react";
import cncVid from "../assets/cncVid.mp4";
import "./video.css";

function Vid() {
  return (
    <div className="video-container">
      <video src={cncVid} autoPlay muted="true" loop />
      {/* <p>
        digital fabrication <br />
        CNC cutting
        <br />
        3D design
        <br />
        furniture
      </p> */}

      <div className="text-container" data-aos="fade-left" data-aos-offset="300" data-aos-duration="1000">
        <h2 className="cover-text"> Digital fabrication</h2>
        <h2 className="cover-text"> CNC cutting</h2>
        <h2 className="cover-text">3D design</h2>
        <h2 className="cover-text"> Furniture</h2>
      </div>

    </div>
  );
}
export default Vid;
