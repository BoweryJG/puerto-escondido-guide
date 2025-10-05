import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Puerto Escondido Guide - For Jennifer Sweenie",
  description: "A personalized nutrition and wellness guide to Puerto Escondido, Oaxaca. Organic markets, farm-to-table dining, traditional cuisine, and holistic experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-amber-50`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
