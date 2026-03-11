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
  title: "Aria Noor Studio | Photographer Portfolio",
  description:
    "A static photographer portfolio featuring an about section, curated photo showcase, and contact form.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-stone-50 text-stone-950 antialiased transition-colors dark:bg-stone-950 dark:text-stone-50`}
      >
        {children}
      </body>
    </html>
  );
}
