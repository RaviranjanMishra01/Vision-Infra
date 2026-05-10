"use client";

import { useState } from "react";
import "./Header.css";
import Image from "next/image";

const navLinks = [
  { id: 1, label: "HOME", href: "#home" },
  { id: 2, label: "ABOUT", href: "#about" },
  { id: 3, label: "SERVICES", href: "#services" },
  { id: 4, label: "PROJECTS", href: "#projects" },
  { id: 5, label: "TEAM", href: "#team" },
  { id: 6, label: "CONTACT", href: "#contact" },
];

const headerData = {
  heading:"CONSTRUIZ",
  logo: "/assets/call-receive.svg",
  phone: "+123 556 8824",
  buttonText: "GET IN TOUCH",
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">

        {/* Logo */}
        <div className="logo">{headerData.heading}</div>

        {/* Desktop Navigation */}
        <nav>
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section */}
        <div className="header-right">

          <div className="phone-number">
            <div className="call-recive">
              <img src={headerData.logo} alt="" />
            </div>
            <div className="">
              <p>CALL NOW</p>
              <p>{headerData.phone}</p>
            </div>
            </div>
          <button className="cta-button">{headerData.buttonText}</button>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </header>

      {/* Mobile Menu — outside header so it pushes content down */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-nav">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mobile-bottom">
          <span className="mobile-phone">{headerData.phone}</span>
          <button className="mobile-cta">{headerData.buttonText}</button>
        </div>
      </div>
    </>
  );
}