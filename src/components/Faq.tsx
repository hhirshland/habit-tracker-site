"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Is it really free to start?",
    answer:
      "Yes! You get a full 7-day free trial with access to every feature. If you love it, choose a monthly or yearly plan to keep going.",
  },
  {
    question: "How is Thrive different from other habit apps?",
    answer:
      "Three things set Thrive apart: an AI-powered evening voice check-in that logs your habits and journal hands-free, personalized weekly recaps that spot trends in your data, and seamless Apple Health integration that auto-completes habits from your real health metrics.",
  },
  {
    question: "What if I miss a day?",
    answer:
      "Life happens. You can snooze any habit without breaking your streak — no guilt, no punishment. Thrive is designed to be flexible, not rigid.",
  },
  {
    question: "Does it work with Apple Watch?",
    answer:
      "Yes! Thrive integrates with Apple Health, which syncs data from your Apple Watch. Steps, workouts, heart rate, and more flow into Thrive automatically.",
  },
  {
    question: "What happens to my data?",
    answer:
      "Your data stays yours. We never sell personal data, and health data from Apple HealthKit is never shared with third parties. Check out our privacy policy for full details.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Absolutely. You can cancel your subscription at any time through your Apple ID settings or the App Store. Cancellation takes effect at the end of your current billing period.",
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base font-semibold text-foreground pr-4">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`shrink-0 text-text-muted transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-text-secondary">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <motion.span
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            FAQ
          </motion.span>
          <motion.h2
            className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Common questions
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
