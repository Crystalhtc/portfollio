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

export const metadata = {
  title: "Crystal Cheung | UX/UI Designer",
  description: "Crystal Cheung, a UX/UI and graphic designer crafting intuitive, user-centric experiences in web design, app design, branding, and interactive visuals.",
  icons: {
    icon: '/favicon.ico', 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" sizes="any" /></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
