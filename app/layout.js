import { Geist, Geist_Mono } from "next/font/google";
import { useGSAP } from "@gsap/react";
import "./globals.css";
import gsap from "gsap";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

gsap.registerPlugin(useGSAP);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
