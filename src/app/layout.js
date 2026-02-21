import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Crystal Cheung | UX/UI Designer & Graphic Designer",
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
        <meta property="og:image" content="https://www.crystalhtc.com/linkedin-share.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:description" content="Crystal Cheung, a UX/UI and graphic designer crafting intuitive, user-centric experiences in web design, app design, branding, and interactive visuals." />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Crystal Cheung | UX/UI Designer" />
        <meta name="twitter:description" content="Crystal Cheung, a UX/UI and graphic designer crafting intuitive, user-centric experiences in web design, app design, branding, and interactive visuals." />
        <meta name="twitter:image" content="https://www.crystalhtc.com/linkedin-share.png" />
        <meta name="twitter:site" content="@your_twitter_handle" />
      </head>
      
      <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BH7EJSH99N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BH7EJSH99N');
          `}
        </Script>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
