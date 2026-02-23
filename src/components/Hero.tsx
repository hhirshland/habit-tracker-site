"use client";

import { motion } from "framer-motion";
import StoreBadges from "./StoreBadges";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-40">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Copy */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Build Better Habits
            </span>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Win your <br />
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                day.
              </span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-text-secondary md:text-xl">
              Thrive helps you build lasting habits with flexible scheduling,
              streak tracking, Apple Health integration, and daily reflection
              &mdash; all in one beautiful app.
            </p>
            <StoreBadges />
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PhoneMockup>
              <div className="flex h-full flex-col bg-gradient-to-b from-[#F8F9FA] to-white p-5 pt-10">
                <div className="mb-1 text-xs font-semibold text-text-muted">TODAY</div>
                <div className="mb-4 text-lg font-bold text-foreground">Daily Habits</div>

                {[
                  { name: "Morning Meditation", done: true },
                  { name: "Exercise 30 min", done: true },
                  { name: "Read 20 pages", done: false },
                  { name: "Drink 8 glasses water", done: false },
                  { name: "Journal", done: false },
                ].map((habit, i) => (
                  <div
                    key={i}
                    className={`mb-2.5 flex items-center gap-3 rounded-xl px-3.5 py-3 ${
                      habit.done
                        ? "bg-primary/10"
                        : "border border-border bg-white"
                    }`}
                  >
                    <div
                      className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                        habit.done
                          ? "border-primary bg-primary"
                          : "border-border"
                      }`}
                    >
                      {habit.done && (
                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                          <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        habit.done ? "text-primary line-through" : "text-foreground"
                      }`}
                    >
                      {habit.name}
                    </span>
                  </div>
                ))}

                <div className="mt-auto flex items-center justify-center gap-1.5 rounded-xl bg-primary/5 py-2">
                  <span className="text-sm">🔥</span>
                  <span className="text-xs font-bold text-primary">12 day streak</span>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
