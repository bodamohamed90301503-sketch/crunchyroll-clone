"use client";

export default function MangaSection() {
    return (
        <section className="py-20 bg-black relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-[#F47521] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F47521] rounded-full blur-[150px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <svg
                                className="h-8 w-8 text-[#F47521]"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2zm4 8h-2V9h2v8z" />
                            </svg>
                            <span className="text-[#F47521] text-2xl font-bold tracking-wide">Crunchyroll</span>
                            <span className="text-white text-xl font-light">manga</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Introducing Crunchyroll Manga!
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            An entire manga library at your fingertips
                        </p>
                        <button
                            type="button"
                            className="bg-[#F47521] text-black font-bold px-8 py-4 rounded hover:bg-[#ff8a3c] transition-all uppercase tracking-wide text-sm"
                        >
                            SEE PLAN OPTIONS
                        </button>
                    </div>

                    {/* Image / Mockup */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Tablet mockup */}
                            <div className="relative bg-gray-900 rounded-2xl p-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-white rounded-lg overflow-hidden aspect-[4/3] w-72 md:w-96">
                                    <div className="h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="text-6xl mb-4">??</div>
                                            <p className="text-gray-600 font-medium">Manga Reader</p>
                                            <p className="text-gray-400 text-sm mt-2">10,000+ titles available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Phone mockup */}
                            <div className="absolute -bottom-8 -right-8 bg-gray-800 rounded-3xl p-3 shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-white rounded-2xl overflow-hidden aspect-[9/16] w-28 md:w-36">
                                    <div className="h-full bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-3xl mb-2">??</div>
                                            <p className="text-gray-600 text-xs font-medium">Read Anywhere</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
