"use client";

import { motion } from "framer-motion";

const signals = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    label: "5.0 on the App Store",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    label: "Free 7-day trial",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    label: "Built for iPhone + Apple Watch",
  },
];

export default function SocialProofBar() {
  return (
    <motion.div
      className="border-y border-border bg-white py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-6 md:gap-12">
        {signals.map((signal) => (
          <div key={signal.label} className="flex items-center gap-2.5">
            {signal.icon}
            <span className="text-sm font-medium text-text-secondary">
              {signal.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
