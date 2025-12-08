// components/AnimatedCard.tsx
'use client'
import { useState } from 'react';
import Image from 'next/image';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedCard({ children, className = '' }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`card ${className}`}
      style={{
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}