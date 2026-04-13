import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; // Ensure this import path is correct
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jatin Punjabi | Portfolio",
  description: "Computer Engineering Student at Boston University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300`} suppressHydrationWarning>
        {/* Navbar is now persistent across all routes */}
        <Navbar />
        
        {/* Wrap children in a main tag (you can add padding here if your navbar is fixed) */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}