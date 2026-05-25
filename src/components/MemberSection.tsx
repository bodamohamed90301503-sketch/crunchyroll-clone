"use client";

export default function MemberSection() {
    return (
        <section className="py-16 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cr-serif">
                    Already a Member?
                </h2>
                <button
                    type="button"
                    className="bg-white/10 border border-white/30 text-white font-medium px-12 py-3 rounded hover:bg-white/20 transition-all"
                >
                    Log in
                </button>
            </div>
        </section>
    );
}
