import React from "react";
import image1 from "../assets/banner2.jpg";
import image2 from "../assets/home1.jpg";

const Banner = () => {
  return (
    <section className="home" id="home">
      <img src={image1} alt="image2" className="home__img" />
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__data-subtitle">Discover your place</span>
          <h1 className="home__data-title">
            Explore The <br /> Best {" "}
            <b>
              Beautiful <br /> Beaches
            </b>
          </h1>
          <a href="#discover" className="button">
            Explore
          </a>
        </div>
        <div className="home__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="ri-facebook-box-fill" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="ri-instagram-fill" />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="home__social-link"
          >
            <i className="ri-twitter-fill" />
          </a>
        </div>
        <div className="home__info">
          <div>
            <span className="home__info-title">5 best places to visit</span>
            <a
              href="#discover"
              className="button button--flex button--link home__info-button"
            >
              More <i className="ri-arrow-right-line" />
            </a>
          </div>
          <div className="home__info-overlay">
            <img src={image2} alt="image1" className="home__info-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
