export default function handleData(data) {
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
