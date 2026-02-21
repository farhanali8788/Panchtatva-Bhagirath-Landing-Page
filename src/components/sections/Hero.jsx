import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-title">PANCHTATVA</h1>
        <h2 className="hero-subtitle">A Gated Luxury Farm Estate</h2>

        <p className="hero-tagline">
          Half Acre Private Land Parcels in a Fully Developed Nature Community
          Near Nagpur.
        </p>

        <div className="hero-buttons">
          {/* Place your brochure PDF at /public/Panchtatva-Brochure.pdf */}
          <a
            href="/Panchtatva-Brochure.pdf"
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
