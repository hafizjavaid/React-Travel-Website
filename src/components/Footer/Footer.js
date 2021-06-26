import React from "react";
import { footerLinks } from "./data";
import Fade from "react-reveal/Fade";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container container grid">
        <div className="footer__content grid">
          <Fade top>
            <div className="footer__data">
              <h3 className="footer__title">Travel</h3>
              <p className="footer__description">
                Travel you choose the <br /> destination, we offer you the{" "}
                <br /> experience.
              </p>
              <div>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                >
                  <i className="ri-facebook-box-fill" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                >
                  <i className="ri-twitter-fill" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                >
                  <i className="ri-instagram-fill" />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__social"
                >
                  <i className="ri-youtube-fill" />
                </a>
              </div>
            </div>
          </Fade>

          {footerLinks.map((link) => (
            <Fade top key={link.title}>
            <div className="footer__data" >
              <h3 className="footer__subtitle">{link.title}</h3>
              <ul>
                {link.links.map((sublink, i) => (
                  <li className="footer__item" key={i}>
                    <a href={"#" + sublink.link} className="footer__link">
                      {sublink.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </Fade>
            
          ))}
        </div>
        <div className="footer__rights">
          <p className="footer__copy">© 2021 Bedimcode. All rigths reserved.</p>
          <div className="footer__terms">
            <a href="#terms" className="footer__terms-link">
              Terms &amp; Agreements
            </a>
            <a href="#policy" className="footer__terms-link">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
