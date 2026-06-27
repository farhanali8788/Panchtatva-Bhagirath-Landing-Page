import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "#experience", label: "Experience" },
    { href: "#parcels", label: "Land Parcels" },
    { href: "#elements", label: "The Elements" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`header ${scrolled || menuOpen ? "scrolled dark" : "light"}`}
      >
        <div className="container-custom header-inner">
          {/* Logo */}
          <div className="navbar-brand">
            <div className="brand-badge">
              <img
                src={scrolled || menuOpen ? "/logo_brown.png" : "/LOGO.png"}
                alt="Panchtatva Logo"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="header-center">
            <nav className="nav-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="header-right">
            <a href="#contact" className="btn-bronze desktop-only">
              Book Visit
            </a>

            {/* Hamburger */}
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className="bar bar-top" />
              <span className="bar bar-mid" />
              <span className="bar bar-bot" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-menu-inner">
          <nav className="mobile-nav">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                style={{ animationDelay: `${0.08 * (i + 1)}s` }}
                onClick={closeMenu}
              >
                <span className="mobile-nav-number">0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-menu-footer">
            <a
              href="#contact"
              className="btn-bronze btn-bronze-full "
              onClick={closeMenu}
            >
              Book a Visit
            </a>
            <p className="mobile-tagline">Where Earth Meets Eternity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
