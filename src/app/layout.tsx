import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { JetBrains_Mono } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Roupen Minassian",
  description: "I design intelligent systems.",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
