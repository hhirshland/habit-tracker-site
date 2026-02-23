"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Thrive finally made habit tracking simple. I love that it syncs with my Apple Watch automatically.",
  },
  {
    name: "James K.",
    rating: 5,
    text: "The streak tracking keeps me going. 45 days in and I haven't missed a workout.",
  },
  {
    name: "Priya R.",
    rating: 5,
    text: "The daily journal feature is a game-changer. I actually look forward to reflecting on my day.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-yellow-400"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function SocialProof() {
  return (
    <section id="reviews" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <motion.span
            className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Reviews
          </motion.span>
          <motion.h2
            className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Loved by people building{" "}
            <span className="text-primary">better habits</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              className="rounded-2xl border border-border bg-background p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Stars count={review.rating} />
              <p className="mt-4 mb-5 text-sm leading-relaxed text-text-secondary">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  {review.name[0]}
                </div>
                <span className="text-sm font-semibold text-foreground">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
