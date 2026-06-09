import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CursorSpotlight } from "@/components/ui/cursor-spotlight";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavi's KI Werkstatt — KI-Lösungen für dein Business",
  description:
    "KI Agentur für Webseiten, Apps, Beratung und Automatisierung. Intelligente Lösungen für KMUs und Selbstständige — praxisnah und schnell umgesetzt.",
  keywords: ["KI Agentur", "Automatisierung", "KI Beratung", "Webentwicklung", "Apps"],
  openGraph: {
    title: "Mavi's KI Werkstatt",
    description:
      "Wir automatisieren deine Prozesse mit modernster KI-Technologie. Intelligente Lösungen für dein Business.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth scroll-pt-16`}
    >
      <body className="min-h-full flex flex-col cursor-none">
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
