import { getAnimeById } from "@/api/anime";
import CommentsClient from "./CommentsClient";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const anime = await getAnimeById(Number(id));

  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* HERO SECTION */}
      <div className="flex gap-10 flex-col md:flex-row">

        <img
          src={anime?.coverImage?.large}
          className="w-64 rounded-xl shadow-lg"
          alt="anime"
        />

        <div>
          <h1 className="text-4xl font-bold">
            {anime?.title?.english || anime?.title?.romaji}
          </h1>

          <p className="text-gray-400 mt-3">
            ? Rating: {anime?.averageScore || "N/A"}
          </p>

          <p className="text-gray-400">
            ?? Episodes: {anime?.episodes || "TBA"}
          </p>

          <p className="text-gray-400 mt-2">
            ?? Genres: {anime?.genres?.join(", ") || "Unknown"}
          </p>
        </div>
      </div>

      {/* STORY */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-3">Story</h2>

        <div
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: anime?.description || "No description available",
          }}
        />
      </div>

      {/* EPISODES */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <h2 className="text-2xl font-bold mb-2">Episodes</h2>
        <p className="text-gray-500">
          Episodes section will be loaded here (coming soon)
        </p>
      </div>

      {/* SEASONS / MOVIES */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-2">Seasons / Movies</h2>
        <p className="text-gray-500">
          Related seasons or movies will appear here
        </p>
      </div>

      {/* COMMENTS */}
      <div className="mt-10 border-t border-white/10 pt-6">
        <h2 className="text-2xl font-bold mb-4">?? Comments</h2>

        <CommentsClient animeId={Number(id)} />
      </div>

      {/* COMPARISON */}
      <div className="mt-12 border-t border-white/10 pt-10">

        <h2 className="text-2xl font-bold mb-4">
          ? Compare With Another Anime
        </h2>

        <p className="text-gray-400 mb-4">
          Search for another anime to compare stats, story, and rating
        </p>

        <input
          placeholder="Search anime..."
          className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white outline-none"
        />

        <div className="mt-6 text-gray-500">
          Comparison feature will appear here (Anime vs Anime)
        </div>

      </div>

    </div>
  );
}