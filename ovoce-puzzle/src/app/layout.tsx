import type { Metadata } from "next";
import "./globals.css";
import { AiFillHome } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import Link from 'next/link'


export const metadata: Metadata = {
  title: "Puzzle Drag",
  description: "Made by Wingscloa - https://github.com/Wingscloa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="header flex justify-center">
        <Link href="/" className="m-1 cursor-pointer border bg-gray-300 rounded-lg hover:bg-gray-400 active:bg-gray-700 w-16 flex items-center justify-center">
          <AiFillHome/>
          <p className="p-1 align-middle hover:text-gray-200 active:text-gray-300 select-none text-sm text-center" >Home</p>
        </Link>
        <Link href="/game" className="m-1 cursor-pointer border bg-gray-300 rounded-lg hover:bg-gray-400 active:bg-gray-700 w-16 flex items-center justify-center">
          <AiFillPlayCircle/>
          <p className="p-1 align-middle hover:text-gray-200 active:text-gray-300 select-none text-sm text-center">Play</p>
        </Link>
        <Link href="/history" className="p-1 m-1 cursor-pointer border bg-gray-300 rounded-lg hover:bg-gray-400 active:bg-gray-700 w-18 flex items-center justify-center">
          <FaHistory/>
          <h1 className="p-1 align-middle hover:text-gray-200 active:text-gray-300 select-none text-sm text-center">History</h1>
        </Link>
      </div>
      {children}
      </body>
    </html>
  );
}
