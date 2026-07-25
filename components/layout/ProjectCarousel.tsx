"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, FolderGit2 } from "lucide-react";

export interface Project {
    id: string | number;
    name: string;
    description: string;
    img_url: string;
    tags?: string[] | null;
    github_url?: string | null;
    demo_url?: string | null;
}

interface ProjectCarouselProps {
    projects: Project[];
}

const imageVariants: Variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0, scale: 0.96 }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: { x: { type: "spring", stiffness: 280, damping: 30 }, opacity: { duration: 0.3 } },
    },
    exit: (dir: number) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0, scale: 0.96, transition: { opacity: { duration: 0.2 } } }),
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
    const [[page, direction], setPage] = useState([0, 0]);
    const [touchStart, setTouchStart] = useState<number | null>(null);

    if (!projects?.length) {
        return (
            <div className="text-center py-16 bg-[#12141C]/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl">
                <FolderGit2 className="w-12 h-12 text-gray-500 mx-auto mb-3" />
                <p className="text-gray-400 text-lg">No projects found.</p>
            </div>
        );
    }

    const currentIndex = ((page % projects.length) + projects.length) % projects.length;
    const current = projects[currentIndex];

    const paginate = (newDir: number) => setPage([page + newDir, newDir]);
    const goToSlide = (idx: number) => setPage([idx, idx > currentIndex ? 1 : -1]);

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) paginate(diff > 0 ? 1 : -1);
        setTouchStart(null);
    };

    return (
        <div className="w-full max-w-7xl mx-auto space-y-6">
            {/* Main Content Grid */}
            <div
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
                onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
                onTouchEnd={handleTouchEnd}
            >
                {/* Media Image Card with Overlay Navigation */}
                <div className="lg:col-span-7 xl:col-span-8 relative aspect-[16/9] md:aspect-[16/10] lg:aspect-auto lg:min-h-[360px] overflow-hidden rounded-2xl bg-[#12141C]/80 backdrop-blur-md border border-white/10 shadow-2xl group">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={page}
                            custom={direction}
                            variants={imageVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 w-full h-full"
                        >
                            <img
                                src={current.img_url || "/placeholder-project.png"}
                                alt={current.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80";
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-black/20 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Image Layer Overlay Navigation Buttons */}
                    {projects.length > 1 && (
                        <>
                            <button
                                onClick={() => paginate(-1)}
                                aria-label="Previous Project"
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-[#00E5FF] text-white hover:text-black backdrop-blur-md border border-white/20 hover:border-[#00E5FF] shadow-lg active:scale-95 transition-all duration-300 group/btn"
                            >
                                <ChevronLeft className="w-5 h-5 group-hover/btn:-translate-x-0.5 transition-transform" />
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                aria-label="Next Project"
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-[#00E5FF] text-white hover:text-black backdrop-blur-md border border-white/20 hover:border-[#00E5FF] shadow-lg active:scale-95 transition-all duration-300 group/btn"
                            >
                                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                        </>
                    )}
                </div>

                {/* Content Card */}
                <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 min-h-[380px] lg:min-h-[460px] shadow-2xl relative overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.3 }}
                            className="flex-1 flex flex-col justify-between h-full space-y-6"
                        >
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug mb-3">
                                    {current.name}
                                </h3>

                                <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6 line-clamp-4">
                                    {current.description}
                                </p>

                                {current.tags && current.tags.length > 0 && (
                                    <div className="space-y-2">
                                        <span className="text-xs text-white font-medium">Tech Stack</span>
                                        <div className="flex flex-wrap gap-2">
                                            {current.tags.map((tag, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-xs font-semibold text-cyan-400 border border-cyan-600/30 px-3 py-1 rounded-full backdrop-blur-sm"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* CTA Action Buttons */}
                            <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-auto">
                                {current.github_url && (
                                    <a
                                        href={current.github_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 active:scale-95 shadow-lg"
                                    >
                                        <img src="/assets/github-142-svgrepo-com.svg" alt="GitHub" className="w-4 h-4" />
                                        Repository #e5e7eb
                                    </a>
                                )}

                                {current.demo_url?.trim() && (
                                    <a
                                        href={current.demo_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black text-xs sm:text-sm font-bold transition-all duration-300 active:scale-95 hover:shadow-[0_0_20px_rgba(0,229,255,0.35)] shadow-xl"
                                    >
                                        <ExternalLink className="w-4 h-4 text-black" />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Pagination Dots */}
            {projects.length > 1 && (
                <div className="flex justify-center items-center gap-2 pt-2">
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                            className={`h-2.5 rounded-full transition-all duration-500 ${currentIndex === idx
                                ? "w-9 bg-cyan-300"
                                : "w-2.5 bg-white/20"
                                }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

