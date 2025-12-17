// components/ArticleCard.tsx - UPDATED FOR CONSISTENT HEIGHT
'use client';

import Link from "next/link";
import { PostData } from "@/lib/posts";
import { useState } from "react";

interface ArticleCardProps {
  post: PostData;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const [imageError, setImageError] = useState(false);
  
  const title = post.title || "Untitled Destination";
  const description = post.description || "Explore this amazing destination";
  const defaultImage = "/images/default.jpg";
  const coverImage = imageError ? defaultImage : (post.cover || post.image || defaultImage);
  const dailyBudget = post.dailyBudget || "€50-80";
  const date = post.date || new Date().toISOString();
  const bestFor = post.bestFor || ["Budget Travelers"];

  return (
    <div className="card h-100 border-0 shadow-soft hover-lift destination-card">
      {/* Image section with fixed height */}
      <div className="card-img-container position-relative overflow-hidden">
        <img 
          src={coverImage}
          alt={title}
          className="card-img-top w-100 h-100"
          style={{ 
            objectFit: "cover",
            objectPosition: "center",
            height: "200px" // Fixed height for all images
          }}
          onError={() => setImageError(true)}
          loading="lazy"
        />
        
        {/* Budget badge */}
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-primary px-3 py-2">
            💶 {dailyBudget}/day
          </span>
        </div>
      </div>
      
      {/* Card body with flex column for equal height */}
      <div className="card-body d-flex flex-column p-4">
        {/* Title with fixed min-height */}
        <h5 className="card-title fw-bold mb-2 line-clamp-2" style={{ minHeight: "56px" }}>
          {title}
        </h5>
        
        {/* Description with fixed min-height */}
        <p className="card-text text-muted flex-grow-1 mb-3 line-clamp-2" style={{ minHeight: "48px" }}>
          {description}
        </p>
        
        {/* Bottom section that pushes button to bottom */}
        <div className="mt-auto">
          {/* Tags section */}
          {bestFor.length > 0 && (
            <div className="mb-3">
              <div className="d-flex flex-wrap gap-1">
                {bestFor.slice(0, 2).map((tag, index) => (
                  <span key={index} className="badge bg-light text-dark border small">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {/* Date */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted small">
              📅 {new Date(date).toLocaleDateString("en-US", { 
                month: "short", 
                day: "numeric",
                year: "numeric"
              })}
            </span>
          </div>
          
          {/* Button always at bottom */}
          <Link 
            href={`/destinations/${post.slug}`} 
            className="btn btn-primary w-100 fw-semibold"
          >
            Read Full Guide
          </Link>
        </div>
      </div>
    </div>
  );
}