"use client"
import React from "react";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Services", href: "#" },
  { label: "Our Team", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Projects", href: "#" },
  { label: "FAQ", href: "#" },
];

const socialIcons = [
  {
    name: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="3" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Dark texture overlay */}
      <div className="footer-bg-overlay" />

      <div className="footer-inner">
        {/* ── Top Newsletter Bar ── */}
        <div className="footer-newsletter-bar">
          {/* Logo */}
          <div className="footer-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 32 32" fill="none" width="28" height="28">
                <polygon points="16,2 30,28 2,28" fill="#EA580C" opacity="0.9" />
                <polygon points="16,8 26,26 6,26" fill="#1a1a1a" />
              </svg>
            </div>
            <span className="logo-text">CONSTRU<span>BUILD</span></span>
          </div>

          {/* Newsletter */}
          <p className="newsletter-tagline">Subscribe to our newsletter for the latest updates</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">Subscribe →</button>
          </form>
        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Main Columns ── */}
        <div className="footer-columns">
          {/* About Company */}
          <div className="footer-col">
            <h4 className="col-title">About Company</h4>
            <p className="col-about-text">
              We are a leading construction company delivering world-class
              infrastructure solutions. Trusted by clients globally since 2003.
            </p>
            <a href="#" className="footer-since-badge">Since 2003</a>
            <div className="col-contact-line">
              <span className="contact-label">Address:</span>
              <span>123 Builder Street, NY 10001</span>
            </div>
            <div className="col-contact-line">
              <span className="contact-label">Phone:</span>
              <span>+1 (234) 567-8900</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="col-title">Useful Links</h4>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    <span className="link-arrow">›</span> {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Address */}
          <div className="footer-col">
            <h4 className="col-title">Office Address</h4>
            <p className="col-about-text">
              123 Construction Avenue,<br />
              New York, NY 10001,<br />
              United States of America
            </p>
            <div className="col-contact-line">
              <span className="contact-label">Total &amp; Offices:</span>
            </div>
            <div className="col-contact-line">
              <span>+1 (800) 123-4567</span>
            </div>
            <div className="col-contact-line">
              <span>contact@company.com</span>
            </div>

            <h4 className="col-title follow-title">Follow Us</h4>
            <div className="social-icons">
              {socialIcons.map((icon) => (
                <a key={icon.name} href={icon.href} className="social-icon" aria-label={icon.name}>
                  {icon.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Phone Numbers */}
          <div className="footer-col">
            <h4 className="col-title">Phone Numbers</h4>
            <div className="phone-list">
              <div className="phone-item">
                <span className="phone-label">Main Office</span>
                <span className="phone-number">+1 (234) 567-8901</span>
              </div>
              <div className="phone-item">
                <span className="phone-label">Support Line</span>
                <span className="phone-number">+1 (234) 567-8902</span>
              </div>
              <div className="phone-item">
                <span className="phone-label">Emergency</span>
                <span className="phone-number">+1 (234) 567-8903</span>
              </div>
              <div className="phone-item">
                <span className="phone-label">Fax</span>
                <span className="phone-number">+1 (234) 567-8904</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} ConstruBuild. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#" className="bottom-link">Privacy Policy</a>
            <span className="bottom-sep">·</span>
            <a href="#" className="bottom-link">Terms of Service</a>
            <span className="bottom-sep">·</span>
            <a href="#" className="bottom-link">Sitemap</a>
          </div>
          <div className="footer-scroll-top">
            <button
              className="scroll-top-btn"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}