"use client";

import { motion } from "framer-motion";

const painPoints = [
  {
    problem: "Too easy to ignore",
    solution: "Thrive calls you every evening for a 3-minute check-in. Smart reminders meet you where you are.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        <line x1="12" y1="2" x2="12" y2="5" />
      </svg>
    ),
  },
  {
    problem: "No real accountability",
    solution: "AI-powered weekly recaps that know your data — celebrate wins, spot trends, and nudge you forward.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
  },
  {
    problem: "Doesn't fit your life",
    solution: "Flexible scheduling, snooze without guilt, and Apple Health auto-completion so tracking takes seconds.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        <polyline points="9 10 12 13 15 10" />
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

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <motion.span
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Sound familiar?
          </motion.span>
          <motion.h2
            className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            You&rsquo;ve tried habit trackers before.{" "}
            <span className="text-primary">Here&rsquo;s why this one sticks.</span>
          </motion.h2>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {painPoints.map((item) => (
            <motion.div
              key={item.problem}
              className="rounded-2xl border border-border bg-white p-7"
              variants={cardVariants}
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                &ldquo;{item.problem}&rdquo;
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {item.solution}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
