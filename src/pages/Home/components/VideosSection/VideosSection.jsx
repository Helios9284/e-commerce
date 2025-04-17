import React from "react";
import ReactPlayer from "react-player";
import "./VideosSection.css";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router-dom";

export const VideosSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="video-container">
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => navigate("/product-details/01")}
            url={`${process.env.PUBLIC_URL}/assets/videos/abstract.mp4`}
            playing
            playbackRate={1.15}
            muted
            loop
            controls={false}
            width="100%"
            height="119.9%"
          />

          <h3>Abstract</h3>
          <span className="notch"></span>
        </Tilt>{" "}
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => navigate("/product-details/07")}
            url={`${process.env.PUBLIC_URL}/assets/videos/oil.mp4`}
            playing
            playbackRate={1.6}
            muted
            loop
            controls={false}
            width="100%"
            height="112.65%"
          />

          <h3>Oil Painting</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          <ReactPlayer
            onClick={() => navigate("/product-details/62")}
            url={`${process.env.PUBLIC_URL}/assets/videos/black.mp4`}
            playing
            playbackRate={2.8}
            muted
            loop
            controls={false}
            width="100%"
            margin="0px"
            padding="0px"
            height="119.9%"
          />

          <h3>Black and White</h3>
          <span className="notch"></span>
        </Tilt>
        <Tilt transitionSpeed={1000} scale={1.07} className="video-card">
          {" "}
          <ReactPlayer
            onClick={() => navigate("/product-details/13")}
            url={`${process.env.PUBLIC_URL}/assets/videos/digital-painting.mp4`}
            playing
            playbackRate={1}
            muted
            loop
            controls={false}
            width="100%"
            height="119.8%"
          />
          <h3>Digital Painting</h3>
          <span className="notch"></span>
        </Tilt>
      </div>
    </>
  );
};
