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
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:title" content="Crystal Cheung | UX/UI Designer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.crystalhtc.com/" />
        <meta property="og:image" content="https://www.crystalhtc.com/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:description" content="Crystal Cheung, a UX/UI and graphic designer crafting intuitive, user-centric experiences in web design, app design, branding, and interactive visuals." />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crystal Cheung | UX/UI Designer" />
        <meta name="twitter:description" content="Crystal Cheung, a UX/UI and graphic designer crafting intuitive, user-centric experiences in web design, app design, branding, and interactive visuals." />
        <meta name="twitter:image" content="https://www.crystalhtc.com/logo.svg" />
        <meta name="twitter:site" content="@your_twitter_handle" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
