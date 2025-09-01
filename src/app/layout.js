import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundAnimation from "../components/BackgroundAnimation";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Capgemini - The Agentic Enterprise",
  description: "Project Synapse: Leading the new era of autonomous AI with verifiable trust",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full text-white overflow-x-hidden`}
      >
        <BackgroundAnimation />
        <Navbar/>
        <div className="min-h-full relative backdrop-blur-sm">
          {children}
        </div>
      </body>
    </html>
  );
}
