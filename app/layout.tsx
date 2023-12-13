import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import BlogNavbar from "./components/BlogNavbar";
import MyProfilePic from "./components/MyProfilePic";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mystical Dimension",
  description: "Created by Irakli Mikava",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        {/* <Navbar /> */}
        <BlogNavbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
