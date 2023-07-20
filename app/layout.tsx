import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SeanO Portfolio",
  description: "SeanO Portfolio Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="absolute p-4 w-screen flex items-center justify-between">
          <Link href="/" className="text-4xl font-bold text-white">
            SeanO PortfoliO
          </Link>
          <h2 className="text-2xl font-bold text-white">Contact</h2>
        </header>
        {children}
      </body>
    </html>
  );
}
