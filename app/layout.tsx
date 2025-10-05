import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Puerto Escondido Guide - For Jennifer Sweenie | 🌮🏖️",
  description: "Your personalized nutrition and wellness guide to Puerto Escondido, Oaxaca. Organic markets, farm-to-table dining, traditional Oaxacan cuisine, beach vibes, and holistic experiences. ¡Bienvenida!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pacifico.variable} font-sans antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
