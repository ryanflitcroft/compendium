export async function getCollection(query) {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?fields=id,title,date_start,date_end,artist_title,artist_id,artwork_type_title,image_id&limit=100&q=${query}`
  );

  const { data } = await res.json();
  const response = handleData(data);

  return response;
}

function handleData(data) {
  return data.map((item) => ({
    id: item.id,
    title: item.title,
    artist: item.artist_title,
    artistId: item.artist_id,
    dateStart: item.date_start,
    dateEnd: item.date_end,
    artworkType: item.artwork_type_title,
    imageId: item.image_id,
  }));
}
