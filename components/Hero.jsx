"use client";

import "./Hero.css";

const heroData = {
  label: "OUR VISION",
  title: "Quality Construction",
  subtitle: "& Honest Service",

  description:
    "We are the industry leaders in construction management and project delivery. Our team has completed over 50+ commercial and residential projects with exceptional quality and timely delivery.",

  buttonText: "GET MORE INFO  →",
};

export default function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        {/* Label */}
        <div className="hero-label">
          {heroData.label}
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          {heroData.title}
        </h1>

        {/* Subtitle */}
        <h2 className="hero-subtitle">
          {heroData.subtitle}
        </h2>

        {/* Description */}
        <p className="hero-description">
          {heroData.description}
        </p>

        {/* CTA Button */}
        <button className="hero-button">
          {heroData.buttonText}
        </button>

      </div>
    </section>
  );
}