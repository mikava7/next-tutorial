import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className={inter.className}>
      <Link href="/users">Link to users page</Link>
    </main>
  );
}
