"use client";

import { useState } from "react";
import { Check, Star, Sparkles } from "lucide-react";

const plans = [
    {
        name: "Starter",
        monthlyPrice: "$9.99",
        yearlyPrice: "$99.99",
        devices: "1 Device",
        quality: "Full HD",
        popular: false,
    },
    {
        name: "Premium",
        monthlyPrice: "$13.99",
        yearlyPrice: "$139.99",
        devices: "4 Devices",
        quality: "4K + HDR",
        popular: true,
    },
    {
        name: "Ultimate",
        monthlyPrice: "$17.99",
        yearlyPrice: "$179.99",
        devices: "6 Devices",
        quality: "Ultra HD",
        popular: false,
    },
];

const features = [
    "Unlimited Anime Streaming",
    "Ad-Free Experience",
    "New Episodes Instantly",
    "Offline Downloads",
    "Exclusive Anime Library",
];

export default function PricingSection() {

    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="relative py-28 bg-black overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-700/20 blur-[180px] rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">

                    <p className="text-purple-400 uppercase tracking-[4px] text-sm mb-4">
                        Premium Membership
                    </p>

                    <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                        Choose Your <span className="text-purple-500">Plan</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Unlock unlimited anime streaming with premium quality,
                        exclusive episodes, and zero ads.
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-16">

                    <div
                        className="
                        flex
                        items-center
                        bg-white/5
                        border
                        border-white/10
                        rounded-2xl
                        p-2
                        backdrop-blur-xl
                        "
                    >

                        <button
                            onClick={() => setIsYearly(false)}
                            className={`
                                px-8 py-3 rounded-xl font-semibold transition-all duration-300
                                ${!isYearly
                                    ? "bg-purple-600 text-white shadow-[0_0_30px_rgba(168,85,247,0.7)]"
                                    : "text-gray-400 hover:text-white"}
                            `}
                        >
                            Monthly
                        </button>

                        <button
                            onClick={() => setIsYearly(true)}
                            className={`
                                px-8 py-3 rounded-xl font-semibold transition-all duration-300
                                ${isYearly
                                    ? "bg-purple-600 text-white shadow-[0_0_30px_rgba(168,85,247,0.7)]"
                                    : "text-gray-400 hover:text-white"}
                            `}
                        >
                            Yearly
                        </button>

                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-8">

                    {plans.map((plan, idx) => (

                        <div
                            key={idx}
                            className={`
                            group
                            relative
                            rounded-[32px]
                            border
                            backdrop-blur-2xl
                            overflow-hidden
                            transition-all
                            duration-500
                            hover:-translate-y-4
                            ${plan.popular
                                    ? "border-purple-500 bg-purple-500/10 scale-105 shadow-[0_0_60px_rgba(168,85,247,0.4)]"
                                    : "border-white/10 bg-white/5 hover:border-purple-500/40"}
                            `}
                        >

                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute top-5 right-5">

                                    <div
                                        className="
                                        flex
                                        items-center
                                        gap-2
                                        px-4
                                        py-2
                                        rounded-full
                                        bg-purple-600
                                        text-white
                                        text-sm
                                        font-bold
                                        shadow-[0_0_25px_rgba(168,85,247,0.8)]
                                        "
                                    >
                                        <Sparkles className="w-4 h-4" />
                                        MOST POPULAR
                                    </div>
                                </div>
                            )}

                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                            <div className="relative p-8">

                                {/* Title */}
                                <h3 className="text-3xl font-extrabold text-white mb-3">
                                    {plan.name}
                                </h3>

                                <p className="text-gray-400 mb-8">
                                    Best for anime lovers.
                                </p>

                                {/* Price */}
                                <div className="mb-8">

                                    <span className="text-5xl font-black text-white">
                                        {isYearly
                                            ? plan.yearlyPrice
                                            : plan.monthlyPrice}
                                    </span>

                                    <span className="text-gray-400 text-lg ml-2">
                                        /{isYearly ? "year" : "month"}
                                    </span>
                                </div>

                                {/* Features */}
                                <div className="space-y-5 mb-10">

                                    {features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3"
                                        >

                                            <div
                                                className="
                                                w-6
                                                h-6
                                                rounded-full
                                                bg-purple-600/20
                                                flex
                                                items-center
                                                justify-center
                                                "
                                            >
                                                <Check className="w-4 h-4 text-purple-400" />
                                            </div>

                                            <span className="text-gray-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}

                                    <div className="pt-4 border-t border-white/10">

                                        <div className="flex justify-between text-gray-300 mb-3">
                                            <span>Streaming Quality</span>
                                            <span className="text-white font-semibold">
                                                {plan.quality}
                                            </span>
                                        </div>

                                        <div className="flex justify-between text-gray-300">
                                            <span>Devices</span>
                                            <span className="text-white font-semibold">
                                                {plan.devices}
                                            </span>
                                        </div>
                                    </div>

                                </div>

                                {/* Button */}
                                <button
                                    className={`
                                    w-full
                                    py-4
                                    rounded-2xl
                                    font-bold
                                    text-lg
                                    transition-all
                                    duration-300
                                    ${plan.popular
                                            ? "bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_35px_rgba(168,85,247,0.7)]"
                                            : "bg-white/5 border border-white/10 text-white hover:bg-purple-600 hover:border-purple-500"}
                                    `}
                                >
                                    Start Watching
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}