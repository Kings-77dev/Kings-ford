import type { Metadata } from "next";
import { DM_Sans, Newsreader, Space_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/fx/SmoothScroll";
import Cursor from "@/components/fx/Cursor";
import Magnetics from "@/components/fx/Magnetics";
import ScrollProgress from "@/components/layout/ScrollProgress";
import StickyTalk from "@/components/layout/StickyTalk";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingsford.example"),
  title: "Kings Ford®: Digital design & frontend",
  description:
    "A digital product designer and frontend developer based in The Hague. I research, design, and build products that solve meaningful problems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${newsreader.variable} ${spaceMono.variable}`}
    >
      <body>
        <ScrollProgress />
        <SmoothScroll />
        {children}
        <StickyTalk />
        <Cursor />
        <Magnetics />
      </body>
    </html>
  );
}
