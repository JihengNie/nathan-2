"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll(); // run once on mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        sticky top-0 left-0 w-full grid grid-cols-3 px-20
        transition-colors duration-500
        ${scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"}
      `}
    >
      {/* LEFT */}
      <ul className="flex items-center gap-20">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/quotes">Quotes</Link>
        </li>
      </ul>

      {/* CENTER LOGO */}
      <div className="flex justify-center items-center">
        <Link href="/">
          <div className="aspect-square h-[60px] w-[60px]">
            <Image
              className="flex h-full w-full object-contain"
              src="/images/nathan-sketch.png"
              alt="Simpson Wave"
              width={60}
              height={60}
              unoptimized
            />
          </div>
        </Link>
      </div>

      {/* RIGHT */}
      <ul className="flex items-center gap-20 justify-end">
        <li>
          <Link href="/about">About Nathan</Link>
        </li>
      </ul>
    </div>
  );
}