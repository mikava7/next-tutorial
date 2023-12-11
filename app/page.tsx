import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href="/users">Link to users page</Link>
    </main>
  );
}
