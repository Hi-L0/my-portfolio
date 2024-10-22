import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollProvider } from "./contexts/scrollProvider";
import 'rsuite/dist/rsuite.min.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hamza Laaroussi's Portfolio",
  description: "Full Stack Developer specializing in Laravel, React, and Next.js with 2+ years of professional experience. Expert in developing innovative web solutions, SaaS platforms, and custom CMS systems. Portfolio showcasing projects in hospitality, logistics, and sustainability sectors.",
  keywords:"Full Stack Developer, Laravel Developer, React Developer, Next.js Developer, Web Development Morocco, SaaS Development, Hotel CMS, Logistics Software, PHP Developer, JavaScript Developer"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollProvider>
          <div>
            {/* <SpotlightEffect/> */}
            {/* <FixedSection/> */}
            {children}
          </div>
        </ScrollProvider>
        {/* <h1>Hello this is a test to this layout stuff </h1> */}
      </body>
    </html>
  );
}
