// components/ArticleCard.tsx - CLEAN VERSION (no console.log)
'use client';

import Link from "next/link";
import { PostData } from "@/lib/posts";
import { useState } from "react";

interface ArticleCardProps {
  post: PostData;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // NO console.log statements here
  
  const title = post.title || "Untitled Destination";
  const description = post.description || "Explore this amazing destination";
  const defaultImage = "/images/default.jpg";
  const coverImage = imageError ? defaultImage : (post.cover || post.image || defaultImage);
  const dailyBudget = post.dailyBudget || "€50-80";
  const date = post.date || new Date().toISOString();
  const bestFor = post.bestFor || ["Budget Travelers"];

  return (
    <div className="card h-100 border-0 shadow-soft hover-lift">
      <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
        <img 
          src={coverImage}
          alt={title}
          className="card-img-top w-100 h-100"
          style={{ 
            objectFit: "cover",
            objectPosition: "center"
          }}
          onError={() => setImageError(true)}
          loading="lazy"
        />
        
        <div className="position-absolute top-0 end-0 m-3">
          <span className="badge bg-primary px-3 py-2">
            💶 {dailyBudget}/day
          </span>
        </div>
      </div>
      
      <div className="card-body d-flex flex-column p-4">
        <h5 className="card-title fw-bold mb-2 line-clamp-2">
          {title}
        </h5>
        
        <p className="card-text text-muted flex-grow-1 mb-3 line-clamp-2">
          {description}
        </p>
        
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted small">
              📅 {new Date(date).toLocaleDateString("en-US", { 
                month: "short", 
                day: "numeric",
                year: "numeric"
              })}
            </span>
          </div>
          
          {bestFor.length > 0 && (
            <div className="mb-3">
              <div className="d-flex flex-wrap gap-1">
                {bestFor.slice(0, 3).map((tag, index) => (
                  <span key={index} className="badge bg-light text-dark border small">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
          
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