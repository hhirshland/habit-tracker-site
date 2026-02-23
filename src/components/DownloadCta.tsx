"use client";

import { motion } from "framer-motion";
import StoreBadges from "./StoreBadges";
import ThriveLogo from "./ThriveLogo";

export default function DownloadCta() {
  return (
    <section id="download" className="relative overflow-hidden py-24 md:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary via-primary-dark to-primary" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <div className="absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ThriveLogo className="mx-auto mb-6 h-14 w-14 brightness-200" />
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Start building better habits today
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-white/80">
            Download Thrive for free and take the first step toward a more
            consistent, intentional daily routine.
          </p>
          <StoreBadges className="justify-center" />
        </motion.div>
      </div>
    </section>
  );
}
