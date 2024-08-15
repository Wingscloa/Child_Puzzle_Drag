import type { Metadata } from "next";
import "./globals.css";
import { AiFillHome } from "react-icons/ai";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import Link from 'next/link'
import Head from 'next/head'
import Header from '../../components/Header/header'
import Logo from '../../components/Logo/logo'

export const metadata: Metadata = {
  title: "Drag Me",
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
        {/* <Head>
          <title>My page title</title>
        </Head> */}
        {/* <Header />
        <Logo /> */}
        <div className="content">{children}</div>
      </body>
    </html>
  );
}
