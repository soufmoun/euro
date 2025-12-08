// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top shadow" style={{backgroundColor: '#05203c'}}>
      <div className="container">
        {/* Brand with logo */}
        <Link href="/" className="navbar-brand fw-bold fs-3 d-flex align-items-center">
          <span className="me-2">🌍</span>
          EuroBudget
        </Link>
        
        {/* Mobile menu button */}
        <button
  className="navbar-toggler"
  type="button"
  onClick={() => setIsOpen(!isOpen)}
  aria-expanded={isOpen}
  aria-label={isOpen ? "Close menu" : "Open menu"}
  aria-controls="navbarNav"
>
  <span className="navbar-toggler-icon"></span>
</button>
        
        {/* Navigation links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Home */}
            <li className="nav-item">
              <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>
                🏠 Home
              </Link>
            </li>
            
            {/* Destinations Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                🗺️ Destinations
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/destinations" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    All Destinations
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link href="/destinations/paris" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    🇫🇷 Paris
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/rome" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    🇮🇹 Rome
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/barcelona" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    🇪🇸 Barcelona
                  </Link>
                </li>
                <li>
                  <Link href="/destinations/berlin" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    🇩🇪 Berlin
                  </Link>
                </li>
              </ul>
            </li>

            {/* Itineraries */}
            <li className="nav-item">
              <Link href="/itineraries" className="nav-link" onClick={() => setIsOpen(false)}>
                📅 Itineraries
              </Link>
            </li>

            {/* Blogs */}
            <li className="nav-item">
              <Link href="/blog" className="nav-link" onClick={() => setIsOpen(false)}>
                📝 Blog
              </Link>
            </li>
            
            {/* About Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                ℹ️ About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link href="/about" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    📞 Contact
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <Link href="/privacy" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    🔒 Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="dropdown-item" onClick={() => setIsOpen(false)}>
                    📝 Terms of Service
                  </Link>
                </li>
              </ul>
            </li>

            {/* CTA Button */}
            <li className="nav-item ms-2">
              <Link 
                href="/destinations" 
                className="btn btn-outline-light btn-sm mt-1"
                onClick={() => setIsOpen(false)}
              >
                Start Planning ›
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;