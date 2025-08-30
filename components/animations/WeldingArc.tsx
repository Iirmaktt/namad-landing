'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function WeldingArc() {
  return (
    <div className="relative w-32 h-16 mx-auto">
      <svg
        width="128"
        height="64"
        viewBox="0 0 128 64"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#93C5FD" />
          </linearGradient>
        </defs>
        
        {/* Welding electrode */}
        <motion.line
          x1="10"
          y1="32"
          x2="40"
          y2="32"
          stroke="#374151"
          strokeWidth="3"
          strokeLinecap="round"
        />
        
        {/* Welding arc */}
        <motion.path
          d="M 40 32 Q 60 20 80 32 Q 100 44 118 32"
          fill="none"
          stroke="url(#arcGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: [0, 1, 0.7, 1] }}
          transition={{
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 2, repeat: Infinity, repeatType: "reverse" }
          }}
        />
        
        {/* Sparks */}
        {[...Array(6)].map((_, i) => (
          <motion.circle
            key={i}
            cx={70 + i * 8}
            cy={28 + Math.random() * 8}
            r="1"
            fill="#F59E0B"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              y: [0, -5, -10]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
              repeatType: "loop"
            }}
          />
        ))}
      </svg>
    </div>
  );
}