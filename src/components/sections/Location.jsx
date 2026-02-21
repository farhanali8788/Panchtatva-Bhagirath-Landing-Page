import React from "react";
import "./Location.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const Location = () => {
  const [contentRef, contentVisible] = useScrollAnimation(0.15);
  const [mapRef, mapVisible] = useScrollAnimation(0.15);

  return (
    <section className="location-section" id="location">
      <div className="container-custom location-layout">
        <div
          ref={contentRef}
          className={`location-content anim-fade-left ${contentVisible ? "is-visible" : ""}`}
        >
          <span className="section-label">LOCATION & CONNECTIVITY</span>
          <h2 className="section-title">
            Serene Countryside.
            <br /> Seamless City Access.
          </h2>
          <div
            className={`section-divider anim-line ${contentVisible ? "is-visible" : ""}`}
          />
          <p className="section-description">
            Located at Village Nimbhori, Tahsil Kalmeshwar, District Nagpur —
            Panchtatva offers distance from the city, without disconnecting from
            it.
          </p>
          <ul className="location-highlights">
            <li>Approx. 25–30 minutes from Nagpur City</li>
            <li> Access via Kalmeshwar Road</li>
            <li>Low-density rural surroundings</li>
            <li>Agricultural belt with open landscapes</li>
          </ul>
          <a href="#contact" className="location-btn">
            SCHEDULE A SITE VISIT
          </a>
        </div>

        <div
          ref={mapRef}
          className={`location-map anim-fade-right ${mapVisible ? "is-visible" : ""}`}
        >
          <div className="map-frame">
            <img
              src="/images/location-image.png"
              alt="Panchtatva Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
