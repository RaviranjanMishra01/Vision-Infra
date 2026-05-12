"use client"
import { useState, useEffect, useRef } from "react";
import "./exploreprojects.css";

// ─── ALL DATA IN JSON ────────────────────────────────────────────────────────
const DATA = {
  section: {
    overline: "COMPLETE OUR ✦",
    heading: "Explore recent projects",
    viewAllBtn: "VIEW ALL PROJECTS",
  },
  projects: [
    {
      id: 1,
      tag: "BUILDING",
      title: "General Construction",
      subtitle: "High-rise residential complex with modern facade and open floor plans.",
      date: "03.08.2024",
      image: "/assets/explore01.png",
      stat: "24 Units",
    },
    {
      id: 2,
      tag: "STEEL",
      title: "Steel Framework",
      subtitle: "Industrial warehouse with precision-engineered steel superstructure.",
      date: "01.05.2024",
      image: "/assets/explore02.png",
      stat: "8,400 m²",
    },
    {
      id: 3,
      tag: "RENOVATION",
      title: "Interior Renovation",
      subtitle: "Complete interior overhaul of a heritage commercial building downtown.",
      date: "11.02.2024",
      image: "/assets/explore03.png",
      stat: "3 Floors",
    },
    {
      id: 4,
      tag: "INFRASTRUCTURE",
      title: "Road Infrastructure",
      subtitle: "6-lane expressway connecting two major industrial zones in the region.",
      date: "07.09.2023",
      image: "/assets/explore04.png",
      stat: "12.4 km",
    },
  ],
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function ExploreProjects() {
  const { section, projects } = DATA;

  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const autoRef             = useRef(null);

  // ── slide transition ──
  const goTo = (idx) => {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 320);
  };

  const prev = () => goTo((active - 1 + projects.length) % projects.length);
  const next = () => goTo((active + 1) % projects.length);

  // ── auto-advance every 5 s ──
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActive((a) => (a + 1) % projects.length);
    }, 5000);
    return () => clearInterval(autoRef.current);
  }, []);

  // ── reset timer on manual interaction ──
  const resetAuto = (fn) => {
    clearInterval(autoRef.current);
    fn();
    autoRef.current = setInterval(() => {
      setActive((a) => (a + 1) % projects.length);
    }, 5000);
  };

  const p           = projects[active];
  const progressPct = ((active + 1) / projects.length) * 100;

  return (
    <section className="erp2-section">

      {/* ── Top: heading + view-all button ── */}
      <div className="erp2-top">
        <div>
          <span className="erp2-overline">{section.overline}</span>
          <h2 className="erp2-heading">{section.heading}</h2>
        </div>
        <button className="erp2-view-all">{section.viewAllBtn} &nbsp;→</button>
      </div>

      {/* ── Main slider ── */}
      <div className="erp2-slider-wrap">
        <div className="erp2-slide">

          {/* Left — image pane */}
          <div className="erp2-slide-img">
            <div className="cover-project-images">
              <img
              src={p.image}
              alt={p.title}
              style={{
                opacity:    fading ? 0 : 1,
                transform:  fading ? "scale(1.04)" : "scale(1)",
                transition: "opacity 0.32s ease, transform 0.32s ease",
              }}
            />
            </div>

            <div className="erp2-img-tag">{p.tag}</div>

            <button
              className="erp2-arrow erp2-arrow-left"
              onClick={() => resetAuto(prev)}
              aria-label="Previous project"
            >
              ←
            </button>
            <button
              className="erp2-arrow erp2-arrow-right"
              onClick={() => resetAuto(next)}
              aria-label="Next project"
            >
              →
            </button>
          </div>

          {/* Right — info pane */}
          <div className="erp2-slide-info">
            <div className="erp2-info-top">
              <div
                className="erp2-info-date"
                style={{
                  opacity:    fading ? 0 : 1,
                  transition: "opacity 0.28s ease",
                }}
              >
                Building since {p.date}
              </div>

              <div
                className="erp2-info-title"
                style={{
                  opacity:    fading ? 0 : 1,
                  transform:  fading ? "translateY(8px)" : "translateY(0)",
                  transition: "opacity 0.32s ease, transform 0.32s ease",
                }}
              >
                {p.title}
              </div>

              <div
                className="erp2-info-subtitle"
                style={{
                  opacity:    fading ? 0 : 1,
                  transition: "opacity 0.35s ease 0.04s",
                }}
              >
                {p.subtitle}
              </div>

              <div className="erp2-stat-pill">
                <span className="erp2-stat-dot" />
                {p.stat}
              </div>
            </div>

            {/* Actions + progress */}
            <div>
              <div className="erp2-info-actions">
                <button className="erp2-explore-btn">EXPLORE PROJECT &nbsp;↗</button>
                <button className="erp2-share-btn" title="Share">↗</button>
              </div>

              <div className="erp2-progress-bar">
                <div
                  className="erp2-progress-fill"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom thumbnail tabs ── */}
      <div className="erp2-tabs mobile-priview">
        {projects.map((proj, i) => (
          <div
            key={proj.id}
            className={`erp2-tab${active === i ? " active" : ""}`}
            onClick={() => resetAuto(() => goTo(i))}
          >
            <div className="erp2-tab-active-bar" />
            <img src={proj.image} alt={proj.title} />
            <div className="erp2-tab-info">
              <span className="erp2-tab-tag">{proj.tag}</span>
              <div className="erp2-tab-title">{proj.title}</div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}