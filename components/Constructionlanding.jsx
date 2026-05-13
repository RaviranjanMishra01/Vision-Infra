"use client";
import { React, useState, useRef } from "react";
import Image from "next/image";
import "./Constructionlanding.css";

const data = {
  header: {
    label: "BUILT IN A",
  },
  hero: {
    heading: "We building everything that you needed",
    subtitle:
      "We craft secure digital experiences with 20+ years of experience and a team of experts in strategy and design to create lasting impressions.",
    features: [
      {
        id: 1,
        text: "Expertise in construction and infrastructure",
      },
      {
        id: 2,
        text: "Delivered second-hand builder materials",
      },
    ],
  },
  contact: {
    phone: "+123 555 8024",
    label: "Call Now",
    person: {
      name: "John Smith",
      title: "Founder & CEO",
      image: "/assets/personimage.png",
    },
  },
  images: {
    videoThumbnail: "/assets/mixkit-flying.mp4",
    mainImage: "/assets/servicespage.jpeg",
  },
  rightColumn: {
    description:
      "We craft secure digital experiences. We are a team of experts committed to delivering the highest quality of digital transformation with years of expertise in the industry.",
    cta: {
      text: "SEND INQUIRY →",
      ariaLabel: "Send inquiry button",
    },
  },
};

const ConstructionLanding = () => {
  const videoRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(true);

  const handleCtaClick = () => {
    console.log("CTA Button Clicked");
    // Add your CTA handler logic here
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  return (
    <section className="construction-landing">
      {/* Main Container */}
      <div className="construction-landing__grid">
        {/* ── Left Column ── */}
        <div className="construction-landing__left">
          {/* Heading */}
          <h1 className="construction-landing__heading">{data.hero.heading}</h1>

          {/* Subtitle */}
          <p className="construction-landing__subtitle">{data.hero.subtitle}</p>

          {/* Features List */}
          <ul className="construction-landing__features">
            {data.hero.features.map((feature) => (
              <li
                key={feature.id}
                className="construction-landing__feature-item"
              >
                <span className="construction-landing__feature-dot"></span>
                {feature.text}
              </li>
            ))}
          </ul>

          {/* Contact Section */}
          <div className="construction-landing__contact">
            {/* Phone Box */}
            <div className="construction-landing__phone-box">
              <span className="construction-landing__phone-icon">📞</span>
              <div className="construction-landing__phone-content">
                <div className="construction-landing__phone-label">
                  {data.contact.label}
                </div>
                <div className="construction-landing__phone-number">
                  {data.contact.phone}
                </div>
              </div>
            </div>

            {/* Contact Person */}
            <div className="construction-landing__person">
              <div className="construction-landing__person-avatar">
                <img
                  src={data.contact.person.image}
                  alt={data.contact.person.name}
                />
              </div>
              <div className="construction-landing__person-detail">
                <div className="construction-landing__person-name">
                  {data.contact.person.name}
                </div>
                <div className="construction-landing__person-title">
                  {data.contact.person.title}
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="construction-landing__video">
            <div className="construction-landing__video-wrapper">
              <video
                ref={videoRef}
                src={data.images.videoThumbnail}
                autoPlay
                muted
                loop
                playsInline
                className="construction-landing__video-player"
              />
              {/* Play / Pause Button Overlay */}
              <button
                className="construction-landing__video-btn"
                onClick={handleVideoClick}
                aria-label={videoPlaying ? "Pause video" : "Play video"}
              >
                {videoPlaying ? "⏸" : "▶"}
              </button>
            </div>
          </div>
        </div>

        {/* ── Right Column ── */}
        <div className="construction-landing__right">
          {/* Main Image */}
          <div className="construction-landing__main-image">
            <img src={data.images.mainImage} alt="Construction worker" />
          </div>

          {/* Bottom Content */}
          <div className="construction-landing__right-content">
            <p className="construction-landing__right-description">
              {data.rightColumn.description}
            </p>

            {/* CTA Button */}
            <button
              className="construction-landing__cta-btn"
              onClick={handleCtaClick}
              aria-label={data.rightColumn.cta.ariaLabel}
            >
              {data.rightColumn.cta.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionLanding;
