import React from "react";
import Fade from "react-reveal/Fade";

import { places } from "./data";
const Places = () => {
  return (
    <section className="place section" id="places">
      <h2 className="section__title">Choose Your Place</h2>
      <div className="place__container container grid">
        {places.map((place, i) => (
          <Fade left key={i}>
            <div className="place__card">
              <img src={place.image} alt="place-1" className="place__img" />
              <div className="place__content">
                <span className="place__rating">
                  <i className="ri-star-line place__rating-icon" />
                  <span className="place__rating-number">{place.rate}</span>
                </span>
                <div className="place__data">
                  <h3 className="place__title">{place.title}</h3>
                  <span className="place__subtitle">{place.subtitle}</span>
                  <span className="place__price">{place.price}</span>
                </div>
              </div>
              <button className="button button--flex place__button">
                <i className="ri-arrow-right-line" />
              </button>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Places;
