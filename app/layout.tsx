import type { Metadata } from "next";
import { Montserrat, Open_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import { cn } from "@/app/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fadhiil Fiannata N - Portofolio",
  description:
    "Fadhiil is a computer science student who is very enthusiastic about exploring various aspects of digital technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", montserrat.variable, openSans.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
