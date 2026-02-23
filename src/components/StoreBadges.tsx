"use client";

const TESTFLIGHT_URL = "https://testflight.apple.com/join/NGmKAzN3";

export default function StoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <a
        href={TESTFLIGHT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-105"
      >
        <svg width="135" height="40" viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg">
          <rect width="135" height="40" rx="5" fill="#000" />
          <text x="67.5" y="15" fill="#fff" fontSize="8" fontFamily="sans-serif" textAnchor="middle">
            Download on the
          </text>
          <text x="67.5" y="29" fill="#fff" fontSize="14" fontWeight="600" fontFamily="sans-serif" textAnchor="middle">
            App Store
          </text>
          <g transform="translate(15, 10)" fill="#fff">
            <path d="M4.5 0C2 0 0 2 0 4.5S2 9 4.5 9 9 7 9 4.5 7 0 4.5 0zM7 6.5l-1 1.5L4.5 5 3 8 2 6.5 4.5 1.5 7 6.5z" transform="scale(1.8)" />
          </g>
        </svg>
      </a>
    </div>
  );
}
