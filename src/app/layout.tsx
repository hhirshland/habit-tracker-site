import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Thrive — AI-Powered Habit Tracker for iPhone",
  description:
    "Build lasting habits with zero friction. Thrive features AI weekly recaps, an evening voice check-in call, Apple Health auto-completion, daily journaling, and streak tracking. Start your free 7-day trial.",
  keywords: [
    "habit tracker",
    "AI habit tracker",
    "daily habits",
    "streak tracker",
    "Apple Health",
    "evening check-in",
    "voice accountability",
    "weekly recaps",
    "daily journal",
    "goal tracking",
    "productivity",
    "habit app iPhone",
  ],
  openGraph: {
    title: "Thrive — AI-Powered Habit Tracker for iPhone",
    description:
      "Your habits shouldn't need willpower. Smart tracking, AI accountability, and zero friction. Free for 7 days.",
    type: "website",
    siteName: "Thrive",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thrive — AI-Powered Habit Tracker for iPhone",
    description:
      "Your habits shouldn't need willpower. Smart tracking, AI accountability, and zero friction. Free for 7 days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
