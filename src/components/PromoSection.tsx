"use client";

import { Sparkles, PlayCircle } from "lucide-react";

export default function PromoSection() {

    return (
        <section className="relative py-28 overflow-hidden bg-black">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-700/10 blur-[180px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">

                <div
                    className="
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-2xl
                    "
                >

                    {/* Background Image */}
                    <div className="absolute inset-0">

                        <img
                            src="https://images6.alphacoders.com/136/1368329.jpeg"
                            alt="Anime Background"
                            className="w-full h-full object-cover opacity-30"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                    </div>

                    {/* Glow Effects */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-10 md:p-16">

                        {/* Left Content */}
                        <div>

                            <div
                                className="
                                inline-flex
                                items-center
                                gap-2
                                px-5
                                py-2
                                rounded-full
                                border
                                border-purple-500/30
                                bg-purple-500/10
                                text-purple-300
                                text-sm
                                font-semibold
                                mb-8
                                "
                            >
                                <Sparkles className="w-4 h-4" />
                                LIMITED PREMIUM EVENT
                            </div>

                            <h2
                                className="
                                text-5xl
                                md:text-7xl
                                font-black
                                text-white
                                leading-tight
                                mb-8
                                "
                            >
                                Enter The
                                <span className="block text-purple-500">
                                    Anime Universe
                                </span>
                            </h2>

                            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
                                Watch the hottest anime releases, exclusive
                                premium episodes, and immersive cinematic
                                experiences only on ANIMEX.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-5">

                                <button
                                    className="
                                    h-16
                                    px-10
                                    rounded-2xl
                                    bg-purple-600
                                    hover:bg-purple-500
                                    text-white
                                    font-bold
                                    text-lg
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    shadow-[0_0_45px_rgba(168,85,247,0.7)]
                                    "
                                >
                                    Start Watching
                                </button>

                                <button
                                    className="
                                    h-16
                                    px-10
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    backdrop-blur-xl
                                    text-white
                                    font-semibold
                                    flex
                                    items-center
                                    justify-center
                                    gap-3
                                    hover:bg-white/10
                                    transition-all
                                    duration-300
                                    "
                                >
                                    <PlayCircle className="w-6 h-6 text-purple-400" />
                                    Watch Trailer
                                </button>

                            </div>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-10 mt-14">

                                <div>
                                    <h3 className="text-4xl font-black text-white">
                                        10K+
                                    </h3>

                                    <p className="text-gray-400 mt-2">
                                        Anime Episodes
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-black text-white">
                                        4K
                                    </h3>

                                    <p className="text-gray-400 mt-2">
                                        Ultra HD Quality
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-4xl font-black text-white">
                                        24/7
                                    </h3>

                                    <p className="text-gray-400 mt-2">
                                        Unlimited Streaming
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="relative hidden lg:flex justify-center">

                            {/* Main Image */}
                            <div
                                className="
                                relative
                                w-[420px]
                                h-[600px]
                                rounded-[36px]
                                overflow-hidden
                                border
                                border-purple-500/30
                                shadow-[0_0_80px_rgba(168,85,247,0.35)]
                                "
                            >

                                <img
                                    src="https://images3.alphacoders.com/136/1366807.jpeg"
                                    alt="Anime Character"
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                            </div>

                            {/* Floating Card */}
                            <div
                                className="
                                absolute
                                bottom-10
                                -left-10
                                w-60
                                rounded-3xl
                                bg-black/60
                                backdrop-blur-2xl
                                border
                                border-white/10
                                p-5
                                animate-float
                                "
                            >

                                <p className="text-purple-400 text-sm mb-2">
                                    NOW TRENDING
                                </p>

                                <h4 className="text-white text-xl font-bold mb-2">
                                    Solo Leveling
                                </h4>

                                <p className="text-gray-400 text-sm">
                                    #1 most watched anime this week.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}