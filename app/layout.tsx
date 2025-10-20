import type { Metadata } from "next";
import { Geist, Geist_Mono, Playpen_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playpen = Playpen_Sans({
  variable: "--font-feline-accent",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Whisker Weekly | Newsletter for Discerning Cats",
  description:
    "Whisker Weekly is a paws-itively curated newsletter brimming with sunbeam forecasts, nap strategies, and gourmet kibble reviews for cats only.",
  keywords: [
    "cat newsletter",
    "feline lifestyle",
    "whisker weekly",
    "meow mail",
    "cat content",
  ],
  authors: [{ name: "Captain Whiskers" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playpen.variable} antialiased bg-sand`}
      >
        {children}
      </body>
    </html>
  );
}
