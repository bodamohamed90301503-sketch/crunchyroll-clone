"use client";

import { useState } from "react";
import {
    Menu,
    X,
    Search,
    Crown,
    Bell,
} from "lucide-react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header
            className="
            fixed
            top-0
            left-0
            right-0
            z-50
            border-b
            border-white/10
            bg-black/40
            backdrop-blur-2xl
            "
        >

            {/* Purple Glow */}
            <div className="absolute inset-0 bg-purple-600/5 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer group">

                        <div
                            className="
                            w-11
                            h-11
                            rounded-2xl
                            bg-purple-600
                            flex
                            items-center
                            justify-center
                            text-white
                            font-black
                            text-xl
                            shadow-[0_0_30px_rgba(168,85,247,0.8)]
                            group-hover:scale-110
                            transition-all
                            duration-300
                            "
                        >
                            A
                        </div>

                        <div>
                            <h1 className="text-white text-xl font-extrabold tracking-wide">
                                ANIMEX
                            </h1>

                            <p className="text-purple-400 text-xs">
                                Anime Streaming
                            </p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-10">

                        {[
                            "Home",
                            "Trending",
                            "Movies",
                            "Series",
                            "Manga",
                        ].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="
                                relative
                                text-gray-300
                                hover:text-white
                                font-medium
                                transition-all
                                duration-300
                                group
                                "
                            >
                                {item}

                                <span
                                    className="
                                    absolute
                                    -bottom-2
                                    left-0
                                    w-0
                                    h-[2px]
                                    bg-purple-500
                                    transition-all
                                    duration-300
                                    group-hover:w-full
                                    "
                                />
                            </a>
                        ))}

                    </nav>

                    {/* Right Side */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* Search */}
                        <div
                            className="
                            flex
                            items-center
                            gap-3
                            bg-white/5
                            border
                            border-white/10
                            rounded-2xl
                            px-4
                            py-3
                            backdrop-blur-xl
                            "
                        >
                            <Search className="w-5 h-5 text-gray-400" />

                            <input
                                type="text"
                                placeholder="Search anime..."
                                className="
                                bg-transparent
                                outline-none
                                text-sm
                                text-white
                                placeholder:text-gray-500
                                w-40
                                "
                            />
                        </div>

                        {/* Notification */}
                        <button
                            className="
                            w-12
                            h-12
                            rounded-2xl
                            bg-white/5
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-white
                            hover:bg-purple-600
                            transition-all
                            duration-300
                            hover:scale-110
                            "
                        >
                            <Bell className="w-5 h-5" />
                        </button>

                        {/* Premium Button */}
                        <button
                            className="
                            flex
                            items-center
                            gap-2
                            px-6
                            py-3
                            rounded-2xl
                            bg-purple-600
                            hover:bg-purple-500
                            text-white
                            font-bold
                            transition-all
                            duration-300
                            hover:scale-105
                            shadow-[0_0_35px_rgba(168,85,247,0.7)]
                            "
                        >
                            <Crown className="w-5 h-5" />
                            Premium
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="
                        md:hidden
                        w-12
                        h-12
                        rounded-2xl
                        bg-white/5
                        border
                        border-white/10
                        text-white
                        flex
                        items-center
                        justify-center
                        "
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div
                        className="
                        md:hidden
                        mt-4
                        mb-6
                        p-6
                        rounded-3xl
                        bg-white/5
                        border
                        border-white/10
                        backdrop-blur-2xl
                        animate-in
                        fade-in
                        slide-in-from-top-5
                        "
                    >

                        <nav className="flex flex-col gap-6">

                            {[
                                "Home",
                                "Trending",
                                "Movies",
                                "Series",
                                "Manga",
                            ].map((item) => (
                                <a
                                    key={item}
                                    href="#"
                                    className="
                                    text-gray-300
                                    hover:text-purple-400
                                    transition-colors
                                    text-lg
                                    font-medium
                                    "
                                >
                                    {item}
                                </a>
                            ))}

                            <button
                                className="
                                mt-4
                                flex
                                items-center
                                justify-center
                                gap-2
                                px-6
                                py-4
                                rounded-2xl
                                bg-purple-600
                                text-white
                                font-bold
                                shadow-[0_0_30px_rgba(168,85,247,0.7)]
                                "
                            >
                                <Crown className="w-5 h-5" />
                                Get Premium
                            </button>

                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}