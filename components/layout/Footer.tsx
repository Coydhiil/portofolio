"use client";

import React from "react";

export default function Footer() {
    const CURRENT_YEAR = new Date().getFullYear();

    const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (typeof window !== "undefined") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <footer className="relative bg-neutral-950/80 backdrop-blur-xl border-t border-white/10 py-24 font-paragraph overflow-hidden bottom-6">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            <div className="max-w-7xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="font-paragraph text-xs text-white/50 uppercase tracking-widest">
                    &copy; {CURRENT_YEAR} Fadhiil Fiannata Nugroho. All rights reserved.
                </p>
                <button
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-500/10 text-xs text-white/80 hover:text-white transition-all group"
                >
                    Back to Top
                </button>
            </div>
        </footer>
    );
}