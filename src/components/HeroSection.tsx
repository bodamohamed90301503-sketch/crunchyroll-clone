"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const generated = Array.from({ length: 20 }).map(() => ({
            top: Math.random() * 100,
            left: Math.random() * 100,
            duration: 2 + Math.random() * 4,
        }));

        setParticles(generated);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-black pt-20">

            {/* Background */}
            <div className="absolute inset-0">

                <img
                    src="https://images.alphacoders.com/136/1361812.jpeg"
                    alt="Solo Leveling"
                    className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105 animate-pulse"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-purple-700/30 blur-[180px] rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" />

                {/* Particles FIXED */}
                <div className="absolute inset-0 overflow-hidden">
                    {particles.map((p, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-purple-500 rounded-full opacity-70 animate-ping"
                            style={{
                                top: `${p.top}%`,
                                left: `${p.left}%`,
                                animationDuration: `${p.duration}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">

                <div className="max-w-2xl">

                    <p className="text-purple-400 uppercase tracking-[4px] mb-4 text-sm font-semibold">
                        #1 Trending Anime
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
                        Solo <span className="text-purple-500">Leveling</span>
                    </h1>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                        As the weakest hunter of all mankind, Sung Jinwoo gains
                        the power to level up in a world filled with monsters,
                        shadows, and deadly dungeons.
                    </p>

                    <div className="flex flex-wrap gap-5">

                        <button className="px-10 py-4 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-lg transition-all duration-300 hover:scale-105 shadow-[0_0_35px_rgba(168,85,247,0.7)]">
                            Watch Now
                        </button>

                        <button className="px-10 py-4 rounded-2xl border border-purple-500/40 bg-white/5 backdrop-blur-md text-white font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
                            My List
                        </button>

                    </div>

                    <div className="flex items-center gap-8 mt-12 text-gray-400">

                        <div>
                            <p className="text-2xl font-bold text-white">9.9</p>
                            <span className="text-sm">Rating</span>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-white">2025</p>
                            <span className="text-sm">Season</span>
                        </div>

                        <div>
                            <p className="text-2xl font-bold text-white">24</p>
                            <span className="text-sm">Episodes</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <div className="w-7 h-12 rounded-full border border-purple-500/40 flex justify-center items-start p-2">
                    <div className="w-1 h-3 bg-purple-400 rounded-full animate-bounce" />
                </div>
            </div>

        </section>
    );
}