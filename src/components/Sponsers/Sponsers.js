import React from "react";
import { sponserss } from "./data";
import Fade from "react-reveal/Fade";

const Sponsers = () => {
  return (
    <section className="sponsor section">
      <div className="sponsor__container container grid">
        {sponserss.map((spn, i) => (
           <Fade top key={i}>
           <div className="sponsor__content">
            <img src={spn.image} alt="sponser" className="sponsor__img" />
          </div>
           </Fade>
          
        ))}
      </div>
    </section>
  );
};

export default Sponsers;
