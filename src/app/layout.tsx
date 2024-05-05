import type { Metadata } from "next";
import { headers } from "next/headers";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
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
  const cookie = headers().get("cookie");
  return (
    <html className={inter.className} lang="en">
      <body className="relative overflow-hidden">
      <Providers cookie={cookie}>
          <Navbar />
            <main>
            {children}
            </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
