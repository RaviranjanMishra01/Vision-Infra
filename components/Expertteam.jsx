"use client"
import React from "react";
import "./Expertteam.css";

const teamMembers = [
  {
    id: 1,
    name: "RICHARD BENSON",
    role: "Site Supervisor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=450&fit=crop&crop=face",
    helmetColor: "#2563EB",
  },
  {
    id: 2,
    name: "IVAN LOZARE",
    role: "Engineer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=450&fit=crop&crop=face",
    helmetColor: "#D1D5DB",
  },
  {
    id: 3,
    name: "BRT PRAUER",
    role: "Site Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=450&fit=crop&crop=face",
    helmetColor: "#EA580C",
  },
];

export default function ExpertTeam() {
  return (
    <section className="expert-team-section">
      <div className="expert-team-container">
        {/* Header Row */}
        <div className="expert-team-header">
          <div className="header-left">
            <span className="section-label">OUR TEAM</span>
            <h2 className="section-title">Meet with our expert team</h2>
          </div>
          <a href="#" className="cta-button">
            Hire an expert &rarr;
          </a>
        </div>

        {/* Team Cards */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={member.id} style={{ animationDelay: `${index * 0.12}s` }}>
              <div className="card-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-image"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=f3f4f6&color=374151&bold=true`;
                  }}
                />
                <div className="card-overlay" />
              </div>
              <div className="card-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}