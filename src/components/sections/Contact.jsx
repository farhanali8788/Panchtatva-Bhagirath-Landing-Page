import React, { useState } from "react";
import "./Contact.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

// ── Formspree ─────────────────────────────────────────────────────
// 1. Go to https://formspree.io → create a form → copy the ID
// 2. Replace YOUR_FORM_ID below (e.g. "xpwzabcd")
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const [leftRef, leftVisible] = useScrollAnimation(0.15);
  const [rightRef, rightVisible] = useScrollAnimation(0.15);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message || "Site visit request",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container-custom contact-grid">
        <div
          ref={leftRef}
          className={`contact-left anim-fade-left ${leftVisible ? "is-visible" : ""}`}
        >
          <span className="section-label">SCHEDULE A SITE VISIT</span>
          <h2 className="section-title">
            Begin Your <br /> Panchtatva Journey.
          </h2>
          <p className="section-description-contact">
            Owning land is not a quick decision. It is a considered one.
          </p>
          <p className="section-description-contact">Visit the estate.</p>
          <p className="section-description-contact">Walk the parcels.</p>
          <p className="section-description-contact">Understand the scale.</p>
          <p className="section-description-contact">
            Then decide — with clarity.
          </p>
          <div className="contact-info">
            <p>
              <strong>Location:</strong> Village Nimbhori, Kalmeshwar, Nagpur -
              441102
            </p>
            <p>
              <strong>Phone:</strong> +91 XXXXX XXXXX
            </p>
            <p>
              <strong>Email:</strong> info@panchtatva.com
            </p>
          </div>
        </div>

        <div
          ref={rightRef}
          className={`contact-right anim-fade-right ${rightVisible ? "is-visible" : ""}`}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
            <button
              type="submit"
              className="primary-btn"
              disabled={status === "sending"}
            >
              {status === "sending" ? "SENDING..." : "SCHEDULE A VISIT"}
            </button>

            {status === "success" && (
              <p className="form-feedback success">
                ✓ Thank you! We'll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="form-feedback error">
                ✗ Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
