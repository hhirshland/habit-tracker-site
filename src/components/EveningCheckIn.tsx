"use client";

import { motion } from "framer-motion";

export default function EveningCheckIn() {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-0 opacity-30">
        <div className="absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary-light">
              Evening Check-In
            </span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Thrive calls you{" "}
              <span className="bg-gradient-to-r from-primary-light to-secondary bg-clip-text text-transparent">
                every night.
              </span>
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-white/70">
              A 3-minute voice conversation that logs your journal, reviews your
              priorities, and checks off your habits. No typing. No screens.
              No missed days.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {["Voice-powered", "Logs automatically", "Fully personalized"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative mx-auto w-[280px] rounded-[3rem] border-[8px] border-gray-800 bg-gray-800 shadow-2xl">
              <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-gray-800" />
              <div className="relative overflow-hidden rounded-[2.4rem] bg-[#1A1A2E]">
                <div className="aspect-[9/19.5]">
                  <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-light">
                        <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>

                    <p className="mb-1 text-xs text-white/50">Incoming call</p>
                    <p className="mb-6 text-lg font-bold text-white">Thrive Check-In</p>

                    <div className="mb-8 space-y-3 w-full">
                      {[
                        { icon: "✍️", text: "Journal your win & gratitude" },
                        { icon: "✅", text: "Review today's habits" },
                        { icon: "🎯", text: "Set tomorrow's priorities" },
                      ].map((item) => (
                        <div key={item.text} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-2.5">
                          <span className="text-sm">{item.icon}</span>
                          <span className="text-xs font-medium text-white/70">{item.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-6">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/20">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-400">
                          <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      </div>
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
