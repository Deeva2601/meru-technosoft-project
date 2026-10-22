import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Raivatedu — learn with working mentors",
    template: "%s · Raivatedu",
  },
  description:
    "Live courses in web, data, design, careers and entrance exams. Small batches, Indian mentors, weekday evenings.",
  openGraph: {
    title: "Raivatedu — learn with working mentors",
    description:
      "Live courses in web, data, design, careers and entrance exams. Small batches, Indian mentors, weekday evenings.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
