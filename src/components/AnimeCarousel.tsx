"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getAnime } from "../api/anime";

export default function AnimeCarousel() {
  const [anime, setAnime] = useState([]);
  const ref = useRef(null);

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
