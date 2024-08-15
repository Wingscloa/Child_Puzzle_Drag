'use client'
import { motion } from "framer-motion"
import Link from 'next/link'


export default function Page() {
  return(
    <>
    <div className="about flex justify-center">
      <motion.div 
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            drag="x"
            dragConstraints={{ left: -25, right: 25 }}
            className="border mt-8 bg-slate-200 w-64 h-fit rounded-md p-4 text-balance">
            <h1 className="text-center mb-1">Co to je?</h1>
            <p style={{ fontSize: "18px" }} className="font-sans antialiased indent-2 whitespace-normal">
              Táto stránka je pro moje edukativní účely, slouží jen proto, abych se přiučil technologiím.
              Tento projekt je vytvořen za pomocí <a className="underline decoration-stone-400 cursor-pointer" style={{ fontSize: "18px" }} href="https://nextjs.org/">Next.js</a>, 
              <a style={{ fontSize: "18px" }} className="underline decoration-blue-400 cursor-pointer" href="https://tailwindcss.com/docs/installation">Tailwind CSS</a>, 
              <a style={{ fontSize: "18px" }} className="underline decoration-green-300 cursor-pointer" href="https://www.typescriptlang.org/docs/">TypeScript</a> a jejich knihoven.
            </p>
      </motion.div>


    </div>

    <div className="flex self-center justify-center m-4">
    <Link href="/game" type="button" className="bg-slate-600 w-16 hover:bg-slate-400 rounded-sm h-12  font-mono text-white hover:text-slate-200 text-center p-2">
        Game
    </Link>
    </div>

    </>
  );
}