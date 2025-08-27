import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Silambarasu Arunkumaravel | Full Stack Developer",
  description: "Innovative Full Stack Developer with 3+ years experience in React, Next.js, Node.js. Expert in JavaScript, TypeScript, MongoDB, and cloud deployment. Based in Bangalore, India.",
  keywords: "silambarasu arunkumaravel, full stack developer, react developer, nextjs, nodejs, javascript, typescript, mongodb, bangalore developer, starlight music, web developer",
  authors: [{ name: "Silambarasu Arunkumaravel" }],
  creator: "Silambarasu Arunkumaravel",
  publisher: "Silambarasu Arunkumaravel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg'
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_PORTFOLIO_URL,
    siteName: "Silambarasu Arunkumaravel Portfolio",
    title: "Silambarasu Arunkumaravel | Full Stack Developer",
    description: "Innovative Full Stack Developer with 3+ years experience in React, Next.js, Node.js. Expert in JavaScript, TypeScript, MongoDB, and cloud deployment.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Silambarasu Arunkumaravel Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Silambarasu Arunkumaravel | Full Stack Developer",
    description: "Innovative Full Stack Developer with 3+ years experience in React, Next.js, Node.js. Expert in JavaScript, TypeScript, MongoDB, and cloud deployment.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
