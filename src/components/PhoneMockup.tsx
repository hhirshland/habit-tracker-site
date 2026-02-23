"use client";

import { ReactNode } from "react";

export default function PhoneMockup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative mx-auto w-[280px] rounded-[3rem] border-[8px] border-gray-900 bg-gray-900 shadow-2xl">
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-900" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.4rem] bg-white">
          <div className="aspect-[9/19.5]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
