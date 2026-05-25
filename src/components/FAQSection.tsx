"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Does Crunchyroll offer a free trial?",
        answer:
            "Yes! Crunchyroll provides a 7-day free trial for premium plans, letting users experience ad-free streaming and other benefits before subscribing.",
    },
    {
        question: "How does Crunchyroll's streaming work?",
        answer:
            "Crunchyroll allows users to stream anime anytime, anywhere on various devices, including smartphones, tablets, gaming consoles, and smart TVs. Premium members enjoy higher-quality streaming and faster access to new episodes.",
    },
    {
        question: "What anime titles can I watch on Crunchyroll?",
        answer:
            "Crunchyroll features a vast selection of anime, including popular titles such as One Piece, Solo Leveling, Attack on Titan, My Hero Academia, Jujutsu Kaisen, and many more.",
    },
    {
        question: "What are the benefits of Crunchyroll Premium?",
        answer:
            "Premium membership includes ad-free streaming, early access to episodes, offline viewing, multi-device streaming, and discounts on anime merchandise. Higher tiers offer additional perks such as exclusive swag bags.",
    },
    {
        question: "How do I cancel my Crunchyroll subscription?",
        answer:
            "You can cancel your subscription anytime through your account settings. Your access remains active until the end of your billing cycle.",
    },
    {
        question: "Does Crunchyroll have dubbed anime?",
        answer:
            "Yes! Crunchyroll offers both subtitled and dubbed anime, allowing viewers to watch anime in their preferred language.",
    },
    {
        question: "Can I download anime on Crunchyroll?",
        answer:
            "Yes, but downloading episodes for offline viewing is available only for Mega Fan and Ultimate Fan subscribers.",
    },
    {
        question: "How do I activate Crunchyroll on my device?",
        answer:
            'Activating Crunchyroll is simple! Just open the Crunchyroll app on your device and select "Activate with Code." A six-character code will appear on your screen. Visit https://www.crunchyroll.com/activate on your computer or phone, enter the code, and you\'ll be logged in and ready to stream your favorite anime.',
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-black">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 cr-serif">
                    FAQ
                </h2>

                <div className="space-y-0">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border-b border-white/20"
                        >
                            <button
                                type="button"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full flex items-center justify-between py-5 text-left"
                            >
                                <span className="text-white font-medium text-lg pr-4">{faq.question}</span>
                                {openIndex === idx ? (
                                    <Minus className="w-5 h-5 text-[#F47521] flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-[#F47521] flex-shrink-0" />
                                )}
                            </button>
                            {openIndex === idx && (
                                <div className="pb-5">
                                    <p className="text-gray-400">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <h3 className="text-3xl font-bold text-white mb-4 cr-serif">Questions?</h3>
                    <p className="text-gray-400">
                        Visit our{" "}
                        <a href="#" className="text-[#F47521] hover:underline">
                            Help Center
                        </a>{" "}
                        to learn more.
                    </p>
                </div>

                <p className="text-center text-gray-500 text-sm mt-12">
                    *Device and content availability vary by country or region.
                </p>
            </div>
        </section>
    );
}
