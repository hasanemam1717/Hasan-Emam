import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hasan Emam | Full-Stack Web Developer",
  description:
    "Full-stack web developer specializing in React, Next.js, TypeScript, and Node.js. Explore my portfolio, projects, and skills.",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#0a0a23",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)",
            },
            success: {
              iconTheme: { primary: "#22d3ee", secondary: "#0a0a23" },
            },
            error: {
              iconTheme: { primary: "#f87171", secondary: "#0a0a23" },
            },
          }}
        />
        <ThemeProvider>
          <Navbar />
          <div className="h-full">{children}</div>
          <Footer />
          <FloatingActions />
        </ThemeProvider>
      </body>
    </html>
  );
}
