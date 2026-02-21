import React from "react";
import "./Footer.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Footer = () => {
  const [brandRef, brandVisible] = useScrollAnimation(0.1);
  const [linksRef, linksVisible] = useScrollAnimation(0.1);
  const [contactRef, contactVisible] = useScrollAnimation(0.1);

  return (
    <footer className="footer">
      <div className="container-custom footer-top">
        <div
          ref={brandRef}
          className={`footer-brand anim-fade-up ${brandVisible ? "is-visible" : ""}`}
        >
          <h3>PANCHTATVA</h3>
          <p>
            A thoughtfully developed gated farm estate offering serene
            countryside living near Nagpur.
          </p>
        </div>

        <div
          ref={linksRef}
          className={`footer-links anim-fade-up anim-delay-2 ${linksVisible ? "is-visible" : ""}`}
        >
          <h4>Explore</h4>
          <ul>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#parcels">Land Parcels</a>
            </li>
            <li>
              <a href="#elements">The Elements</a>
            </li>
            <li>
              <a href="#location">Location</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div
          ref={contactRef}
          className={`footer-contact anim-fade-up anim-delay-3 ${contactVisible ? "is-visible" : ""}`}
        >
          <h4>Contact</h4>
          <ul>
            <li>Village Nimbhori,</li>
            <li>Tahsil Kalmeshwar,</li>
            <li>District Nagpur - 441102</li>
            <li>+91 XXXXX XXXXX</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Panchtatva. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
