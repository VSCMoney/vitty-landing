// components/Header.js
import React from "react";
import vittyLogo from "../assets/vitty_logo.png";

const Header = ({ showNavLinks = true }) => {
  return (
    <header className="common-header">
      {/* Left: Logo */}
      <div className="hero-logo-wrap">
        <img src={vittyLogo} alt="Vitty.ai" className="hero-logo" />
      </div>

      {/* Center: Nav */}
      {showNavLinks && (
        <nav className="hero-links">
          <a href="#api">API</a>
          <a href="#about">About</a>
          <a href="#legal">Legal</a>
          <a href="#pricing">Pricing</a>
          <a href="#research">Research</a>
        </nav>
      )}

      {/* Right: CTA */}
      <button className="hero-cta">Request access</button>
    </header>
  );
};

export default Header;
