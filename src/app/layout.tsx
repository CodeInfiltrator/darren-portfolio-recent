import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Frizzia Darren | Portfolio",
  description:
    "Personal portfolio of Frizzia Darren, a Computer Science student, iOS learner, web developer, and product builder.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any"
      },
      {
        url: "/icon.png",
        type: "image/png",
        sizes: "512x512"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ],
    shortcut: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}