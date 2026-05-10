"use client"
import { useState } from "react";
import "./ConstructionServices.css"
const services = [
  {
    id: "01",
    name: "General Construction",
    shortDesc: "General construction",
    description:
      "We craft exceptional digital experiences. With more than 7 years of expertise, we design and create stunning websites that have been the cornerstone in building, accelerating and growing businesses.",
    features: ["Regularly Maintaining and Organizing your Tools"],
    image:
      "/assets/service01.png",
  },
  {
    id: "02",
    name: "Property Maintenance",
    shortDesc: "Property maintenance",
    description:
      "We offer comprehensive property maintenance services to keep your buildings and structures in top condition. Our experienced team handles everything from routine upkeep to major repairs.",
    features: ["24/7 Emergency Response", "Preventive Maintenance Plans"],
    image:
      "/assets/service02.png",
  },
  {
    id: "03",
    name: "Project Management",
    shortDesc: "Project management",
    description:
      "Our project management experts ensure your construction projects are completed on time, within budget, and to the highest quality standards. We coordinate all aspects of your project seamlessly.",
    features: ["Timeline & Budget Control", "Risk Management Strategies"],
    image:
      "/assets/service03.png",
  },
  {
    id: "04",
    name: "Renovation & Remodeling",
    shortDesc: "Renovation & remodeling",
    description:
      "Transform your existing spaces with our expert renovation and remodeling services. We breathe new life into old structures, modernizing them while preserving their essential character.",
    features: ["Interior & Exterior Upgrades", "Modern Design Integration"],
    image:
      "/assets/service04.png",
  },
  {
    id: "05",
    name: "Consultation",
    shortDesc: "Consultation",
    description:
      "Get expert advice on your construction projects before you begin. Our consultation services help you make informed decisions, avoid costly mistakes, and plan your project for maximum success.",
    features: ["Feasibility Studies", "Cost Estimation & Planning"],
    image:
      "/assets/service05.png",
  },
];

export default function ConstructionServices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = services[activeIndex];

  return (
    <>
      
      <div className="page">
        {/* BG lines SVG top-left */}

        <div className="container">
          {/* Hero heading */}
          <div className="hero-heading">
            <div className="overline">What We Do ✦</div>
            <h1>
              We provide excellent service<br />to our customers
            </h1>
          </div>

          {/* Services section */}
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
              {/* Image */}
              <div className="image-card fade-in">
                <div className="image-services">
                  <img src={active.image} alt={active.name} />
                </div>
                <div className="image-label">
                  <span className="label-text">Service</span>
                  <span className="label-num">{active.id}</span>
                </div>
              </div>

              {/* Info */}
              <div className="info-panel fade-in">
                <div>
                  <h2>About this Service</h2>
                  <div className="info-subtitle">{active.shortDesc}</div>
                  <p className="info-desc">{active.description}</p>
                  <ul className="features-list">
                    {active.features.map((f, i) => (
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
        </div>
      </div>
    </>
  );
}