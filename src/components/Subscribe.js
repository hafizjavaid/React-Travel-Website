import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe section">
      <div className="subscribe__bg">
        <div className="subscribe__container container">
          <h2 className="section__title subscribe__title">
            Subscribe Our <br /> Newsletter
          </h2>
          <p className="subscribe__description">
            Subscribe to our newsletter and get a special 30% discount.
          </p>
          <form className="subscribe__form">
            <input
              type="text"
              placeholder="Enter email"
              className="subscribe__input"
            />
            <button className="button">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
