"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact Me</Link>
      </div>
      <h1>Ini Home</h1>
    </div>
  );
}
