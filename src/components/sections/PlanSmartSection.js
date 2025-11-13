// sections/PlanSmartSection.js (Updated - Remove header)
import React from "react";

const PlanSmartSection = ({ activeSection, totalSections, scrollToSection }) => {
  return (
    <section className="section-plan">
      <div className="section-plan-content">
        <div className="section-plan-left">
          <h2 className="section-plan-title">Plan Smart</h2>
          <p className="section-plan-subtitle">
            Set financial goals that truly matter and track your progress with clarity and confidence.
          </p>
        </div>

        <div className="section-plan-right">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=800&fit=crop"
                  alt="Plan Smart Interface"
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

      <div className="hero-scroll" onClick={() => scrollToSection(5)}>
        <div className="hero-scroll-circle">
          <span className="hero-scroll-chevron">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default PlanSmartSection;