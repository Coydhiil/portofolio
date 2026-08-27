"use client";

import Link from "next/link";

export default function Navbar() {
  const items = [
    { id: 0, label: "Home", href: "#home" },
    { id: 1, label: "About", href: "#about" },
    { id: 2, label: "Projects", href: "#projects" },
    { id: 3, label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-6 sm:px-8 flex items-center justify-between transform-gpu">
      <div className="flex-1 flex justify-start">
        <div className="flex items-center justify-center bg-neutral-900/80 backdrop-blur-md shadow-xl rounded-full px-4 py-2 border border-neutral-800/50">
          <Link
            href="#home"
            className="font-header text-sm lg:text-base font-bold tracking-wider text-white hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            FAD<span className="text-cyan-400">HIIL;</span>
          </Link>
        </div>
      </div>

      <nav className="hidden flex-none md:flex items-center justify-center">
        <div className="flex items-center justify-center bg-neutral-900/80 backdrop-blur-md shadow-xl rounded-full px-3 py-1.5 border border-neutral-800/50">
          <div className="relative flex items-center justify-center gap-1">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="relative px-3 py-1.5 text-neutral-400 hover:text-white hover:bg-neutral-800 text-xs sm:text-sm font-medium rounded-full transition-colors duration-300 z-10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="flex-1 flex justify-end"></div>
    </header>
  );
}
