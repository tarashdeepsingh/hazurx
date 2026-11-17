import type { Metadata, Viewport } from "next";
import { Inter_Tight, Inter, JetBrains_Mono, Noto_Sans_Gurmukhi } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollUI from "@/components/ScrollUI";
import SceneLoader from "@/components/SceneLoader";

const display = Inter_Tight({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"] });
const body = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["300", "400", "500"] });
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400"] });
const gurmukhi = Noto_Sans_Gurmukhi({ variable: "--font-gurmukhi", subsets: ["gurmukhi"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "HAZURX · End-to-end software & product engineering",
  description:
    "HAZURX is a founder-led software studio. One accountable team from requirements and design to development, deployment and support. Inspired by roots. Built for the future.",
  openGraph: {
    title: "HAZURX",
    description: "Inspired by roots. Built for the future.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#07070a" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${gurmukhi.variable}`}>
      <body>
        <SmoothScroll />
        <Intro />
        <Cursor />
        <SceneLoader />
        <Nav />
        <ScrollUI />
        <div className="relative z-10">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
