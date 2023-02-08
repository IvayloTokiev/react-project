import React from "react";
import { Link } from "react-router-dom";

import "./VideoStyles.css";

import mercury from "../assets/mercury.mp4";

function Video() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={mercury} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Marcury plannet</h1>
        <p>This is a big plannet</p>
        <div>
          <Link to="training" className="btn">
            Training
          </Link>
          <Link to="contact" className="btn btn-light">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Video;
