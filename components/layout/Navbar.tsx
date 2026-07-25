"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  const items = [
    { id: 0, label: "Home", href: "#home" },
    { id: 1, label: "About", href: "#about" },
    { id: 2, label: "Projects", href: "#projects" },
    { id: 3, label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const updateIndicator = () => {
      if (itemRefs.current[active] && containerRef.current) {
        const activeItem = itemRefs.current[active];
        const container = containerRef.current;
        if (!activeItem) return;
        const activeRect = activeItem.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setIndicatorStyle({
          width: activeRect.width,
          left: activeRect.left - containerRect.left,
        });
      }
    };

    updateIndicator();
    const timer = setTimeout(updateIndicator, 100);

    window.addEventListener("resize", updateIndicator);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateIndicator);
    };
  }, [active]);

  useEffect(() => {
    const sections = items.map(item => document.querySelector(item.href));

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -35% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const index = items.findIndex((item) => item.href === `#${id}`);
          if (index !== -1) {
            setActive(index);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-6 sm:px-8 flex items-center justify-between">
      <div className="flex-1 flex justify-start">
        <Link
          href="#home"
          className="font-header text-sm lg:text-base font-bold tracking-wider text-neutral-800 dark:text-neutral-100 hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          FAD<span className="text-cyan-400">HIIL;</span>
        </Link>
      </div>

      <div className="flex-none flex items-center justify-center">
        <div className="flex items-center justify-center bg-transparent backdrop-blur-md shadow-xl rounded-full px-3 py-1.5 border border-neutral-200/50 dark:border-neutral-800/50">
          <div
            ref={containerRef}
            className="relative flex items-center justify-center gap-1"
          >
            {indicatorStyle.width > 0 && (
              <div
                className="absolute top-0 bottom-0 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-all duration-300 ease-out -z-10"
                style={{
                  width: `${indicatorStyle.width}px`,
                  left: `${indicatorStyle.left}px`,
                }}
              />
            )}

            {items.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => setActive(index)}
                className={`relative px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-300 z-10 ${active === index
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-end">

      </div>
    </div >
  );
};

export default Navbar;
