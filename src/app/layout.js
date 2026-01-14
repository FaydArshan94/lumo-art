import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LenisProvider from "@/providers/lenisProvider";
import ClientProviders from "@/providers/ClientProviders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lumo Art Your Imagination At One Place ",
  description: "Your Imagination At One Place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <LenisProvider>
          <ClientProviders>{children}</ClientProviders>
        </LenisProvider>
      </body>
    </html>
  );
}
