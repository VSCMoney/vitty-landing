// Hero.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "./Header";
import HeroSection from "./sections/HeroSection";
import FeaturesCarousel from "./sections/FeaturesCarousel";
import SEBISection from "./sections/SEBISection";
import GrowProtectSection from "./sections/GrowProtectSection";
import "./sections/sections.css";

const Hero = () => {
  // 0 = Hero, 1–5 = Features steps, 6 = SEBI, 7 = Grow & Protect
  const totalDots = 8;

  const [activeSection, setActiveSection] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const activeSectionRef = useRef(0);
  const isScrollingRef = useRef(false);
  const targetScrollRef = useRef(null);

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  const getTopForSection = useCallback((sectionIndex) => {
    const h = window.innerHeight;
    if (sectionIndex >= 1 && sectionIndex <= 5) return h * 1; // all features share same viewport
    if (sectionIndex === 6) return h * 2; // SEBI
    if (sectionIndex === 7) return h * 3; // Grow
    return 0; // Hero
  }, []);

  const snapTo = useCallback(
    (rawNextSection) => {
      let nextSection = rawNextSection;

      if (nextSection < 0) nextSection = 0;
      if (nextSection > totalDots - 1) nextSection = totalDots - 1;

      // If already there & no pending snap, ignore
      if (
        nextSection === activeSectionRef.current &&
        targetScrollRef.current === null
      ) {
        return;
      }

      // Update carousel for features
      if (nextSection >= 1 && nextSection <= 5) {
        setCarouselIndex(nextSection - 1);
      } else if (nextSection === 0) {
        setCarouselIndex(0);
      }

      setActiveSection(nextSection);
      activeSectionRef.current = nextSection;

      const targetTop = getTopForSection(nextSection);
      const currentTop = window.scrollY;

      // If we are already at the correct scroll position (features steps 2..5),
      // don't lock scrolling; just show new content.
      if (Math.abs(currentTop - targetTop) < 2) {
        isScrollingRef.current = false;
        targetScrollRef.current = null;
        return;
      }

      // Otherwise (hero → features, features → SEBI, SEBI → Grow), do a smooth snap
      isScrollingRef.current = true;
      targetScrollRef.current = targetTop;

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    },
    [getTopForSection]
  );

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault(); // full control of step-based scroll

      if (isScrollingRef.current) return;

      const current = activeSectionRef.current;
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.min(
        Math.max(current + direction, 0),
        totalDots - 1
      );

      if (nextSection !== current) {
        snapTo(nextSection);
      }
    };

    const handleScroll = () => {
      // Only used to detect when smooth scroll reached its snap target
      if (!isScrollingRef.current || targetScrollRef.current === null) return;

      const scrollY = window.scrollY;
      if (Math.abs(scrollY - targetScrollRef.current) <= 2) {
        isScrollingRef.current = false;
        targetScrollRef.current = null;
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [snapTo]);

  const scrollToSection = (index) => {
    // dots + chevron
    snapTo(index);
  };

  const showNavLinks =
    activeSection === 0 || activeSection === 6 || activeSection === 7;

  return (
    <>
      <Header showNavLinks={showNavLinks} />

      <HeroSection
        activeSection={activeSection}
        totalSections={totalDots}
        scrollToSection={scrollToSection}
      />

      <FeaturesCarousel
        carouselIndex={carouselIndex}
        activeSection={activeSection}
        totalSections={totalDots}
        scrollToSection={scrollToSection}
      />

      <SEBISection
        activeSection={activeSection}
        totalSections={totalDots}
        scrollToSection={scrollToSection}
      />

      <GrowProtectSection
        activeSection={activeSection}
        totalSections={totalDots}
        scrollToSection={scrollToSection}
      />
    </>
  );
};

export default Hero;
