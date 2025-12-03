import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul Tiwari | Software Engineer",
  description: "Rahul Tiwari – Full-stack Software Engineer specializing in React, JavaScript, TypeScript, Next.js, Java, Spring Boot and cloud-native systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#EAF6F6] text-slate-700 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
