// src/components/sections/FeaturesCarousel.js

import React from "react";
import AskAnythingGif from "../../assets/AskAnything.gif";
import InvestSmartGif from "../../assets/InvestSmart.gif";

const features = [
  {
    title: "Ask Anything",
    subtitle: "Investment • Insurance • Credit • Tax • Anything",
    image: AskAnythingGif,
    bgClass: "section-ask",
  },
  {
    title: "Invest Smart",
    subtitle: "Create advanced screens & notifications, all in natural language",
    image: InvestSmartGif,
    bgClass: "section-invest",
  },
  {
    title: "Insure Smart",
    subtitle:
      "Easily understand fine print, Compare 100s of policies, No conflict of interest",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=800&fit=crop",
    bgClass: "section-insure",
  },
  {
    title: "Plan Smart",
    subtitle:
      "Set financial goals that truly matter and track your progress with clarity and confidence.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=800&fit=crop",
    bgClass: "section-plan",
  },
  {
    title: "Wealth Smart",
    subtitle:
      "One place to see your assets, liabilities, and overall financial health.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=800&fit=crop",
    bgClass: "section-wealth",
  },
];

const FeaturesCarousel = ({
  carouselIndex,
  activeSection,
  totalSections,
  scrollToSection,
}) => {
  const currentFeature = features[carouselIndex];

  return (
    <section className={`features-carousel-section ${currentFeature.bgClass}`}>
      <div className="features-carousel-wrapper">
        <div className="features-text-wrapper">
          <div className="features-text-content" key={`text-${carouselIndex}`}>
            <h2 className="features-title">{currentFeature.title}</h2>
            <p className="features-subtitle">{currentFeature.subtitle}</p>
          </div>
        </div>

        <div className="features-phone-wrapper">
          <div className="phone-mockup">
            <div className="phone-frame">
              <div className="phone-notch"></div>
              <div className="phone-screen">
                <img
                  key={`img-${carouselIndex}`}
                  src={currentFeature.image}
                  alt={`${currentFeature.title} Interface`}
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
            className={`hero-dot ${
              i === activeSection ? "hero-dot-active" : ""
            }`}
            onClick={() => scrollToSection(i)}
          />
        ))}
      </div>

      <div
        className="hero-scroll"
        onClick={() =>
          scrollToSection(
            carouselIndex < 4 ? activeSection + 1 : 6
          )
        }
      >
        <div className="hero-scroll-circle">
          <span className="hero-scroll-chevron">⌄</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesCarousel;
