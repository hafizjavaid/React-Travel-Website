import React from "react";
import Fade from "react-reveal/Fade";

import { experienceData, images } from "./data";
const Experiences = () => {
  return (
    <section className="experience section">
      <h2 className="section__title">
        With Our Experience <br /> We Will Serve You
      </h2>
      <div className="experience__container container grid">
        <div className="experience__content grid">
          {experienceData.map((exp) => (
            <Fade top key={exp.number}>
              <div className="experience__data">
                <h2 className="experience__number">{exp.number}</h2>
                <span className="experience__description">
                  {exp.title1} <br /> {exp.title2}
                </span>
              </div>
            </Fade>
          ))}
        </div>
        <div className="experience__img grid">
          {images.map((image, i) => (
            <Fade top key={i}>
              <div className="experience__overlay">
                <img
                  src={image.image}
                  alt="images-1"
                  className={image.classes.join(" ")}
                />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
