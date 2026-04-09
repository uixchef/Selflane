import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selflane — Launch a personal site that wins opportunities",
  description:
    "Whether you're a designer, developer, or creator, Selflane helps you stand out with a site that feels professional, and you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-black antialiased">{children}</body>
    </html>
  );
}
