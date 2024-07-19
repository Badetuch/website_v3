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
  description: "Badespeak.net - Get your free channel today!",
  openGraph: {
    title: "Badespeak.net - Public TeamSpeak Server",
    description: "Badespeak.net - Get your free channel today!",
    url: 'https://Badespeak.net',
    siteName: 'Badespeak.net',
    images: [
      {
        url: 'LOGO.png',
        width: 500,
        height: 500,
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
      <SpeedInsights/>
      <body className={inter.className}>
      <div>
      <BackgroundBeams/>
      <Header/>
      {children}
      <Footer/>
      </div>
      </body>
    </html>
  );
}
