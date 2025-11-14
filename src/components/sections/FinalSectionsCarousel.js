// src/components/sections/FinalSectionsCarousel.js

import React from "react";
import sebiStamp from "../../assets/Stamp.png"; // adjust path as needed
import vittyLogo from "../../assets/vitty_logo.png"; // adjust path as needed

const sections = [
  {
    type: "sebi",
    title: "SEBI Registered",
    subtitle: "Your Trust, Our Priority",
  },
  {
    type: "grow",
    title: "Grow & Protect Your Wealth",
    subtitle:
      "Experience seamless financial management with Vitty - your trusted AI companion for smarter investing, comprehensive insurance, and strategic wealth planning.",
  },
];

const FinalSectionsCarousel = ({
  finalIndex,
  activeSection,
  totalSections,
  scrollToSection,
}) => {
  const currentSection = sections[finalIndex];

  return (
    <section className="final-sections-carousel">
      <div className="final-sections-wrapper">
        {currentSection.type === "sebi" ? (
          <div className="final-sections-content" key="sebi-content">
            <div className="sebi-badge">
              <img
                src={sebiStamp}
                alt="SEBI Registered"
                className="sebi-stamp-image"
              />
            </div>
            <h2 className="section-sebi-title">{currentSection.title}</h2>
            <p className="section-sebi-subtitle">{currentSection.subtitle}</p>
          </div>
        ) : (
          <div className="final-sections-content-grow" key="grow-content">
            <div className="section-grow-left">
              <h2 className="section-grow-title">{currentSection.title}</h2>
              <p className="section-grow-subtitle">{currentSection.subtitle}</p>
            </div>
            <div className="section-grow-right">
              <div className="vitty-logo-large">
                <img
                  src={vittyLogo}
                  alt="Vitty AI Logo"
                  className="vitty-logo-image"
                />
              </div>
            </div>
          </div>
        )}
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

      {finalIndex === 0 && (
        <div className="hero-scroll" onClick={() => scrollToSection(7)}>
          <div className="hero-scroll-circle">
            <span className="hero-scroll-chevron">⌄</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default FinalSectionsCarousel;