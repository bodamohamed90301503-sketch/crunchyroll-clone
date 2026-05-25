"use client";

import {
    MonitorOff,
    Library,
    Zap,
    Percent,
    Gamepad2,
    Tag,
    Monitor,
    Download,
} from "lucide-react";

const benefits = [
    {
        icon: MonitorOff,
        title: "Ad-Free Streaming",
        desc: "Watch your favorite anime with zero interruptions.",
    },
    {
        icon: Library,
        title: "Unlimited Library",
        desc: "Access thousands of anime episodes anytime.",
    },
    {
        icon: Zap,
        title: "Instant Episodes",
        desc: "New episodes available right after Japan release.",
    },
    {
        icon: Percent,
        title: "Exclusive Discounts",
        desc: "Special member-only anime merchandise offers.",
    },
    {
        icon: Gamepad2,
        title: "Anime Games",
        desc: "Unlock premium anime gaming experiences.",
    },
    {
        icon: Tag,
        title: "VIP Benefits",
        desc: "Early access to events and exclusive sales.",
    },
    {
        icon: Monitor,
        title: "Multi-Device Support",
        desc: "Stream across all your devices seamlessly.",
    },
    {
        icon: Download,
        title: "Offline Viewing",
        desc: "Download episodes and watch anywhere.",
    },
];

export default function BenefitsSection() {
    return (
        <section className="relative py-28 overflow-hidden bg-black">

            {/* Glow Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-700/10 blur-[180px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20">

                    <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
                        Premium Features
                    </p>

                    <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                        Why Choose <span className="text-purple-500">ANIMEX</span>
                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Experience anime streaming on a completely different level
                        with premium quality, exclusive features, and immersive viewing.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {benefits.map((benefit, idx) => (

                        <div
                            key={idx}
                            className="
                            group
                            relative
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-white/10
                            bg-white/5
                            backdrop-blur-2xl
                            p-8
                            transition-all
                            duration-500
                            hover:-translate-y-4
                            hover:border-purple-500/40
                            hover:shadow-[0_20px_60px_rgba(168,85,247,0.25)]
                            "
                        >

                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                            {/* Icon */}
                            <div
                                className="
                                relative
                                w-16
                                h-16
                                rounded-2xl
                                bg-purple-600/20
                                border
                                border-purple-500/30
                                flex
                                items-center
                                justify-center
                                mb-6
                                group-hover:scale-110
                                group-hover:bg-purple-600
                                transition-all
                                duration-500
                                "
                            >

                                <benefit.icon
                                    className="
                                    w-8
                                    h-8
                                    text-purple-400
                                    group-hover:text-white
                                    transition-colors
                                    "
                                />
                            </div>

                            {/* Content */}
                            <div className="relative">

                                <h3 className="text-2xl font-bold text-white mb-4">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {benefit.desc}
                                </p>

                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center mt-20">

                    <button
                        className="
                        px-10
                        py-5
                        rounded-2xl
                        bg-purple-600
                        hover:bg-purple-500
                        text-white
                        font-bold
                        text-lg
                        transition-all
                        duration-300
                        hover:scale-105
                        shadow-[0_0_40px_rgba(168,85,247,0.7)]
                        "
                    >
                        Explore Premium
                    </button>

                </div>
            </div>
        </section>
    );
}