"use client";
import { useState, useEffect } from "react";
import "./ConstructionServices.css";

const services = [
  {
    id: "01",
    name: "General Construction",
    shortDesc: "General construction",
    description:
      "We craft exceptional digital experiences. With more than 7 years of expertise, we design and create stunning websites that have been the cornerstone in building, accelerating and growing businesses.",
    features: ["Regularly Maintaining and Organizing your Tools"],
    image: "/assets/service01.png",
  },
  {
    id: "02",
    name: "Property Maintenance",
    shortDesc: "Property maintenance",
    description:
      "We offer comprehensive property maintenance services to keep your buildings and structures in top condition. Our experienced team handles everything from routine upkeep to major repairs.",
    features: ["24/7 Emergency Response", "Preventive Maintenance Plans"],
    image: "/assets/service02.png",
  },
  {
    id: "03",
    name: "Project Management",
    shortDesc: "Project management",
    description:
      "Our project management experts ensure your construction projects are completed on time, within budget, and to the highest quality standards. We coordinate all aspects of your project seamlessly.",
    features: ["Timeline & Budget Control", "Risk Management Strategies"],
    image: "/assets/service03.png",
  },
  {
    id: "04",
    name: "Renovation & Remodeling",
    shortDesc: "Renovation & remodeling",
    description:
      "Transform your existing spaces with our expert renovation and remodeling services. We breathe new life into old structures, modernizing them while preserving their essential character.",
    features: ["Interior & Exterior Upgrades", "Modern Design Integration"],
    image: "/assets/service04.png",
  },
  {
    id: "05",
    name: "Consultation",
    shortDesc: "Consultation",
    description:
      "Get expert advice on your construction projects before you begin. Our consultation services help you make informed decisions, avoid costly mistakes, and plan your project for maximum success.",
    features: ["Feasibility Studies", "Cost Estimation & Planning"],
    image: "/assets/service05.png",
  },
];

export default function ConstructionServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleAccordion = (index) => {
    if (!isMobile) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="construction-services-page">
      <div className="construction-services-container">

        <div className="construction-services-hero-heading">
          <div className="construction-services-overline">
            What We Do ✦
          </div>

          <h1>
            We provide excellent service to our customers
          </h1>
        </div>

        {!isMobile && (
          <div className="construction-services-layout">

            <div className="construction-services-list">
              {services.map((s, i) => (
                <div
                  key={s.id}
                  className={`construction-services-item${
                    activeIndex === i ? " active" : ""
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span className="construction-services-name">
                    {s.name}
                  </span>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <span className="construction-services-num">
                      {s.id}
                    </span>

                    <span className="construction-services-arrow-icon">
                      ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="construction-services-content"
              key={activeIndex}
            >
              <div className="construction-services-image-card fade-in">
                <div className="construction-services-image-services">
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].name}
                  />
                </div>

                <div className="construction-services-image-label">
                  <span className="construction-services-label-text">
                    Service
                  </span>

                  <span className="construction-services-label-num">
                    {services[activeIndex].id}
                  </span>
                </div>
              </div>

              <div className="construction-services-info-panel fade-in">
                <div>
                  <h2>About this Service</h2>

                  <div className="construction-services-info-subtitle">
                    {services[activeIndex].shortDesc}
                  </div>

                  <p className="construction-services-info-desc">
                    {services[activeIndex].description}
                  </p>

                  <ul className="construction-services-features-list">
                    {services[activeIndex].features.map((f, i) => (
                      <li key={i}>
                        <span className="construction-services-feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="construction-services-btn-details">
                  More Details

                  <span className="construction-services-btn-arrow">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {isMobile && (
          <div className="construction-services-accordion">

            {services.map((s, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={s.id}
                  className="construction-services-accordion-item"
                >
                  <button
                    className={`construction-services-accordion-header ${
                      isOpen ? "active" : ""
                    }`}
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span className="construction-services-accordion-name">
                      {s.name}
                    </span>

                    <span className="construction-services-accordion-id">
                      {s.id}
                    </span>

                    <span className="construction-services-accordion-icon">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className={`construction-services-accordion-panel ${
                      isOpen ? "show" : ""
                    }`}
                  >
                    <div className="construction-services-accordion-image">
                      <img src={s.image} alt={s.name} />
                    </div>

                    <div className="construction-services-accordion-info">
                      <div className="construction-services-info-subtitle">
                        {s.shortDesc}
                      </div>

                      <p className="construction-services-info-desc">
                        {s.description}
                      </p>

                      <ul className="construction-services-features-list">
                        {s.features.map((f, i) => (
                          <li key={i}>
                            <span className="construction-services-feature-dot" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <button className="construction-services-btn-details">
                        More Details

                        <span className="construction-services-btn-arrow">
                          ↗
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}