import "./HeroVideo.css";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

import React from "react";

export const HeroVideo = () => {
  const Navigate = useNavigate();
  return (
    <div className="hero-video-container">
      <div className="hero-video">
        <ReactPlayer
          url={`${process.env.PUBLIC_URL}/assets/videos/herovideo1.mp4`}
          playing
          playbackRate={1.5}
          muted
          loop
          controls={false}
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="hero-text">
        <h1 className="gradient-text">CELEBRATE CREATIVITY</h1>
        <div class="typing-container">
          <span class="typing-text">Where Pixels Become Masterpieces!</span>
        </div>
        {/* <h2>Where Pixels Become Masterpieces!</h2> */}
      </div>

      <button
        onClick={() => Navigate("product-listing")}
        className="shop-now-btn"
      >
        Shop Now
      </button>
    </div>
  );
};
