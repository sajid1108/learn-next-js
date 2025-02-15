"use client";

import Link from "next/link";
import { Contact } from "../contact/contact";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
      </div>
      <Contact />
    </div>
  );
}
