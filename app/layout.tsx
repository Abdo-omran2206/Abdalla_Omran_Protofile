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
  title: "Abdalla_Omran_Protofile",
  description:
    "Protofile of Abdalla Omran, a junior web developer and media student at Helwan University.",
  openGraph: {
    title: "Abdalla_Omran_Protofile",
    description:
      "Explore the portfolio of Abdalla Omran, showcasing web development skills and media expertise.",
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: { url: "/favicon.svg", type: "image/svg+xml" },
    shortcut: { url: "/favicon.svg", type: "image/svg+xml" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
