import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { MegaMenuProvider } from "./contexts/MegaMenuContext";
import MegaMenuOverlay from "./components/MegaMenuOverlay";
import SmoothScroll from "./components/SmoothScroll";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Expand Marketing",
  description: "Expand",
  icons: {
    icon: '/favicon.ico',
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
        className={`${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <MegaMenuProvider>
          <MegaMenuOverlay />
          {children}
        </MegaMenuProvider>
      </body>
    </html>
  );
}
