"use client";

import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background gradients for premium aesthetic */}
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_top_right] from-indigo-500/10 via-transparent to-transparent dark:from-indigo-950/20" />
      <div className="absolute inset-0 -z-10 bg-radial-[circle_at_bottom_left] from-violet-500/10 via-transparent to-transparent dark:from-violet-950/20" />

      <div className="text-center max-w-3xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 dark:border-indigo-400/20 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold tracking-wide animate-pulse">
          🚀 Welcome to my Portofolio
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-indigo-950 to-neutral-900 dark:from-white dark:via-indigo-200 dark:to-neutral-100 leading-tight">
          Hi, I am <span className="text-indigo-600 dark:text-indigo-400">Fadhiil Fiannata</span>
        </h1>

        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
          A passionate Computer Science student dedicated to building modern, beautiful, and highly responsive web applications. Let's create something extraordinary.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#project"
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-sm font-semibold shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 hover:scale-105 transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="w-full sm:w-auto px-8 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-semibold hover:bg-neutral-50 dark:hover:bg-neutral-900/50 hover:scale-105 transition-all duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
