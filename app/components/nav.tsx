"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        sticky top-0 w-full px-6 lg:px-20
        flex items-center justify-center
        transition-colors duration-500
        z-[3]
        relative
        ${scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"}
      `}
    >
      {/* LEFT (desktop only) */}
      <ul className="hidden lg:flex items-center gap-20 absolute left-20">
        <li>
          <Link href="/quotes">Quotes</Link>
        </li>
        <li>
          <Link href="/tyla">Tyla</Link>
        </li>
      </ul>

      {/* CENTER LOGO (always perfectly centered) */}
      <Link href="/">
        <div className="h-[60px] w-[60px]">
          <Image
            className="h-full w-full object-contain"
            src="/images/nathan-sketch.png"
            alt="Logo"
            width={60}
            height={60}
            unoptimized
          />
        </div>
      </Link>

      {/* RIGHT (desktop only) */}
      <ul className="hidden lg:flex items-center gap-20 absolute right-20">
        <li>
          <Link href="/about">About Nathan</Link>
        </li>
      </ul>
    </div>
  );
}