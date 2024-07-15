import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import local from "next/font/local";

const sf = local({ src: '../fonts/SF-Pro-Rounded-Bold.otf' })

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delivery UI",
  description: "Delivery UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sf.className} 'max-w-96' text-7xl font-extrabold`}>{children}</body>
    </html>
  );
}
