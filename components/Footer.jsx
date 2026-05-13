"use client"
import React from "react";
import "./Footer.css";

// ── JSON Data Config ──────────────────────────────────────────────
const footerData = {
  brand: {
    name: "CONSTRU",
    highlight: "BUILD",
    since: "Since 2003",
  },

  newsletter: {
    tagline: "Subscribe to our newsletter for the latest updates",
    placeholder: "Your email address",
    buttonLabel: "Subscribe →",
  },

  aboutCompany: {
    title: "About Company",
    description:
      "We are a leading construction company delivering world-class infrastructure solutions. Trusted by clients globally since 2003.",
    address: "123 Builder Street, NY 10001",
    phone: "+1 (234) 567-8900",
  },

  usefulLinks: {
    title: "Useful Links",
    links: [
      { label: "Home",       href: "#" },
      { label: "About Us",   href: "#" },
      { label: "Services",   href: "#" },
      { label: "Our Team",   href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Projects",   href: "#" },
      { label: "FAQ",        href: "#" },
    ],
  },

  officeAddress: {
    title: "Office Address",
    lines: ["123 Construction Avenue,", "New York, NY 10001,", "United States of America"],
    contacts: [
      { label: "Total & Offices:", value: "" },
      { label: "",                 value: "+1 (800) 123-4567" },
      { label: "",                 value: "contact@company.com" },
    ],
    followTitle: "Follow Us",
  },

  phoneNumbers: {
    title: "Phone Numbers",
    items: [
      { label: "Main Office",   number: "+1 (234) 567-8901" },
      { label: "Support Line",  number: "+1 (234) 567-8902" },
      { label: "Emergency",     number: "+1 (234) 567-8903" },
      { label: "Fax",           number: "+1 (234) 567-8904" },
    ],
  },

  socialIcons: [
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
  ],

  bottomBar: {
    privacyPolicy:   { label: "Privacy Policy",   href: "#" },
    termsOfService:  { label: "Terms of Service",  href: "#" },
    sitemap:         { label: "Sitemap",            href: "#" },
  },
};
// ─────────────────────────────────────────────────────────────────

export default function Footer() {
  const {
    brand,
    newsletter,
    aboutCompany,
    usefulLinks,
    officeAddress,
    phoneNumbers,
    socialIcons,
    bottomBar,
  } = footerData;

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
            <span className="logo-text">
              {brand.name}<span>{brand.highlight}</span>
            </span>
          </div>

          {/* Newsletter */}
          <p className="newsletter-tagline">{newsletter.tagline}</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder={newsletter.placeholder}
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">
              {newsletter.buttonLabel}
            </button>
          </form>
        </div>

        {/* ── Divider ── */}
        <div className="footer-divider" />

        {/* ── Main Columns ── */}
        <div className="footer-columns">

          {/* About Company */}
          <div className="footer-col">
            <h4 className="col-title">{aboutCompany.title}</h4>
            <p className="col-about-text">{aboutCompany.description}</p>
            <a href="#" className="footer-since-badge">{brand.since}</a>
            <div className="col-contact-line">
              <span className="contact-label">Address:</span>
              <span>{aboutCompany.address}</span>
            </div>
            <div className="col-contact-line">
              <span className="contact-label">Phone:</span>
              <span>{aboutCompany.phone}</span>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-col">
            <h4 className="col-title">{usefulLinks.title}</h4>
            <ul className="footer-links-list">
              {usefulLinks.links.map((link) => (
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
            <h4 className="col-title">{officeAddress.title}</h4>
            <p className="col-about-text">
              {officeAddress.lines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}{i < officeAddress.lines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            {officeAddress.contacts.map((contact, i) => (
              <div className="col-contact-line" key={i}>
                {contact.label && (
                  <span className="contact-label">{contact.label}</span>
                )}
                {contact.value && <span>{contact.value}</span>}
              </div>
            ))}

            <h4 className="col-title follow-title">{officeAddress.followTitle}</h4>
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
            <h4 className="col-title">{phoneNumbers.title}</h4>
            <div className="phone-list">
              {phoneNumbers.items.map((item) => (
                <div className="phone-item" key={item.label}>
                  <span className="phone-label">{item.label}</span>
                  <span className="phone-number">{item.number}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} {brand.name}{brand.highlight}. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href={bottomBar.privacyPolicy.href} className="bottom-link">
              {bottomBar.privacyPolicy.label}
            </a>
            <span className="bottom-sep">·</span>
            <a href={bottomBar.termsOfService.href} className="bottom-link">
              {bottomBar.termsOfService.label}
            </a>
            <span className="bottom-sep">·</span>
            <a href={bottomBar.sitemap.href} className="bottom-link">
              {bottomBar.sitemap.label}
            </a>
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