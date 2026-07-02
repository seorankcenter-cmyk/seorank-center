"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-yellow-400 shadow-lg"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/seorank-logo.png"
            alt="SEOrank Center"
            width={700}
            height={220}
            priority
            className="h-24 w-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-[16px] font-medium text-gray-800">
          <Link href="#services" className="transition hover:text-blue-600">
            Services
          </Link>

          <Link href="#process" className="transition hover:text-blue-600">
            Our Process
          </Link>

          <Link href="#faq" className="transition hover:text-blue-600">
            FAQs
          </Link>

          <Link href="#contact" className="transition hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Dashboard Button */}
        <Link
  href="/signup"
  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
>
  Order Dashboard →
</Link>

      </div>
    </header>
  );
}