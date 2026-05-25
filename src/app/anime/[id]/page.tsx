import { getAnimeById } from "@/api/anime";
import CommentsClient from "./CommentsClient";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const anime = await getAnimeById(Number(params.id));

    if (!anime) {
        return <div className="text-white">Not found</div>;
    }

    return (
        <div className="text-white p-6">
            <h1>{anime.title.english || anime.title.romaji}</h1>

            <img src={anime.coverImage.large} alt={anime.title.romaji} />

            {anime.description && (
                <p dangerouslySetInnerHTML={{ __html: anime.description }} />
            )}

            <CommentsClient animeId={anime.id} />
        </div>
    );
}