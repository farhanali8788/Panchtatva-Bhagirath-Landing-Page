import React from "react";
import "./AboutEstate.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const features = [
  {
    title: "Defined Estate Boundaries",
    text: "A planned and enclosed farm layout to ensure structure and long-term clarity.",
    delay: "",
  },
  {
    title: "Wide Internal Road Network",
    text: "Wide approach roads being shaped to ensure smooth movement across parcels.",
    delay: "anim-delay-2",
  },
  {
    title: "Planned Green Environment",
    text: "Tree-lined avenues and designated green zones being developed gradually across the estate.",
    delay: "anim-delay-3",
  },
  {
    title: "Nature-First Vision",
    text: "Water bodies, open landscapes, and agricultural character retained to preserve the authenticity of the land.",
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
            A Thoughtfully Planned <br /> Gated Farm Estate
          </h2>
          <div
            className={`section-line anim-line ${headerVisible ? "is-visible" : ""}`}
          />
          <p>
            Panchtatva is a 75-acre farm estate envisioned for those who seek
            space, privacy, and a long-term relationship with land.
          </p>
          <p>This is not a resort. </p>
          <p>It is not a weekend rush.</p>
          <p>
            It is a farmland planned with clarity — where infrastructure is
            being developed carefully, step by step.
          </p>
          <p>
            Designed for individuals who wish to build their own farmhouse — in
            their own time — within an organized estate framework.
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
