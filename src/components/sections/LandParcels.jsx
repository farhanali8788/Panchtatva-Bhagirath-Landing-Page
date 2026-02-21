import React from "react";
import "./LandParcels.css";
import parcelImg from "/images/Land_Parcels.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const LandParcels = () => {
  const [imgRef, imgVisible] = useScrollAnimation(0.15);
  const [contentRef, contentVisible] = useScrollAnimation(0.15);

  return (
    <section className="land-parcels" id="parcels">
      <div className="container-custom parcels-wrapper">
        <div
          ref={imgRef}
          className={`parcel-image anim-fade-left ${imgVisible ? "is-visible" : ""}`}
        >
          <img src={parcelImg} alt="Private Half Acre Land Parcels" />
        </div>

        <div
          ref={contentRef}
          className={`parcel-content anim-fade-right ${contentVisible ? "is-visible" : ""}`}
        >
          <h2>Private Half Acre Land Parcels</h2>
          <div
            className={`section-divider anim-line ${contentVisible ? "is-visible" : ""}`}
          />
          <p>
            Each parcel at Panchtatva spans approximately half an acre (22,500
            sq ft), offering generous space for your private farmhouse vision
            within a fully developed and secure estate environment.
          </p>
          <ul>
            <li>Approx. 22,500 sq ft per parcel</li>
            <li>Fruit-bearing trees within every plot</li>
            <li>Developed access roads & drainage infrastructure</li>
          </ul>
          <a
            href="/Panchtatva-Brochure.pdf"
            download="Panchtatva-Brochure.pdf"
            className="btn-bronze"
          >
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandParcels;
