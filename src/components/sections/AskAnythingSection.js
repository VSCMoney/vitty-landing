import React from "react";

const AskAnythingSection = ({ activeSection, totalSections, scrollToSection }) => {
  return (
    <section className="section-ask">
      <div className="section-ask-content">
        <div className="section-ask-left">
          <h2 className="section-ask-title">Ask Anything</h2>
          <p className="section-ask-subtitle">
            Investment • Insurance • Credit • Tax • Anything
          </p>
        </div>

        <div className="section-ask-right">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                {/* GIF inside phone */}
                <img
                  src="/assets/AskAnything.gif"
                  alt="Ask Anything Interface"
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

      <div className="hero-scroll" onClick={() => scrollToSection(2)}>
        <div className="hero-scroll-circle">
          <span className="hero-scroll-chevron">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default AskAnythingSection;
