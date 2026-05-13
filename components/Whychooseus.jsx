"use client";
import { useState } from "react";
import "./Whychooseus.css";

// ─── ALL DATA IN JSON ───────────────────────────────────────────────────────
const DATA = {
  section: {
    overline: "OUR BENEFITS ✦",
    heading: "Why choose us",
    truckImage: "/assets/construction.png",
    truckAlt: "Large Mining Haul Truck",
  },
  features: [
    {
      id: "01",
      title: "Advanced Technology",
      desc: "We craft unique digital experiences. With more than 7 years of expertise we design.",
    },
    {
      id: "02",
      title: "Trusted Company",
      desc: "We craft unique digital experiences. With more than 7 years of expertise we design.",
    },
    {
      id: "03",
      title: "Professional Teams",
      desc: "We craft unique digital experiences. With more than 7 years of expertise we design.",
    },
    {
      id: "04",
      title: "Stylistic Formula Method",
      desc: "We craft unique digital experiences. With more than 7 years of expertise we design.",
    },
  ],
  bgNumbers: ["1", "2", "3", "4"],
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function WhyChooseUs() {
  const { section, features, bgNumbers } = DATA;

  return (
    <>
      <section className="wcu-section">
          <div className="wcu-container">
            {/* ── LEFT: overline + heading + truck image ── */}
            <div className="wcu-left">
              <span className="wcu-overline">{section.overline}</span>
              <h2 className="wcu-heading">{section.heading}</h2>
              <div className="wcu-truck-wrapper">
                <img
                  className="wcu-truck-img"
                  src={section.truckImage}
                  alt={section.truckAlt}
                />
              </div>
            </div>

            {/* ── RIGHT: features list ── */}
            <div className="wcu-right">
              {features.map((f) => (
                <div className="wcu-feature" key={f.id}>
                  <div className="wcu-feat-num">{f.id}</div>
                  <div className="wcu-feat-body">
                    <div className="wcu-feat-title">{f.title}</div>
                    <div className="wcu-feat-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
    </>
  );
}
