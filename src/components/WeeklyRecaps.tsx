"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

export default function WeeklyRecaps() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse lg:gap-20">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              AI-Powered Recaps
            </span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
              Your personal coach,{" "}
              <span className="text-primary">powered&nbsp;by&nbsp;AI.</span>
            </h2>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-text-secondary">
              Every Sunday, get a personalized recap that celebrates your wins,
              spots patterns in your data, and gives you actionable suggestions
              for the week ahead.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              {[
                { label: "Habit trends", icon: "📊" },
                { label: "Win highlights", icon: "🏆" },
                { label: "Smart suggestions", icon: "💡" },
                { label: "Goal progress", icon: "🎯" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-background p-3"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <PhoneMockup>
              <div className="flex h-full flex-col bg-gradient-to-b from-[#F8F9FA] to-white p-5 pt-10">
                <div className="mb-1 text-xs font-semibold text-primary">WEEKLY RECAP</div>
                <div className="mb-4 text-lg font-bold text-foreground">Mar 3 &ndash; Mar 9</div>

                <div className="mb-3 rounded-xl bg-primary/10 p-3.5">
                  <div className="mb-1 text-[10px] font-semibold text-primary">OVERALL SCORE</div>
                  <div className="text-2xl font-extrabold text-primary">87%</div>
                  <div className="mt-1 text-[10px] text-primary/70">+5% from last week</div>
                </div>

                <div className="mb-3 rounded-xl border border-border bg-white p-3">
                  <div className="mb-2 text-[10px] font-semibold text-text-muted">TOP WIN</div>
                  <p className="text-[11px] leading-relaxed text-foreground">
                    You meditated every single day this week &mdash; your longest streak yet at 23 days!
                  </p>
                </div>

                <div className="mb-3 rounded-xl border border-border bg-white p-3">
                  <div className="mb-2 text-[10px] font-semibold text-text-muted">TREND</div>
                  <p className="text-[11px] leading-relaxed text-foreground">
                    Your exercise consistency drops on Wednesdays. Try a shorter workout that day.
                  </p>
                </div>

                <div className="mt-auto rounded-xl border border-border bg-white p-3">
                  <div className="mb-2 text-[10px] font-semibold text-text-muted">SUGGESTION</div>
                  <p className="text-[11px] leading-relaxed text-foreground">
                    Add a &ldquo;wind-down&rdquo; habit before bed to boost journal consistency.
                  </p>
                </div>
              </div>
            </PhoneMockup>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
