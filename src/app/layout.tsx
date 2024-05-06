import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";

import { cookieToInitialState } from 'wagmi'

import { config } from '@/config'
import Web3ModalProvider from '@/context'

// import Providers from "@/components/providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ApeSafari Coin V0->V1 Swap",
  description: "App to swap version 0 ApeSafari Coins for version 1 coins.",
};

export default function RootLayout({
  children,
}: Readonly<{

  children: React.ReactNode;
  
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html className={inter.className} lang="en">
      <body className="relative overflow-hidden">
      <Web3ModalProvider initialState={initialState}>
        <Navbar />
          <main>
            {children}
          </main>
        <Footer />
      </Web3ModalProvider>
      </body>
    </html>
  );
}
