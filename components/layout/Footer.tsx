"use client";

import SocialLists from "./SocialLists";
import { ArrowUpIcon } from "lucide-react";

export default function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative min-h-fit h-auto bg-background border border-dot my-12 py-12 pb-24 font-paragraph overflow-hidden bottom-6">
      <div className="bottom-10 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="font-paragraph text-xs text-white/50 uppercase tracking-widest">
          &copy; {CURRENT_YEAR} Fadhiil Fiannata Nugroho. All rights reserved.
        </div>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs text-white/80 hover:text-white active:text-white transition-all group"
        >
          Back to Top <ArrowUpIcon className="w-4" />
        </button>
      </div>
    </footer>
  );
}
