"use client";

import { motion } from "framer-motion";
import StoreBadges from "./StoreBadges";

const plans = [
  {
    name: "Monthly",
    price: "$12.99",
    period: "/month",
    badge: null,
    description: "Full access, billed monthly.",
  },
  {
    name: "Yearly",
    price: "$99.99",
    period: "/year",
    badge: "Best Value — Save 36%",
    description: "That's just $8.33/month.",
  },
];

const included = [
  "Unlimited habits with flexible scheduling",
  "Apple Health auto-completion",
  "Daily journal & Top 3 priorities",
  "Goals with progress charts",
  "Evening voice check-in call",
  "AI-powered weekly recaps",
  "Streaks, reminders & snooze",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <motion.span
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Pricing
          </motion.span>
          <motion.h2
            className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Start free for{" "}
            <span className="text-primary">7&nbsp;days</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-text-secondary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Full access to everything in Thrive. Cancel anytime.
          </motion.p>
        </div>

        <motion.div
          className="mb-12 grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 ${
                plan.badge
                  ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                  : "border-border bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                  {plan.badge}
                </span>
              )}
              <h3 className="mb-1 text-lg font-bold text-foreground">
                {plan.name}
              </h3>
              <div className="mb-2 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-foreground">
                  {plan.price}
                </span>
                <span className="text-text-secondary">{plan.period}</span>
              </div>
              <p className="text-sm text-text-secondary">{plan.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mb-10 rounded-2xl border border-border bg-white p-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-text-muted">
            Everything included
          </h4>
          <div className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-2.5">
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
                <span className="text-sm text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-center">
          <StoreBadges className="justify-center" />
          <p className="mt-3 text-sm text-text-muted">
            Cancel anytime in the App Store
          </p>
        </div>
      </div>
    </section>
  );
}
