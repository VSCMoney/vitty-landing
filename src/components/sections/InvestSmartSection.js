import React from "react";

const InvestSmartSection = ({ activeSection, totalSections, scrollToSection }) => {
  return (
    <section className="section-invest">
      <div className="section-invest-content">
        <div className="section-invest-left">
          <h2 className="section-invest-title">Invest Smart</h2>
          <p className="section-invest-subtitle">
            Create advanced screens & notifications, all in natural language
          </p>
        </div>

        <div className="section-invest-right">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                {/* GIF inside phone */}
                <img
                  src="/assets/InvestSmart.gif"
                  alt="Invest Smart Interface"
                  className="phone-content phone-content-animated"
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

      <div className="hero-scroll" onClick={() => scrollToSection(3)}>
        <div className="hero-scroll-circle">
          <span className="hero-scroll-chevron">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default InvestSmartSection;
