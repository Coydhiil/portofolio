"use client";

import React from "react";
import ProfileCard from "../layout/ProfileCard";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative top-0.5 lg:top-14 min-h-screen pt-32 pb-20 lg:py-0 lg:flex lg:items-center overflow-hidden"
        >
            <div className="absolute inset-0 opacity-45 pointer-events-none" />
            <div className="absolute inset-0 opacity-35 pointer-events-none" />

            <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    <div className="lg:col-span-7 space-y-6 text-left flex flex-col items-start justify-center">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            CS Student @ Udinus | Ready to Contribute & Grow
                        </div>

                        <div className="relative w-full">
                            <div className="absolute -inset-4 bg-indigo-600/25 blur-[120px] rounded-full -z-10 pointer-events-none" />

                            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold font-header tracking-tight text-white leading-none">
                                FADHIIL <br className="hidden sm:inline" />
                                <span className="text-cyan-400 font-medium">
                                    FIANNATA N
                                </span>
                            </h1>
                        </div>

                        <p className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed">
                            Hi! I’m Fadhiil, a Computer Science student who is actively exploring the potential of web development, data analysis, and artificial intelligence to build smart, impactful applications.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
                            <a
                                href="#projects"
                                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full bg-cyan-600 text-white text-sm font-semibold shadow-lg hover:bg-cyan-500 hover:shadow-indigo-500/50 ransition-all duration-300"
                            >
                                View Projects
                            </a>
                            <a
                                href="#about"
                                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-full border border-neutral-800 text-neutral-300 text-sm font-semibold hover:bg-neutral-900/50 ransition-all duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
                        <div className="relative w-full max-w-[360px] flex justify-center">
                            <div className="absolute inset-0 -m-8 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 blur-3xl rounded-full -z-10" />

                            <ProfileCard
                                avatarUrl="/assets/Fadhiil Udinus RB.png"
                                handle="dhiilfn"
                                status="Online"
                                contactText="Let's Chat"
                                behindGlowColor="rgba(99, 102, 241, 0.4)"
                                behindGlowSize="60%"
                                onContactClick={() => {
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                    } else {
                                        window.location.hash = "contact";
                                    }
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
