"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    eyebrow: "01",
    title: "Track Without Thinking",
    description:
      "Flexible scheduling, Apple Health auto-completion, and one-tap check-offs mean tracking takes seconds — not minutes.",
    features: [
      "Custom habits with daily or weekly frequency",
      "Apple Health syncs steps, weight, heart rate & more",
      "Snooze without breaking your streak",
      "Streak tracking to keep momentum",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    eyebrow: "02",
    title: "Reflect and Grow",
    description:
      "Daily journaling, Top 3 priorities, and goal tracking with real data so you see the bigger picture.",
    features: [
      "Win, tension, and gratitude journal prompts",
      "Top 3 daily priorities alongside habits",
      "Health & fitness goals with charts",
      "Apple Health or manual progress logging",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    eyebrow: "03",
    title: "AI That Knows You",
    description:
      "Personalized weekly recaps and a nightly voice check-in powered by AI — like a coach who actually knows your data.",
    features: [
      "Evening voice check-in logs everything hands-free",
      "AI weekly recaps with trends and suggestions",
      "Personalized nudges based on your patterns",
      "Celebrate wins and spot opportunities to improve",
    ],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <motion.span
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Features
          </motion.span>
          <motion.h2
            className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything you need to build{" "}
            <span className="text-primary">lasting habits</span>
          </motion.h2>
        </div>

        <motion.div
          className="grid gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className="group rounded-2xl border border-border bg-background p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              variants={cardVariants}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  {pillar.icon}
                </div>
                <span className="font-mono text-sm font-bold text-primary">
                  {pillar.eyebrow}
                </span>
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">
                {pillar.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
              <ul className="space-y-2.5">
                {pillar.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-success"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
