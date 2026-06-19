import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mekark Electronics — Precision Electronics Manufacturing & Solutions",
  description:
    "Mekark Electronics delivers end-to-end electronics manufacturing services — from PCB design and prototyping to full-scale production. Trusted by industry leaders for quality, speed, and reliability.",
  icons: {
    icon: "/Images/LogoMekark.png",
    shortcut: "/Images/LogoMekark.png",
    apple: "/Images/LogoMekark.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  );
}