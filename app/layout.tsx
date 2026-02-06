import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdalla Omran | Full-Stack Developer & Video Editor",
  description:
    "Portfolio of Abdalla Omran, a specialized Full-Stack Developer and Video Editor creating modern web experiences and cinematic content.",
  verification: {
    google: "hlHSbQJzQ4VDUcjMonNN_7QiWcxdSefIYRkBV96LT4w",
  },
  openGraph: {
    title: "Abdalla Omran | Full-Stack Developer & Video Editor",
    description:
      "Explore the portfolio of Abdalla Omran, showcasing web development skills, interactive animations, and professional video editing.",
    url: "https://omranfolio.vercel.app",
    siteName: "Abdalla Omran Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Abdalla Omran Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdalla Omran | Full-Stack Developer & Video Editor",
    description:
      "Portfolio of Abdalla Omran, Full-Stack Developer & Video Editor.",
    images: ["/profile.png"],
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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
