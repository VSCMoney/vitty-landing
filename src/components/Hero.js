// Hero.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import Header from "./Header";
import HeroSection from "./sections/HeroSection";
import FeaturesCarousel from "./sections/FeaturesCarousel";
import SEBISection from "./sections/SEBISection";
import GrowProtectSection from "./sections/GrowProtectSection";
import "./sections/sections.css";

const Hero = () => {
  // 0 = Hero, 1–5 = Features, 6 = SEBI, 7 = Grow & Protect
  const totalDots = 8;

  const [activeSection, setActiveSection] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const activeSectionRef = useRef(0);
  const scrollCooldownRef = useRef(false); // 👈 ek gesture = ek hi step

  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // 0 -> 0 (Hero)
  // 1..5 -> 1 * h (saare features pinned)
  // 6 -> 2 * h (SEBI)
  // 7 -> 3 * h (Grow)
  const getTopForSection = useCallback((sectionIndex) => {
    const h = window.innerHeight;
    if (sectionIndex >= 1 && sectionIndex <= 5) return h * 1;
    if (sectionIndex === 6) return h * 2;
    if (sectionIndex === 7) return h * 3;
    return 0;
  }, []);

  const snapTo = useCallback(
    (rawNextSection) => {
      let nextSection = rawNextSection;

      if (nextSection < 0) nextSection = 0;
      if (nextSection > totalDots - 1) nextSection = totalDots - 1;

      const currentSection = activeSectionRef.current;
      if (nextSection === currentSection) return;

      // Features ke liye carousel index
      if (nextSection >= 1 && nextSection <= 5) {
        setCarouselIndex(nextSection - 1);
      } else if (nextSection === 0) {
        setCarouselIndex(0);
      }

      setActiveSection(nextSection);
      activeSectionRef.current = nextSection;

      const targetTop = getTopForSection(nextSection);
      const currentTop = window.scrollY || window.pageYOffset;

      // Agar already ussi viewport pe ho (features 1..5 ke beech), scroll ki zarurat nahi
      if (Math.abs(currentTop - targetTop) < 2) {
        return;
      }

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    },
    [getTopForSection]
  );

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      // cooldown chal raha hai to ignore
      if (scrollCooldownRef.current) return;

      const current = activeSectionRef.current;
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.min(
        Math.max(current + direction, 0),
        totalDots - 1
      );

      if (nextSection === current) return;

      // lock for a short time so multiple wheel events -> 1 step
      scrollCooldownRef.current = true;
      snapTo(nextSection);

      setTimeout(() => {
        scrollCooldownRef.current = false;
      }, 2000); // timing adjust kar sakta hai
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [snapTo]);

  const scrollToSection = (index) => {
    // dots + chevron → bhi same stepper
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
