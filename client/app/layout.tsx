import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-between items-center border border-red-500">
          <Link className="p-2" href="/">
            Home
          </Link>
          <Link className="p-2" href="/auth">
            Login
          </Link>
          <Link className="p-2" href="/feed">
            Feed
          </Link>
          <Link className="p-2" href="/user">
            User profile
          </Link>
          <Link className="p-2" href="/user/posts">
            Post
          </Link>
          <Link className="p-2" href="/feed/analytics">
            Analytics
          </Link>
        </div>
        <div className="h-screen">{children}</div>
      </body>
    </html>
  );
}
