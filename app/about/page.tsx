"use client";

import Link from "next/link";
import { About } from "../about/about";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact Me</Link>
      </div>
      <About />
    </div>
  );
}
