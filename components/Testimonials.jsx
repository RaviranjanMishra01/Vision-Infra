"use client";
import { useState, useEffect, useRef } from "react";
import "./Testimonials.css";

// ─── ALL DATA (flattened into single cards array) ──────────────────────────
const CARDS = [
  {
    id: 1,
    name: "Mark Thompson",
    role: "Project Manager",
    company: "Thompson Corp.",
    avatar: "https://i.pravatar.cc/80?img=11",
    stars: 5,
    text: "Exceptionally professional team. They handled our entire renovation project with great attention to detail and delivered on time. Highly recommended for any construction needs.",
  },
  {
    id: 2,
    name: "Sara Connors",
    role: "Business Owner",
    company: "Connor's Ltd.",
    avatar: "https://i.pravatar.cc/80?img=47",
    stars: 5,
    text: "More than 7 years of expertise — they design and create stunning solutions that have been the cornerstone in building and growing our business. Truly outstanding service.",
    featured: true,
  },
  {
    id: 3,
    name: "Robert Anderson",
    role: "Civil Engineer",
    company: "Anderson Ltd.",
    avatar: "https://i.pravatar.cc/80?img=53",
    stars: 4,
    text: "Outstanding work on our infrastructure project. The team was professional, knowledgeable, and completed everything within the agreed timeline and budget constraints.",
  },
  {
    id: 4,
    name: "Priya Mehta",
    role: "Architect",
    company: "Mehta & Co.",
    avatar: "https://i.pravatar.cc/80?img=32",
    stars: 5,
    text: "Working with this team was seamless from start to finish. Their structural expertise and communication made a complex project feel incredibly manageable.",
  },
  {
    id: 5,
    name: "James Okafor",
    role: "Property Developer",
    company: "Okafor Realty",
    avatar: "https://i.pravatar.cc/80?img=68",
    stars: 5,
    text: "They delivered well ahead of schedule without cutting any corners. Quality of workmanship was top-notch and the site was always clean and well-managed.",
    featured: true,
  },
  {
    id: 6,
    name: "Lena Fischer",
    role: "Interior Designer",
    company: "Fischer Studios",
    avatar: "https://i.pravatar.cc/80?img=25",
    stars: 5,
    text: "A rare contractor who actually listens to the designer's vision. They executed every detail of our interior renovation spec perfectly. Will definitely work with them again.",
  },
];

const SECTION = {
  overline: "TESTIMONIALS ✦",
  heading: "What our clients say about us",
  ratingLabel: "4.8",
  ratingCount: "2k+ Reviews",
};

// ─── STAR RENDERER ───────────────────────────────────────────────────────────
function Stars({ count, total = 5 }) {
  return (
    <div className="tst-stars">
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} className={`tst-star${i >= count ? " empty" : ""}`}>★</span>
      ))}
    </div>
  );
}

// ─── CARD ────────────────────────────────────────────────────────────────────
function Card({ card }) {
  return (
    <div className={`tst-card${card.featured ? " featured" : ""}`}>
      <div className="tst-quote-mark">"</div>
      <p className="tst-text">{card.text}</p>
      <div className="tst-divider" />
      <div className="tst-card-bottom">
        <div className="tst-card-person">
          <img className="tst-avatar" src={card.avatar} alt={card.name} />
          <div>
            <div className="tst-name">{card.name}</div>
            <div className="tst-role">{card.role}</div>
            <div className="tst-company">{card.company}</div>
          </div>
        </div>
        <Stars count={card.stars} />
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT (Single Card Carousel) ───────────────────────────────────
export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoRef = useRef(null);
  const totalCards = CARDS.length;

  const goTo = (idx) => setCurrentIndex(idx);
  const prev = () => setCurrentIndex((prevIdx) => (prevIdx - 1 + totalCards) % totalCards);
  const next = () => setCurrentIndex((prevIdx) => (prevIdx + 1) % totalCards);

  // Reset autoplay timer and call the navigation function
  const resetAuto = (navigationFn) => {
    clearInterval(autoRef.current);
    navigationFn();
    autoRef.current = setInterval(() => {
      setCurrentIndex((idx) => (idx + 1) % totalCards);
    }, 6000);
  };

  // Autoplay setup
  useEffect(() => {
    autoRef.current = setInterval(() => {
      setCurrentIndex((idx) => (idx + 1) % totalCards);
    }, 6000);
    return () => clearInterval(autoRef.current);
  }, [totalCards]);

  return (
    <section className="tst-section">
      {/* ── Top row with heading and rating ── */}
      <div className="tst-top">
        <div>
          <span className="tst-overline">{SECTION.overline}</span>
          <h2 className="tst-heading">{SECTION.heading}</h2>
        </div>
        <div className="tst-rating-box">
          <div className="tst-stars-big">
            {[1, 2, 3, 4, 5].map((s) => (
              <span key={s} className="tst-star-big">★</span>
            ))}
          </div>
          <div className="tst-rating-info">
            <div className="tst-rating-num">{SECTION.ratingLabel}</div>
            <div className="tst-rating-count">{SECTION.ratingCount}</div>
          </div>
        </div>
      </div>

      {/* ── Single-card carousel ── */}
      <div className="tst-carousel-outer">
        <div className="tst-carousel-track-wrap">
          <div
            className="tst-carousel-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {CARDS.map((card) => (
              <div className="tst-slide" key={card.id}>
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Controls: left arrow, dots, right arrow ── */}
        <div className="tst-controls">
          <button
            className="tst-arrow"
            onClick={() => resetAuto(prev)}
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <div className="tst-dots">
            {CARDS.map((_, idx) => (
              <button
                key={idx}
                className={`tst-dot${currentIndex === idx ? " active" : ""}`}
                onClick={() => resetAuto(() => goTo(idx))}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            className="tst-arrow"
            onClick={() => resetAuto(next)}
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}