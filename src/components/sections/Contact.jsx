import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const [leftRef, leftVisible] = useScrollAnimation(0.15);
  const [rightRef, rightVisible] = useScrollAnimation(0.15);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
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
          <span className="section-label">ENQUIRE NOW</span>
          <h2 className="section-title">
            Begin Your <br /> Panchtatva Journey.
          </h2>
          <p className="section-description">
            Schedule a private site visit or speak with our team to explore
            available half-acre land parcels.
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
          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
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
