// sections/HeroSection.js (Updated - with subtitle)
import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../../assets/hero-orb.json";

const HeroSection = ({ activeSection, totalSections, scrollToSection }) => {
  return (
    <section className="hero-root">
      <div className="hero-lottie-wrap">
        <Lottie
          animationData={heroAnimation}
          loop
          autoplay
          className="hero-lottie"
        />
      </div>

      <div className="hero-main">
        <h1 className="hero-title">Your AI Financial Consultant</h1>
        <p className="hero-subtitle">
          Super Intelligent • Bias Free • Always Available
        </p>
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

      <div className="hero-scroll" onClick={() => scrollToSection(1)}>
        <div className="hero-scroll-circle">
          <span className="hero-scroll-chevron">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
