// components/HeroSection.tsx - CONVERTED TO BOOTSTRAP
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight, FaPlay, FaSearch } from 'react-icons/fa';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  primaryCta?: string; 
  secondaryCta?: string; 
  primaryLink?: string; 
  secondaryLink?: string;
  showSearch?: boolean;
}

export default function HeroSection({
  title = "Discover Your Perfect European Adventure",
  subtitle = "Handcrafted itineraries for every budget and travel style",
  backgroundImage = "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1920&auto=format&fit=crop",
  primaryCta = "Browse Itineraries", 
  secondaryCta = "Watch Tour", 
  primaryLink = "/itineraries", 
  secondaryLink = "#", 
  showSearch = true,
}: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Realistic stats for a new travel website
  const stats = [
    {
      value: "12+",
      label: "Destinations Covered",
      description: "Detailed guides & itineraries"
    },
    {
      value: "4.9",
      label: "Content Quality Score",
      description: "Expert-curated by travelers"
    },
    {
      value: "€45",
      label: "Starting From",
      description: "Budget-friendly daily options"
    }
  ];

  return (
    <section className="position-relative overflow-hidden rounded-2 shadow-lg my-4">
      {/* OPTIMIZED BACKGROUND IMAGE */}
      <div className="position-relative hero-container">
        {/* Background Image with Priority Loading */}
        <Image
          src={backgroundImage}
          alt="Beautiful European landscape with mountains and lake"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center 30%',
          }}
          className={`transition-opacity ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAGAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJ//2Q=="
        />
        
        {/* Loading Placeholder */}
        {!imageLoaded && (
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-blue-gray animate-pulse" />
        )}
        
        {/* Gradient Overlays */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-top" />
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark-left" />
        
        {/* CONTENT */}
        <div className="position-relative z-10 h-100 d-flex flex-column justify-content-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center text-white">
                
                {/* Title & Subtitle */}
                <h1 className="display-3 fw-bold mb-4 fade-in-base animate-slide-up">
                  {title}
                </h1>
                <p className="lead fs-3 mb-5 opacity-90 fade-in-base animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  {subtitle}
                </p>
                
                {/* Stats Bar - Updated with realistic data */}
                <div className="d-flex flex-wrap justify-content-center gap-4 mb-5 fade-in-base animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="display-6 fw-bold">{stat.value}</div>
                      <div className="text-white-75">{stat.label}</div>
                      <div className="small text-white-60 mt-1">{stat.description}</div>
                    </div>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="d-flex flex-wrap justify-content-center gap-3 mb-4 fade-in-base animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <Link
                    href={primaryLink}
                    className="btn btn-light btn-lg fw-bold px-5 py-3 rounded-pill d-flex align-items-center"
                  >
                    {primaryCta}
                    <FaChevronRight className="ms-2" />
                  </Link>
                  <Link
                    href={secondaryLink}
                    className="btn btn-outline-light btn-lg px-4 py-3 rounded-pill d-flex align-items-center"
                  >
                    <FaPlay className="me-2" />
                    {secondaryCta}
                  </Link>
                </div>
                
                {/* Scroll Indicator */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
                  <div className="d-flex flex-column align-items-center text-white opacity-75">
                    <span className="small mb-2">Scroll to explore</span>
                    <div className="border border-white rounded-pill p-1">
                      <div className="bg-white rounded-pill bounce-animation" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inline styles for hero container */}
      <style jsx>{`
        .hero-container {
          height: 70vh;
          min-height: 500px;
          max-height: 800px;
        }
        
        @media (max-width: 768px) {
          .hero-container {
            height: 50vh;
            min-height: 400px;
          }
        }
        
        /* Gradient backgrounds */
        .bg-gradient-blue-gray {
          background: linear-gradient(135deg, #f0f8ff 0%, #e4e8f0 100%);
        }
        
        .bg-gradient-dark-top {
          background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
        }
        
        .bg-gradient-dark-left {
          background: linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%);
        }
        
        /* Animations */
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        
        .bounce-animation {
          width: 4px;
          height: 20px;
          animation: bounce 2s infinite;
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        /* Loading animation */
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}