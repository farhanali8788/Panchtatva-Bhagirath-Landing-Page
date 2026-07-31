import React from "react";
import "./LandParcels.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const LandParcels = () => {
  const parcelImg = `${import.meta.env.BASE_URL}site-images/land-parcel.jpg`;
  const [imgRef, imgVisible] = useScrollAnimation(0.15);
  const [contentRef, contentVisible] = useScrollAnimation(0.15);

  return (
    <section className="land-parcels" id="parcels">
      <div className="container-custom parcels-wrapper">
        <div
          ref={imgRef}
          className={`parcel-image anim-fade-left ${imgVisible ? "is-visible" : ""}`}
        >
          <img
            src={parcelImg}
            alt="Private Half Acre Land Parcels"
            loading="lazy"
            decoding="async"
          />
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
            Each parcel at Panchtatva spans approximately 22,500 sq. ft. (half
            an acre).
          </p>
          <p>Generous. Open. Unrestricted.</p>

          <p>Land that allows you to build:</p>
          <p>A farmhouse.</p>
          <p>A retreat.</p>
          <p>A long-term legacy space.</p>
          <ul>
            <li>Approx. 22,500 sq ft per parcel</li>
            <li>75-acre master-planned estate</li>
            <li>Road connectivity within layout</li>
            <li>Space for personal cultivation and plantation</li>
          </ul>
          <p>This is land offered with structure — not clutter.</p>

          <a
            href={`${import.meta.env.BASE_URL}Panchtatva-Brochure.pdf`}
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
