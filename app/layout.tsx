import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BootstrapClient from "../components/BootstrapClient";
import HomeBodyLogo from "../components/HomeBodyLogo";
import BackHomeButton from "../components/BackHomeButton";

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: {
    default: "Ishmael L. Mafole | Full-Stack & Systems-Aware Developer",
    template: "%s | Ishmael L. Mafole"
  },
  description:
    "Portfolio of Ishmael L. Mafole, a full-stack and systems-aware software developer, photographer, and videographer focused on secure platforms and cinematic storytelling.",
  keywords: [
    "Full-stack developer",
    "Systems engineering",
    "Software architecture",
    "Photographer",
    "Videographer",
    "UX/UI design",
    "South Africa"
  ],
  openGraph: {
    title: "Ishmael L. Mafole | Full-Stack & Systems-Aware Developer",
    description:
      "Structured systems, secure platforms, and visual stories -- where engineering meets creativity.",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Ishmael L. Mafole portfolio"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${monoFont.variable}`}>
        <BootstrapClient />
        <HomeBodyLogo />
        <Navbar />
        <main>{children}</main>
        <BackHomeButton />
        <Footer />
      </body>
    </html>
  );
}
