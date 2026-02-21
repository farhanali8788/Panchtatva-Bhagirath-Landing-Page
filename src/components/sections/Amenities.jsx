import React from "react";
import "./Amenities.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const amenities = [
  {
    cls: "full",
    src: "/Amenities-Images/pool-image.jpg",
    alt: "Swimming Pool",
    label: "Swimming Pool & Relaxation Deck",
  },
  {
    cls: "tall",
    src: "/Amenities-Images/jogging-track.jpg",
    alt: "Walking Track",
    label: "Walking & Jogging Tracks",
  },
  {
    cls: "small",
    src: "/Amenities-Images/tennis-area.jpg",
    alt: "Tennis Court",
    label: "Tennis & Badminton Courts",
  },
  {
    cls: "small",
    src: "/Amenities-Images/temple.jpg",
    alt: "Mandir",
    label: "Mandir & Gau Shala",
  },
  {
    cls: "wide",
    src: "/Amenities-Images/pond.jpg",
    alt: "Artificial Pond",
    label: "Artificial Pond & Sunset Viewing Zones",
  },
];

const AmenityCard = ({ cls, src, alt, label, delay }) => {
  const [ref, visible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`amenity ${cls} anim-scale-up ${delay} ${visible ? "is-visible" : ""}`}
    >
      <img src={src} alt={alt} />
      <div className="overlay">
        <h3>{label}</h3>
      </div>
    </div>
  );
};

const Amenities = () => {
  const [introRef, introVisible] = useScrollAnimation(0.15);

  return (
    <section className="amenities" id="elements">
      <div className="container-custom">
        <div
          ref={introRef}
          className={`section-intro text-center anim-fade-up ${introVisible ? "is-visible" : ""}`}
        >
          <span className="section-label">AMENITIES & LIFESTYLE</span>
          <h2 className="section-title">Curated Lifestyle Experiences</h2>
          <div
            className={`section-divider anim-line ${introVisible ? "is-visible" : ""}`}
          />
          <p className="section-description">
            Designed to complement estate living, Panchtatva offers thoughtfully
            planned spaces for recreation, wellness and peaceful reflection
            within a secure gated environment.
          </p>
        </div>

        <div className="amenities-layout">
          {amenities.map((a, i) => (
            <AmenityCard
              key={a.label}
              {...a}
              delay={`anim-delay-${Math.min(i + 1, 6)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
