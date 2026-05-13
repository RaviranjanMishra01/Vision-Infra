"use client"
import React from "react";
import "./Latestnews.css";

const blogPosts = [
  {
    id: 1,
    date: { day: "17", month: "MAR" },
    category: "Construction",
    subCategory: "Safety Training",
    title: "How to develop a specific training programs",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image:
      "/assets/news01.png",
  },
  {
    id: 2,
    date: { day: "11", month: "APR" },
    category: "Management",
    subCategory: "Project Planning",
    title: "How to stay motivated online project activities",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    image:
      "/assets/news02.png",
  },
  {
    id: 3,
    date: { day: "17", month: "MAY" },
    category: "Engineering",
    subCategory: "Renovation",
    title: "Use tactics related to basic renovation stories",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
    image:
      "/assets/news03.png",
  }
];

export default function LatestNews() {
  return (
    <section className="latest-news-section">
      <div className="latest-news-container">
        {/* Header Row */}
        <div className="latest-news-header">
          <div className="header-left">
            <span className="section-label">LATEST UPDATES</span>
            <h2 className="section-title">Our Latest News &amp; Blog</h2>
          </div>
          <a href="#" className="cta-button">
            View all news &rarr;
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="news-grid">
          {blogPosts.map((post, index) => (
            <article
              className="news-card"
              key={post.id}
              style={{ animationDelay: `${index * 0.13}s` }}
            >
              {/* Image */}
              <div className="card-image-wrapper">
                <img
                  src={post.image}
                  alt={post.title}
                  className="card-image"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=Blog&size=600&background=e5e7eb&color=9ca3af`;
                  }}
                />
                {/* Date Badge */}
                <div className="date-badge">
                  <span className="date-day">{post.date.day}</span>
                  <span className="date-month">{post.date.month}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="card-body">
                <div className="card-meta">
                  <span className="meta-category">{post.category}</span>
                  <span className="meta-dot">·</span>
                  <span className="meta-sub">{post.subCategory}</span>
                </div>
                <h3 className="card-title">{post.title}</h3>
                <p className="card-excerpt">{post.excerpt}</p>
                <a href="#" className="read-more-btn">
                  Read more &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}