import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://jatinpunjabi.com"),
  title: "Jatin Punjabi | Portfolio",
  description: "Computer Engineering Student at Boston University",
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/images/favicon_io/apple-touch-icon.png",
  },
  manifest: "/images/favicon_io/site.webmanifest",
  openGraph: {
    title: "Jatin Punjabi | Portfolio",
    description: "Computer Engineering Student at Boston University",
    url: "https://jatinpunjabi.com",
    siteName: "Jatin Punjabi | Portfolio",
    images: ["/images/profile-icon.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jatin Punjabi | Portfolio",
    description: "Computer Engineering Student at Boston University",
    images: ["/images/profile-icon.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300`} suppressHydrationWarning>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}