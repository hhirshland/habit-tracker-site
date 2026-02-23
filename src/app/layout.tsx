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
  title: "Thrive — Win Your Day",
  description:
    "Build lasting habits, track your streaks, and see real progress. Thrive helps you stay consistent with flexible scheduling, Apple Health integration, daily journaling, and more.",
  keywords: [
    "habit tracker",
    "daily habits",
    "streak tracker",
    "Apple Health",
    "productivity",
    "goal tracking",
  ],
  openGraph: {
    title: "Thrive — Win Your Day",
    description:
      "Build lasting habits, track your streaks, and see real progress.",
    type: "website",
    siteName: "Thrive",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thrive — Win Your Day",
    description:
      "Build lasting habits, track your streaks, and see real progress.",
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
