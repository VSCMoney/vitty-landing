// sections/GrowProtectSection.js (Updated with Vitty Logo)
import React from "react";
import vittyLogo from "../../assets/vitty_logo.png";

const GrowProtectSection = ({ activeSection, totalSections, scrollToSection }) => {
  return (
    <section className="section-grow">
      <div className="section-grow-content">
        <div className="section-grow-left">
          <h2 className="section-grow-title">Grow & Protect your money with us</h2>
          <p className="section-grow-subtitle">
            Plan, invest, and protect with clarity because smart wealth needs both growth and safety
          </p>
        </div>

        <div className="section-grow-right">
          <div className="vitty-logo-large">
            <img src={vittyLogo} alt="Vitty Logo" className="vitty-logo-image" />
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {Array.from({ length: totalSections }).map((_, i) => (
          <div
            key={i}
            className={`hero-dot ${i === activeSection ? "hero-dot-active" : ""}`}
            onClick={() => scrollToSection(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default GrowProtectSection;