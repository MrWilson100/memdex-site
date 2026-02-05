import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const memdexHero = localFont({
  src: "../fonts/MemDexHero.ttf",
  variable: "--font-memdex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MEMDEX - Automated Portfolio",
  description: "Automate Your Portfolio with Cutting-Edge Technology. AI-Assisted, Decentralized, Multi-Sector, Cross-Chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${memdexHero.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
