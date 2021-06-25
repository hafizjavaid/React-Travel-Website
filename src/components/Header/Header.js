import React from "react";
import { useState, useEffect } from "react";
import { navLinks } from "./data";
const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 100);
    });
  }, []);
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDark);
  },[isDark])
  return (
    <header className={`header ${scroll ? "scroll-header" : ""}`} id="header">
      <nav className={`nav container`}>
        <a href="index.html" className="nav__logo">
          Travel
        </a>

        <div
          className={`nav__menu ${showMobileNav ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list">
            {navLinks.map((link) => (
              <li
                className="nav__item"
                key={link.text}
                onClick={() => setActiveLink(link.link)}
              >
                <a
                  href={"#" + link.link}
                  className={`nav__link ${
                    activeLink === link.link ? "active-link" : ""
                  }`}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__dark" onClick={()=> setIsDark(!isDark)}>
            {/* <span className="change-theme-name">Dark mode</span> */}
            <i className={`ri-moon-line change-theme ${isDark ? 'ri-sun-line' : ''}`} id="theme-button"></i>
          </div>

          <i
            className="ri-close-line nav__close"
            onClick={() => setShowMobileNav(false)}
            id="nav-close"
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => setShowMobileNav(true)}
          id="nav-toggle"
        >
          <i className="ri-function-line"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
