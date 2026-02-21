import React from "react";
import "./AboutEstate.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const features = [
  {
    title: "Gated & Enclosed Community",
    text: "Fully secured estate boundaries with monitored entry and CCTV surveillance.",
    delay: "",
  },
  {
    title: "Internal Infrastructure",
    text: "Developed internal access roads with basic drainage systems in place.",
    delay: "anim-delay-2",
  },
  {
    title: "Curated Landscaping",
    text: "Palm trees, ornamental plantations, lawns and thoughtfully planned green spaces.",
    delay: "anim-delay-3",
  },
  {
    title: "Nature-Integrated Living",
    text: "Artificial pond, sunset viewing zones and fruit-bearing trees within every parcel.",
    delay: "anim-delay-4",
  },
];

const Feature = ({ title, text, delay }) => {
  const [ref, visible] = useScrollAnimation(0.1);
  return (
    <div
      ref={ref}
      className={`feature anim-fade-up ${delay} ${visible ? "is-visible" : ""}`}
    >
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

const AboutEstate = () => {
  const [headerRef, headerVisible] = useScrollAnimation(0.15);

  return (
    <section className="about-estate" id="experience">
      <div className="container-custom">
        <div
          ref={headerRef}
          className={`about-header anim-fade-up ${headerVisible ? "is-visible" : ""}`}
        >
          <h2>
            A Fully Developed <br /> Gated Farm Estate
          </h2>
          <div
            className={`section-line anim-line ${headerVisible ? "is-visible" : ""}`}
          />
          <p>
            Panchtatva is a thoughtfully developed gated farm community designed
            for privacy, nature and long-term value. With enclosed boundaries,
            internal infrastructure, and curated landscaping, it offers a secure
            and serene environment just outside Nagpur.
          </p>
        </div>

        <div className="about-features">
          {features.map((f) => (
            <Feature key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutEstate;
