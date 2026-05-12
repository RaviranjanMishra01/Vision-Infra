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

  // For mobile accordion: toggle function (close others)
  const toggleAccordion = (index) => {
    if (!isMobile) return;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page">
      <div className="container">
        {/* Hero heading */}
        <div className="hero-heading">
          <div className="overline">What We Do ✦</div>
          <h1>
            We provide excellent service<br />to our customers
          </h1>
        </div>

        {/* Desktop layout (original) */}
        {!isMobile && (
          <div className="services-layout">
            {/* Left: list */}
            <div className="service-list">
              {services.map((s, i) => (
                <div
                  key={s.id}
                  className={`service-item${activeIndex === i ? " active" : ""}`}
                  onClick={() => setActiveIndex(i)}
                >
                  <span className="service-name">{s.name}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span className="service-num">{s.id}</span>
                    <span className="arrow-icon">↗</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: content */}
            <div className="service-content" key={activeIndex}>
              <div className="image-card fade-in">
                <div className="image-services">
                  <img src={services[activeIndex].image} alt={services[activeIndex].name} />
                </div>
                <div className="image-label">
                  <span className="label-text">Service</span>
                  <span className="label-num">{services[activeIndex].id}</span>
                </div>
              </div>
              <div className="info-panel fade-in">
                <div>
                  <h2>About this Service</h2>
                  <div className="info-subtitle">{services[activeIndex].shortDesc}</div>
                  <p className="info-desc">{services[activeIndex].description}</p>
                  <ul className="features-list">
                    {services[activeIndex].features.map((f, i) => (
                      <li key={i}>
                        <span className="feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="btn-details">
                  More Details <span className="btn-arrow">↗</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile accordion layout */}
        {isMobile && (
          <div className="services-accordion">
            {services.map((s, idx) => {
              const isOpen = activeIndex === idx;
              return (
                <div key={s.id} className="accordion-item">
                  <button
                    className={`accordion-header ${isOpen ? "active" : ""}`}
                    onClick={() => toggleAccordion(idx)}
                  >
                    <span className="accordion-name">{s.name}</span>
                    <span className="accordion-id">{s.id}</span>
                    <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div className={`accordion-panel ${isOpen ? "show" : ""}`}>
                    <div className="accordion-image">
                      <img src={s.image} alt={s.name} />
                    </div>
                    <div className="accordion-info">
                      <div className="info-subtitle">{s.shortDesc}</div>
                      <p className="info-desc">{s.description}</p>
                      <ul className="features-list">
                        {s.features.map((f, i) => (
                          <li key={i}>
                            <span className="feature-dot" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <button className="btn-details">
                        More Details <span className="btn-arrow">↗</span>
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