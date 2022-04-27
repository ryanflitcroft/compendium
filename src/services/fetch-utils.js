import handleData from '../utils/handleData';

export async function getCollection(query) {
  const url =
    'https://api.artic.edu/api/v1/artworks/search?fields=id,title,date_start,date_end,artist_title,artist_id,artwork_type_title,image_id&limit=100&q=';

  const res = await fetch(url + query);

  const { data } = await res.json();
  const response = handleData(data);
  console.log(response);

  return response;
}
