"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const steps = [
  {
    step: "01",
    title: "Set up your habits",
    description:
      "Add the habits that matter to you. Choose how often, which days, and whether to link them to Apple Health metrics.",
    screen: (
      <div className="flex h-full flex-col bg-gradient-to-b from-[#F8F9FA] to-white p-5 pt-10">
        <div className="mb-1 text-xs font-semibold text-primary">GETTING STARTED</div>
        <div className="mb-5 text-lg font-bold text-foreground">Add Your Habits</div>
        {["Morning Meditation", "Exercise", "Read"].map((name, i) => (
          <div key={i} className="mb-3 rounded-xl border border-border bg-white p-3.5">
            <div className="mb-1 text-xs font-semibold text-foreground">{name}</div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 flex-1 rounded-full bg-border">
                <div
                  className="h-1.5 rounded-full bg-primary"
                  style={{ width: `${(i + 1) * 30}%` }}
                />
              </div>
              <span className="text-[10px] font-medium text-text-muted">
                {i + 3}x / week
              </span>
            </div>
          </div>
        ))}
        <div className="mt-auto flex items-center justify-center rounded-xl bg-primary py-3">
          <span className="text-xs font-bold text-white">+ Add Habit</span>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    title: "Track daily",
    description:
      "Check off habits as you complete them. Swipe to snooze if needed. Your streak grows every day you show up.",
    screen: (
      <div className="flex h-full flex-col bg-gradient-to-b from-[#F8F9FA] to-white p-5 pt-10">
        <div className="mb-1 flex items-center gap-2">
          <span className="text-xs font-semibold text-text-muted">MONDAY</span>
          <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold text-primary">
            🔥 12
          </span>
        </div>
        <div className="mb-4 text-lg font-bold text-foreground">Today</div>

        {/* Calendar strip */}
        <div className="mb-4 flex justify-between">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <div key={i} className={`flex flex-col items-center gap-1 ${i === 0 ? "" : ""}`}>
              <span className="text-[9px] font-medium text-text-muted">{d}</span>
              <div className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${
                i === 0
                  ? "bg-primary text-white"
                  : "text-foreground"
              }`}>
                {17 + i}
              </div>
            </div>
          ))}
        </div>

        {[
          { name: "Morning Meditation", done: true },
          { name: "Exercise 30 min", done: true },
          { name: "Read 20 pages", done: false },
          { name: "Drink 8 glasses", done: false },
        ].map((h, i) => (
          <div key={i} className={`mb-2 flex items-center gap-3 rounded-xl px-3 py-2.5 ${
            h.done ? "bg-primary/10" : "border border-border bg-white"
          }`}>
            <div className={`h-4 w-4 rounded-full border-2 ${
              h.done ? "border-primary bg-primary" : "border-border"
            }`}>
              {h.done && (
                <svg className="h-full w-full p-0.5" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <span className={`text-[11px] font-medium ${h.done ? "text-primary line-through" : "text-foreground"}`}>
              {h.name}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    step: "03",
    title: "See your progress",
    description:
      "Review weekly adherence, track health metrics, and watch your consistency grow over time.",
    screen: (
      <div className="flex h-full flex-col bg-gradient-to-b from-[#F8F9FA] to-white p-5 pt-10">
        <div className="mb-1 text-xs font-semibold text-text-muted">THIS WEEK</div>
        <div className="mb-5 text-lg font-bold text-foreground">Progress</div>

        {/* Overall */}
        <div className="mb-4 rounded-xl bg-primary/10 p-3.5">
          <div className="mb-1 text-[10px] font-semibold text-primary">WEEKLY ADHERENCE</div>
          <div className="text-2xl font-extrabold text-primary">87%</div>
          <div className="mt-2 h-2 rounded-full bg-white">
            <div className="h-2 rounded-full bg-primary" style={{ width: "87%" }} />
          </div>
        </div>

        {/* Habits breakdown */}
        {[
          { name: "Meditation", pct: 100 },
          { name: "Exercise", pct: 85 },
          { name: "Reading", pct: 71 },
        ].map((h, i) => (
          <div key={i} className="mb-2.5 rounded-xl border border-border bg-white p-3">
            <div className="mb-1.5 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-foreground">{h.name}</span>
              <span className="text-[10px] font-bold text-primary">{h.pct}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-border">
              <div
                className="h-1.5 rounded-full bg-primary transition-all"
                style={{ width: `${h.pct}%` }}
              />
            </div>
          </div>
        ))}

        {/* Health metric */}
        <div className="mt-auto rounded-xl border border-border bg-white p-3">
          <div className="mb-1 text-[10px] font-semibold text-text-muted">STEPS TODAY</div>
          <div className="text-lg font-extrabold text-foreground">8,432</div>
          <div className="flex items-center gap-4 pt-1">
            {[3, 5, 4, 7, 6, 8, 5].map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center">
                <div className="w-full rounded-sm bg-secondary/30" style={{ height: `${v * 3}px` }}>
                  <div className="w-full rounded-sm bg-secondary" style={{ height: `${v * 2}px` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function AppShowcase() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <motion.span
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.span>
          <motion.h2
            className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Three steps to a{" "}
            <span className="text-primary">better routine</span>
          </motion.h2>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-20 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1">
                <span className="mb-3 inline-block font-mono text-sm font-bold text-primary">
                  {step.step}
                </span>
                <h3 className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl">
                  {step.title}
                </h3>
                <p className="max-w-md text-lg leading-relaxed text-text-secondary">
                  {step.description}
                </p>
              </div>
              <div className="flex-shrink-0">
                <PhoneMockup>{step.screen}</PhoneMockup>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
