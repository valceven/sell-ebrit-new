import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

//components
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Sell-Ebrate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={roboto_mono.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
