import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";
import Posts from "./components/Posts";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
        Hello and welcome
        <span className="whitespace-nowrap">
          I am <span className="font-bold">Wealthy</span>
        </span>
      </p>
      <Posts />
      {/* <Link href="/users">Link to users page</Link> */}
    </main>
  );
}
