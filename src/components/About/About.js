import React from "react";
import { images } from "./Data";
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__data">
          <h2 className="section__title about__title">
            More Information <br /> About The Best Beaches
          </h2>
          <p className="about__description">
            You can find the most beautiful and pleasant places at the best
            prices with special discounts, you choose the place we will guide
            you all the way to wait, get your place now.
          </p>
          <a href="#places" className="button">
            Reserve a place
          </a>
        </div>
        <div className="about__img">
          {images.map((image, i) => (
            <div className="about__img-overlay" key={i}>
              <img
                src={image.image}
                alt="images-1"
                className={image.classes.join(" ")}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
