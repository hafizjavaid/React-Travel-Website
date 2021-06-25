import React, { useRef, useState } from "react";
import video from "../assets/video.mp4";
const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (!playing) {
      startVideo();
    } else {
      pauseVideo();
    }
  };
  const startVideo = () => {
    videoRef.current.play();
    setPlaying(true);
  };

  const pauseVideo = () => {
    videoRef.current.pause();
    setPlaying(false);
  };
  return (
    <section className="video section">
      <h2 className="section__title">Video Tour</h2>
      <div className="video__container container">
        <p className="video__description">
          Find out more with our video of the most beautiful and pleasant places
          for you and your family.
        </p>
        <div className="video__content">
          <video id="video-file" ref={videoRef}>
            <source src={video} type="video/mp4" />
          </video>
          <button
            className="button button--flex video__button"
            id="video-button"
            onClick={handleVideoPress}
          >
            <i
              className={`video__button-icon ${
                !playing ? "ri-play-line" : "ri-pause-line"
              }`}
              id="video-icon"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Video;
