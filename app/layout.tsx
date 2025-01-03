import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Badespeak.net - Public TeamSpeak Server",
  description: "Get your free channel today! 24/7 DDoS Protection",
  openGraph: {
    title: "Badespeak.net - Public TeamSpeak Server",
    description: "Get your free channel today! 24/7 DDoS Protection",
    url: 'https://Badespeak.net',
    siteName: 'Badespeak.net',
    images: [
      {
        url: 'LOGO.png',
        width: 100,
        height: 100,
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#f5284a" />
      </head>
      <SpeedInsights />
      <body className={inter.className}>
        <div className="relative">
          <Header />
          {children}
          <BackgroundBeams /> {/* Background stays in the background */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
