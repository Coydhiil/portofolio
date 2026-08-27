"use client";

import Link from "next/link";

export default function Tabbar() {
  const items = [
    { id: 0, label: "Home", href: "#home" },
    { id: 1, label: "About", href: "#about" },
    { id: 2, label: "Projects", href: "#projects" },
    { id: 3, label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex md:hidden transform-gpu">
      <nav className="flex items-center justify-center bg-neutral-900/80 backdrop-blur-md shadow-xl rounded-full px-7 py-1.5 border border-neutral-800/50">
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
      </nav>
    </div>
  );
}
