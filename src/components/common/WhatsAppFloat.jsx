import React, { useState, useEffect } from "react";
import "./WhatsAppFloat.css";

const WHATSAPP_NUMBER = "919XXXXXXXXX";
const WHATSAPP_MESSAGE =
  "Hello! I'm interested in learning more about Panchtatva land parcels.";

const WhatsAppFloat = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip once after 4s, hide after 4 more
  useEffect(() => {
    const show = setTimeout(() => {
      setShowTooltip(true);
      const hide = setTimeout(() => setShowTooltip(false), 4000);
      return () => clearTimeout(hide);
    }, 4000);
    return () => clearTimeout(show);
  }, []);

  const handleClick = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="whatsapp-float">
      <div className={`whatsapp-tooltip ${showTooltip ? "is-visible" : ""}`}>
        Chat with us on WhatsApp
      </div>

      <span className="whatsapp-pulse" />
      <span className="whatsapp-pulse whatsapp-pulse--2" />

      <button
        className="whatsapp-btn"
        onClick={handleClick}
        aria-label="Chat on WhatsApp"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="white"
          width="28"
          height="28"
          aria-hidden="true"
        >
          <path d="M16.004 2C8.281 2 2 8.277 2 16c0 2.487.651 4.836 1.788 6.877L2 30l7.322-1.762A13.942 13.942 0 0 0 16.004 30C23.72 30 30 23.723 30 16S23.72 2 16.004 2zm0 25.452a11.4 11.4 0 0 1-5.812-1.587l-.416-.247-4.344 1.046 1.074-4.23-.272-.434A11.388 11.388 0 0 1 4.6 16c0-6.29 5.117-11.4 11.404-11.4C22.288 4.6 27.4 9.71 27.4 16c0 6.287-5.112 11.452-11.396 11.452zm6.249-8.555c-.343-.172-2.03-1.001-2.344-1.115-.314-.115-.543-.172-.771.172-.228.343-.886 1.115-1.086 1.344-.2.228-.4.257-.743.086-.343-.172-1.448-.533-2.757-1.7-1.019-.909-1.707-2.031-1.907-2.374-.2-.343-.021-.528.15-.699.155-.153.343-.4.514-.6.172-.2.229-.343.343-.571.115-.229.057-.429-.029-.6-.086-.172-.771-1.858-1.057-2.544-.279-.668-.561-.578-.771-.589l-.657-.011c-.228 0-.6.086-.914.429-.314.343-1.2 1.172-1.2 2.858 0 1.687 1.229 3.316 1.4 3.544.172.229 2.416 3.687 5.853 5.172.818.353 1.457.563 1.954.721.821.261 1.569.224 2.159.136.659-.099 2.03-.829 2.316-1.629.285-.8.285-1.486.2-1.629-.086-.143-.314-.229-.657-.4z" />
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppFloat;
