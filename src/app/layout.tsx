import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Josefin_Sans } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });

const josefin = Josefin_Sans({
  subsets: ['latin'],
  variable: "--font-josefin",
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${josefin.variable} bg-soft-red-gradiant bg-fixed h-screen`}>
      <body className="">{children}</body>
    </html >
  );
}
