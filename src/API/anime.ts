export async function getAnime() {
  const query = `
  {
    Page(page: 1, perPage: 20) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title { english romaji }
        averageScore
        episodes
        coverImage { large }
      }
    }
  }
  `;

  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  return data?.data?.Page?.media || [];
}

export async function getAnimeById(id) {
  const query = `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title { english romaji }
      description
      averageScore
      episodes
      genres
      coverImage { large }
    }
  }
  `;

  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: { id } }),
  });

  const data = await res.json();
  return data?.data?.Media;
}
