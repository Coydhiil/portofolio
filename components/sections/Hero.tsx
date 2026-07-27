"use client";

import ProfileCard from "../layout/ProfileCard";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative top-0.5 font-paragraph lg:top-14 min-h-screen pt-32 pb-20 lg:py-0 lg:flex lg:items-center overflow-hidden"
        >
            <div className="container mx-auto px-6 sm:px-12 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-left flex flex-col items-start justify-center">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-sm lg:text-xs font-semibold tracking-wide">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            CS Student @ Udinus | Ready to Contribute & Grow
                        </div>

                        <div className="relative w-full">
                            <div className="absolute -inset-4 bg-indigo-600/25 blur-[120px] rounded-full -z-10 pointer-events-none" />

                            <h1 className="text-xl lg:text-8xl font-bold font-header tracking-tight text-white leading-none">
                                FADHIIL <br className="hidden sm:inline" />
                                <span className="text-cyan-400 font-medium">
                                    FIANNATA N
                                </span>
                            </h1>
                        </div>

                        <p className="text-lg lg:text-base text-white/75 max-w-xl leading-relaxed">
                            A Computer Science student who is actively exploring the potential of web development, data analysis, and artificial intelligence to build smart, impactful applications.
                        </p>

                        <div className="flex flex-col lg:flex-row items-center gap-4 pt-4 w-auto lg:w-full">
                            <a
                                href="#projects"
                                className="w-full lg:w-auto text-center px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black text-sm font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] transition-all duration-300"
                            >
                                View Projects
                            </a>
                            <a
                                href="/cv/Fadhiil_Fiannata_N_CV.pdf"
                                download="Fadhiil_Fiannata_N_CV.pdf"
                                className="w-full lg:w-auto  text-center px-8 py-3.5 rounded-full border border-neutral-800 text-neutral-300 text-sm font-semibold hover:bg-neutral-900/50 transition-all duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end w-full">
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
