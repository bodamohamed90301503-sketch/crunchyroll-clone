"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getAnime } from "../api/anime";

type Anime = {
  id: number;
  title: {
    english: string | null;
    romaji: string;
  };
  coverImage: {
    large: string;
  };
};

export default function AnimeCarousel() {
  const [anime, setAnime] = useState<Anime[]>([]);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    getAnime().then(setAnime);
  }, []);

  return (
    <div className="flex gap-6 overflow-x-auto" ref={ref}>
      {anime.map((a) => (
        <Link key={a.id} href={`/anime/${a.id}`}>
          <div className="w-48 text-white">
            <img src={a.coverImage.large} />
            <p>{a.title.english || a.title.romaji}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}