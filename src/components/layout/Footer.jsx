import React from "react";
import "./Footer.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

// ── Update these URLs with your actual profiles ──
const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/yourhandle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="18"
        height="18"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com/yourpage",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="18"
        height="18"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/yourcompany",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="18"
        height="18"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const Footer = () => {
  const [brandRef, brandVisible] = useScrollAnimation(0.1);
  const [linksRef, linksVisible] = useScrollAnimation(0.1);
  const [contactRef, contactVisible] = useScrollAnimation(0.1);

  return (
    <footer className="footer">
      <div className="container-custom footer-top">
        {/* BRAND */}
        <div
          ref={brandRef}
          className={`footer-brand anim-fade-up ${brandVisible ? "is-visible" : ""}`}
        >
          <h3>PANCHTATVA</h3>
          <p>
            A planned 75-acre farm estate offering structured countryside living
            near Nagpur.
          </p>
          <p>Built with intent.</p>
          <p>Planned with patience.</p>
          <p>Offered with integrity.</p>
          <div className="footer-socials">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="social-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* EXPLORE */}
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

        {/* CONTACT */}
        <div
          ref={contactRef}
          className={`footer-contact anim-fade-up anim-delay-3 ${contactVisible ? "is-visible" : ""}`}
        >
          <h4>Contact</h4>
          <ul>
            <li>Village Nimbhori,</li>
            <li>Tahsil Kalmeshwar,</li>
            <li>District Nagpur - 441102</li>
            <li>+91 91120 06081</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2026 Panchtatva. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
