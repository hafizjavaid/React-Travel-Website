import React from "react";
import { sponserss } from "./data";
const Sponsers = () => {
  return (
    <section className="sponsor section">
      <div className="sponsor__container container grid">
        {sponserss.map((spn, i) => (
          <div key={i} className="sponsor__content">
            <img src={spn.image} alt="sponser" className="sponsor__img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsers;
