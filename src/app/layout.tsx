import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Crunchyroll: Watch Popular Anime, Play Games & Shop Online",
    description: "Embark on an anime adventure with Crunchyroll, your ultimate destination for streaming the largest collection of anime series and movies.",
    icons: {
        icon: "https://ext.same-assets.com/958472976/2264145661.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="antialiased bg-black text-white min-h-screen">
                {children}
            </body>
        </html>
    );
}
