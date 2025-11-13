// sections/InsureSmartSection.js (Updated - Remove header)
import React from "react";

const InsureSmartSection = ({ activeSection, totalSections, scrollToSection }) => {
  return (
    <section className="section-insure">
      <div className="section-insure-content">
        <div className="section-insure-left">
          <h2 className="section-insure-title">Insure Smart</h2>
          <p className="section-insure-subtitle">
            Easily understand fine print, Compare 100s of policies, No conflict of interest
          </p>
        </div>

        <div className="section-insure-right">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=800&fit=crop"
                  alt="Insure Smart Interface"
                  className="phone-content"
                />
              </div>
            </div>
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

      <div className="hero-scroll" onClick={() => scrollToSection(4)}>
        <div className="hero-scroll-circle">
          <span className="hero-scroll-chevron">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default InsureSmartSection;