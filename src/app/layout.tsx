import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full  bg-primary">
      <link rel="icon" href="/favicon.png" />
      <body className="h-full">{children}</body>
    </html>
  );
}
