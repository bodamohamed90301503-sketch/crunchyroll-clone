import { getAnimeById } from "../../../api/anime";
import CommentsClient from "./CommentsClient";

export default async function Page({
    params,
}: {
    params: { id: string };
}) {
    const animeId = Number(params.id);

    const anime = await getAnimeById(animeId);

    return (
        <div className="text-white p-6">
            <h1>{anime.title.english || anime.title.romaji}</h1>

            <img src={anime.coverImage.large} />

            <p dangerouslySetInnerHTML={{ __html: anime.description }} />

            <CommentsClient animeId={animeId} />
        </div>
    );
}