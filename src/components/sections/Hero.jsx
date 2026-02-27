import React from "react";
import "./Hero.css";

const Hero = () => {
  const heroBg = `${import.meta.env.BASE_URL}images/hero-background2.png`;
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">PANCHTATVA</h1>
        <h2 className="hero-subtitle">Where Earth Meets Intention</h2>
        <h3 className="hero-subtitle">A Planned Farm Estate</h3>

        <p className="hero-tagline">
          Half-Acre Land Parcels within a 75-Acre Countryside Community Near
          Nagpur.
        </p>

        <div className="hero-buttons">
          {/* Place your brochure PDF at /public/Panchtatva-Brochure.pdf */}
          <a
            href={`${import.meta.env.BASE_URL}Panchtatva-Brochure.pdf`}
            download="Panchtatva-Brochure.pdf"
            className="btn-primary"
          >
            Download Brochure
          </a>

          <a href="#contact" className="btn-outline">
            Schedule a Site Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
