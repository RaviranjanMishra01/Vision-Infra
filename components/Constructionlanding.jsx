"use client"
import { React, useState } from 'react';
import Image from "next/image";
import "./Constructionlanding.css";
const data = {
  "header": {
    "label": "BUILT IN A"
  },
  "hero": {
    "heading": "We building everything that you needed",
    "subtitle": "We craft secure digital experiences with 20+ years of experience and a team of experts in strategy and design to create lasting impressions.",
    "features": [
      {
        "id": 1,
        "text": "Expertise in construction and infrastructure"
      },
      {
        "id": 2,
        "text": "Delivered second-hand builder materials"
      }
    ]
  },
  "contact": {
    "phone": "+123 555 8024",
    "label": "Call Now",
    "person": {
      "name": "John Smith",
      "title": "Founder & CEO",
      "image": "/assets/personimage.png"
    }
  },
  "images": {
    "videoThumbnail": "/assets/servicevideo.jpeg",
    "mainImage": "/assets/servicespage.jpeg"
  },
  "rightColumn": {
    "description": "We craft secure digital experiences. We are a team of experts committed to delivering the highest quality of digital transformation with years of expertise in the industry.",
    "cta": {
      "text": "SEND INQUIRY →",
      "ariaLabel": "Send inquiry button"
    }
  }
};

const ConstructionLanding = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setVideoPlaying(!videoPlaying);
  };

  const handleCtaClick = () => {
    console.log('CTA Button Clicked');
    // Add your CTA handler logic here
  };

  return (
    <div className="wrapper">
      {/* Main Container */}
      <div className="container">
        <div className="main-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* Main Heading */}
            <h1 className="main-heading">{data.hero.heading}</h1>

            {/* Subtitle */}
            <p className="subtitle">{data.hero.subtitle}</p>

            {/* Features List */}
            <ul className="features-list">
              {data.hero.features.map((feature) => (
                <li key={feature.id} className="feature-item">
                  <span className="feature-dot"></span>
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* Contact Section */}
            <div className="contact-section">
              {/* Phone Box */}
              <div className="phone-box">
                <span className="phone-icon">📞</span>
                <div className="phone-content">
                  <div className="phone-label">{data.contact.label}</div>
                  <div className="phone-number">{data.contact.phone}</div>
                </div>
              </div>

              {/* Contact Person */}
              <div className="contact-person">
                <div className="person-avatar">
                  <img 
                    src={data.contact.person.image} 
                    alt={data.contact.person.name}
                  />
                </div>
                <div className="person-name">{data.contact.person.name}</div>
                <div className="person-title">{data.contact.person.title}</div>
              </div>
            </div>

            {/* Video Section */}
            <div className="video-section">
              <div 
                className="video-thumbnail" 
                onClick={handleVideoClick}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleVideoClick();
                  }
                }}
                aria-label="Play video"
              >
                <img 
                  src={data.images.videoThumbnail} 
                  alt="Video thumbnail"
                />
                <div className="play-button">▶</div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Main Image */}
            <div className="main-image-container">
              <img 
                src={data.images.mainImage} 
                alt="Construction worker"
              />
            </div>

            {/* Bottom Content Section */}
            <div className="right-content">
              <p className="right-description">
                {data.rightColumn.description}
              </p>

              {/* CTA Button */}
              <button 
                className="cta-button"
                onClick={handleCtaClick}
                aria-label={data.rightColumn.cta.ariaLabel}
              >
                {data.rightColumn.cta.text}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionLanding;