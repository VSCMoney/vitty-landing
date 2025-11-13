// sections/WealthSmartSection.js (Updated - Remove header)
import React from "react";

const WealthSmartSection = ({ activeSection, totalSections, scrollToSection }) => {
  return (
    <section className="section-wealth">
      <div className="section-wealth-content">
        <div className="section-wealth-left">
          <h2 className="section-wealth-title">Wealth Smart</h2>
          <p className="section-wealth-subtitle">
            One place to see your assets, liabilities, and overall financial health.
          </p>
        </div>

        <div className="section-wealth-right">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=800&fit=crop"
                  alt="Wealth Smart Interface"
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

      <div className="hero-scroll" onClick={() => scrollToSection(6)}>
        <div className="hero-scroll-circle">
          <span className="hero-scroll-chevron">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default WealthSmartSection;