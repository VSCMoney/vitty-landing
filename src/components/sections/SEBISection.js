// src/components/sections/SEBISection.js
import React from "react";
import Stamp from "../../assets/Stamp.png"; // 👈 yeh sahi hai

const SEBISection = ({ activeSection, totalSections, scrollToSection }) => {
  return (
    <section className="section-sebi">
      <div className="section-sebi-content">
        <div className="sebi-badge">
          <img
            src={Stamp}
            alt="SEBI Registered Investment Adviser"
            className="sebi-stamp-image"
          />
        </div>

        <h2 className="section-sebi-title">SEBI Registered RIA</h2>
        <p className="section-sebi-subtitle">RIA License :</p>
      </div>

      <div className="hero-dots">
        {Array.from({ length: totalSections }).map((_, i) => (
          <div
            key={i}
            className={`hero-dot ${
              i === activeSection ? "hero-dot-active" : ""
            }`}
            onClick={() => scrollToSection(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default SEBISection;
