"use client";

import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const CARDS = [
  {
    id: 1,
    name: "Mark Thompson",
    role: "Project Manager",
    company: "Thompson Corp.",
    avatar: "https://i.pravatar.cc/80?img=11",
    stars: 5,
    text: "Outstanding work on our infrastructure project. The team demonstrated strong technical expertise, excellent project coordination, and a consistent focus on safety and quality standards. ",
  },
  {
    id: 2,
    name: "Sara Connors",
    role: "Business Owner",
    company: "Connor's Ltd.",
    avatar: "https://i.pravatar.cc/80?img=47",
    stars: 5,
    text: "Outstanding work on our infrastructure project. The team demonstrated strong technical expertise, excellent project coordination, and a consistent focus on safety and quality standards. ",
    featured: true,
  },
  {
    id: 3,
    name: "Robert Anderson",
    role: "Civil Engineer",
    company: "Anderson Ltd.",
    avatar: "https://i.pravatar.cc/80?img=53",
    stars: 4,
    text: "Outstanding work on our infrastructure project. The team demonstrated strong technical expertise, excellent project coordination, and a consistent focus on safety and quality standards. ",
  },
  {
    id: 4,
    name: "Priya Mehta",
    role: "Architect",
    company: "Mehta & Co.",
    avatar: "https://i.pravatar.cc/80?img=32",
    stars: 5,
    text: "Working with this team was seamless from start to finish. They understood our architectural vision perfectly and executed every detail with precision. ",
  },
  {
    id: 5,
    name: "James Okafor",
    role: "Property Developer",
    company: "Okafor Realty",
    avatar: "https://i.pravatar.cc/80?img=68",
    stars: 5,
    text: "They delivered well ahead of schedule without compromising on quality. The craftsmanship, project management, and professionalism shown by the entire team were exceptional.",
    featured: true,
  },
  {
    id: 6,
    name: "Lena Fischer",
    role: "Interior Designer",
    company: "Fischer Studios",
    avatar: "https://i.pravatar.cc/80?img=25",
    stars: 5,
    text: "A rare contractor who actually listens to the designer's vision and brings it to life with precision. ",
  },
];

const clonedCards = [
  CARDS[CARDS.length - 3],
  CARDS[CARDS.length - 2],
  CARDS[CARDS.length - 1],
  ...CARDS,
  CARDS[0],
  CARDS[1],
  CARDS[2],
];

function Stars({ count }) {
  return (
    <div className="tst-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`tst-star ${i >= count ? "empty" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function Card({ card }) {
  return (
    <div className={`tst-card ${card.featured ? "featured" : ""}`}>
      <div className="tst-quote-mark">"</div>

      <p className="tst-text">{card.text}</p>

      <div className="tst-divider" />

      <div className="tst-card-bottom">
        <div className="tst-card-person">
          <img src={card.avatar} alt={card.name} className="tst-avatar" />

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

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [transition, setTransition] = useState(true);
  const totalDots = CARDS.length;

  const autoRef = useRef(null);

  const next = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prev = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index + 3);
  };

  const resetAuto = (fn) => {
    clearInterval(autoRef.current);

    fn();

    autoRef.current = setInterval(() => {
      next();
    }, 5000);
  };

  useEffect(() => {
    autoRef.current = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(autoRef.current);
  }, []);

  const handleTransitionEnd = () => {
    if (currentIndex >= CARDS.length + 3) {
      setTransition(false);
      setCurrentIndex(3);
    }

    if (currentIndex <= 0) {
      setTransition(false);
      setCurrentIndex(CARDS.length);
    }
  };

  useEffect(() => {
    if (!transition) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTransition(true);
        });
      });
    }
  }, [transition]);

  const [slideWidth, setSlideWidth] = useState(33.3333);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth <= 768) {
        setSlideWidth(100);
      } else if (window.innerWidth <= 992) {
        setSlideWidth(50);
      } else {
        setSlideWidth(33.3333);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <section className="tst-section">
      <div className="tst-top">
        <div>
          <span className="tst-overline">TESTIMONIALS ✦</span>

          <h2 className="tst-heading">
            What our clients say about us
          </h2>
        </div>
      </div>

      <div className="tst-carousel-outer">
        <div className="tst-carousel-track-wrap">
          <div
            className="tst-carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * slideWidth}%)`,
              transition: transition
                ? "transform 0.6s ease"
                : "none",
            }}
          >
            {clonedCards.map((card, index) => (
              <div className="tst-slide" key={index}>
                <Card card={card} />
              </div>
            ))}
          </div>
        </div>

        <div className="tst-controls">
          <button
            className="tst-arrow"
            onClick={() => resetAuto(prev)}
          >
            ←
          </button>

          <div className="tst-dots">
            {Array.from({ length: totalDots }).map((_, index) => {
              const activeIndex =
                ((currentIndex - 3) % CARDS.length + CARDS.length) %
                CARDS.length;

              return (
                <button
                  key={index}
                  className={`tst-dot ${activeIndex === index ? "active" : ""
                    }`}
                  onClick={() => goToSlide(index)}
                />
              );
            })}
          </div>

          <button
            className="tst-arrow"
            onClick={() => resetAuto(next)}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}